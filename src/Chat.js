import React from "react";
import "./Chat.css";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

export default function Chat({ name, message, profilePic, timeStamp }) {
  return (
    <Link to={`/chat/${name}`}>
      <div className="chat">
        <Avatar className="chat-image" alt={name} src={profilePic} />
        <div className="chat-details">
          <h2>{name}</h2>
          <p className="chat-timestamp">{timeStamp}</p>
          <p>{message}</p>
        </div>
      </div>
    </Link>
  );
}
