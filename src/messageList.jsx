import React, { useState } from "react";
import Message from "./message.jsx";

//se encarga de renderizar cuando hay mensajes comentados
function MessageList() {
  const [message, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  function inputHandler(event) {
    const value = event.target.value;
    setInputText(value);
  }

  function addHandler() {
    setMessages((prevValue) => [...prevValue, inputText]);
  }

  function createMessage(item) {
    return <Message text={item} />;
  }

  return (
    <React.Fragment>
      <div className="comment">
        <input
          className="comment-input"
          onChange={inputHandler}
          type="text"
          value={inputText}
          placeholder="Add a comment..."
        />
        <button className="comment-button" onClick={addHandler}>
          Comment
        </button>
        <h2>Comments</h2>
        <div className="messages">{message.map(createMessage)}</div>
      </div>
    </React.Fragment>
  );
}

export default MessageList;
