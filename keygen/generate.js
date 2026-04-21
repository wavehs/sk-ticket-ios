const fs = require('fs');
const crypto = require('crypto');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const jose = require('jose');

const argv = yargs(hideBin(process.argv))
  .option('days', {
    alias: 'd',
    description: 'Number of days the key should be valid for',
    type: 'number',
    demandOption: true,
  })
  .option('device', {
    alias: 'dev',
    description: 'Device ID to bind the key to (e.g., A7B9-X2K1)',
    type: 'string',
    demandOption: true,
  })
  .help()
  .alias('help', 'h')
  .argv;

const days = argv.days;

async function generateKey() {
  let privateKey, publicKey;

  if (fs.existsSync('private_key.pem') && fs.existsSync('public_key.json')) {
    // Read existing keys
    const privateKeyPem = fs.readFileSync('private_key.pem', 'utf8');
    privateKey = await jose.importPKCS8(privateKeyPem, 'ES256');
    const publicKeyJwk = JSON.parse(fs.readFileSync('public_key.json', 'utf8'));
    publicKey = await jose.importJWK(publicKeyJwk, 'ES256');
    console.log('Loaded existing keys.');
  } else {
    // Generate new keys
    const { publicKey: pubKey, privateKey: privKey } = await crypto.subtle.generateKey(
        {
            name: "ECDSA",
            namedCurve: "P-256",
        },
        true,
        ["sign", "verify"]
    );

    // Export private key to PEM
    const exportedPrivateKey = await crypto.subtle.exportKey("pkcs8", privKey);
    const exportedAsBase64 = Buffer.from(exportedPrivateKey).toString('base64');
    const pemExported = `-----BEGIN PRIVATE KEY-----\n${exportedAsBase64.match(/.{1,64}/g).join('\n')}\n-----END PRIVATE KEY-----`;

    fs.writeFileSync('private_key.pem', pemExported);
    privateKey = await jose.importPKCS8(pemExported, 'ES256');

    // Export public key to JWK
    const exportedPublicKey = await crypto.subtle.exportKey("jwk", pubKey);
    fs.writeFileSync('public_key.json', JSON.stringify(exportedPublicKey, null, 2));

    // Also save public key to frontend source
    fs.writeFileSync('../src/util/publicKey.json', JSON.stringify(exportedPublicKey, null, 2));

    console.log('Generated new keys. Private key saved to private_key.pem, Public key saved to public_key.json and ../src/util/publicKey.json');
  }

  // Generate JWT
  const exp = Math.floor(Date.now() / 1000) + (days * 24 * 60 * 60);
  const jwt = await new jose.SignJWT({ 'urn:sk-ticket:subscription': true, device_id: argv.device })
    .setProtectedHeader({ alg: 'ES256' })
    .setIssuedAt()
    .setIssuer('sk-ticket-keygen')
    .setExpirationTime(exp)
    .sign(privateKey);

  console.log(`\nGenerated Key (Valid for ${days} days, until ${new Date(exp * 1000).toLocaleString()}):\n`);
  console.log(jwt);
  console.log('\nCopy this key and give it to the user.');
}

generateKey().catch(console.error);
