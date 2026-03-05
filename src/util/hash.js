import { randexp } from "randexp";

// generate hash in format ^[1-9]{2}[1-9a-z]{6}$
export const createMessageHash = () => randexp(/[a-z][A-Z][a-z0-9][0-9][a-z][0-9][A-Z][a-z]/);
