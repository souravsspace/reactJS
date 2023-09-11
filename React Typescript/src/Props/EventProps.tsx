import React, { useState } from "react";

type EventPropsType = {
  alertMessage: (message: string) => void;
  handleEvent: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number)=> void

};

export default function EventProps({
  alertMessage,
  handleEvent,
}: EventPropsType) {
  const [message, setMessage] = useState("");
  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={() => alertMessage(message)}>Click me</button>
      <button onClick={(e) => handleEvent(e, 101)}>Click me</button>
    </div>
  );
}
