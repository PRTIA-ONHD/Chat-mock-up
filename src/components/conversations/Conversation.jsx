import React from "react";
import "./conversation.css";

export default function Conversation() {
  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <span className="conversationName">John Doe</span>
    </div>
  );
}
