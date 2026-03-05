import * as React from "react";
import { Divider } from "../divider";
import { MyMessage } from "../my_message";
import { TheirMessage } from "../their_message";

export const MessageBlock = ({
  date,
  divisorDate,
  endTime,
  messageHash,
  receivedTime,
  sentTime,
  startTime
}) => (
  <div>
    <Divider date={divisorDate} />
    <MyMessage sentTime={sentTime} />
    <TheirMessage
      date={date}
      endTime={endTime}
      messageHash={messageHash}
      receivedTime={receivedTime}
      startTime={startTime}
    />
  </div>
);
