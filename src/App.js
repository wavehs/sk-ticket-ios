import * as React from "react";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { MyMessage } from "./components/my_message";
import { TheirMessage } from "./components/their_message";
import { Divider } from "./components/divider";
import { createMessageHash } from "./util/hash";
import { generateFakeTimes } from "./util/time";
import FakeOverlay from "./components/FakeOverlay";
import { useSubscription } from "./util/subscription";
import { AdminPanel } from "./components/AdminPanel";

const { Component, Fragment } = React;

function MainApp() {
  const { isValid, loading, expirationDate, saveKey, checkSubscription, deviceId } = useSubscription();

  if (loading) {
    return <div style={{backgroundColor: 'var(--bg-color)', height: '100vh'}} />
  }

  return <App subscription={{ isValid, expirationDate, saveKey, checkSubscription, deviceId }} />;
}

function AppWrapper() {
  const [hash, setHash] = React.useState(window.location.hash);

  React.useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  if (hash === '#admin') {
    return <AdminPanel />;
  }

  return <MainApp />;
}

const messagesWrapperStyle = {
  marginTop: "calc(env(safe-area-inset-top, 47px) + 65px)",
  marginBottom: 80,
  padding: "0 16px 15px",
  backgroundColor: "var(--bg-color)",
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      fakeTimes: this.createFakeTimes(),
    };
    window.addEventListener("focus", this.refreshMessages);
  }

  componentDidMount() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  componentWillUnmount() {
    window.removeEventListener("focus", this.refreshMessages);
  }

  refreshMessages = () => {
    this.setState({
      fakeTimes: this.createFakeTimes(),
    });
  };

  createFakeTimes = () =>
    generateFakeTimes().map((fakeTime) => ({
      ...fakeTime,
      messageHash: createMessageHash(),
    }));

  render() {
    const { fakeTimes } = this.state;
    const { subscription } = this.props;
    const { isValid } = subscription;
    // Group messages by offsetDays
    const groupedMessages = fakeTimes.reduce((acc, curr) => {
      if (!acc[curr.offsetDays]) acc[curr.offsetDays] = [];
      acc[curr.offsetDays].push(curr);
      return acc;
    }, {});

    // Sort the keys numerically descending so that largest offset comes first
    const sortedOffsets = Object.keys(groupedMessages)
      .map(Number)
      .sort((a, b) => b - a);

    return (
      <Fragment>
        {!isValid && <FakeOverlay />}
        <Header subscription={subscription} />
        <div style={messagesWrapperStyle}>
          {sortedOffsets.map((offset, index) => {
            const messages = groupedMessages[offset];
            const isToday = offset === 0;
            return (
              <Fragment key={offset}>
                <Divider date={messages[0].divisorDate} isFirst={index === 0} />
                <div style={{ paddingBottom: "10px" }}>
                  {messages.map((msg, index) => (
                    <Fragment key={msg.messageHash}>
                      <div style={{ marginBottom: "8px" }}>
                        <MyMessage />
                      </div>
                      <div style={{ marginBottom: index !== messages.length - 1 ? "24px" : "0px" }}>
                        <TheirMessage
                          date={msg.date}
                          endTime={msg.endTime}
                          messageHash={msg.messageHash}
                          startTime={msg.startTime}
                          isLast={true}
                          isFirst={true}
                        />
                      </div>
                    </Fragment>
                  ))}
                </div>
              </Fragment>
            );
          })}
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default AppWrapper;
