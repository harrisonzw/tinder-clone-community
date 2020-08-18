import React, { useState } from "react";
import "./ChatScreen.css";
import { Avatar } from "@material-ui/core";

export default function ChatScreen() {
  const [input, setInput] = useState();
  const [messages, setMessages] = useState([
    {
      name: "Annie",
      image:
        "https://vignette.wikia.nocookie.net/community-sitcom/images/5/53/Annie_composite_edited-1.jpg/revision/latest?cb=20130221154451",
      message: "Back in Corpus Christi they calle me 'Capricious Caroline"
    },
    {
      message: "Annie's pretty young. We try not to sexualize her."
    }
  ]);

  const handleSend = e => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chat-screen">
      <p className="chat-screen-timestamp">YOU MATCH WITH ANNIE ON 7/01/20</p>

      {messages.map(message =>
        message.name ? (
          <div className="chat-screen-message">
            <Avatar
              className="chat-screen-avatar"
              alt={message.name}
              src={message.image}
            />
            <p className="chat-screen-text">{message.message}</p>
          </div>
        ) : (
          <div className="chat-screen-message">
            <p className="chat-screen-text-user">{message.message}</p>
          </div>
        )
      )}

      <form className="chat-screen-input">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          className="chat-screen-input-field"
          placeholder="Ask them what they are reading !"
        ></input>
        <button
          onClick={handleSend}
          type="submit"
          className="chat-screen-input-button"
        >
          SEND
        </button>
      </form>
    </div>
  );
}
