import { useEffect, useRef, useState } from "react";
import { Chatbot } from "supersimpledev";
import dayjs from "dayjs";
import sendBtn from "../assets/arrow_upward_alt_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png";
import soundMs from "../assets/son_duquotidient-message-envoye-iphone-apple-391098 (1).mp3";

export function ChatInput({ chatMessages, setChatMessage }) {
  const [inputChat, setInputChat] = useState("");
  const btnRef = useRef(null);
  const sendSoundRef = useRef(null);

  function saveInputText(e) {
    setInputChat(e.target.value);
  }
  useEffect(() => {
    const buttonElement = btnRef.current;
    if (inputChat === "") {
      buttonElement.style.pointerEvents = "none";
      buttonElement.style.opacity = 0.7;
    } else {
      buttonElement.style.pointerEvents = " visible";
      buttonElement.style.opacity = 1;
    }
  }, [inputChat]);
  function clearMessage() {
    setChatMessage([]);
  }
  async function sendMessage() {
    if (sendSoundRef.current) {
      sendSoundRef.current.currentTime = 0;

      sendSoundRef.current.play().catch((err) => {
        console.log(err);
      });
    }

    const time = dayjs().valueOf();
    const nweChatMessages = [
      ...chatMessages,
      {
        message: inputChat,
        sender: "user",
        timeChat: dayjs(time).format("h:mma"),
        id: crypto.randomUUID(),
      },
      {
        message: "Loading...",
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ];
    setChatMessage(nweChatMessages);

    const response = await Chatbot.getResponseAsync(inputChat);
    console.log(response);
    console.log("response =", response);
    console.log("type =", typeof response);
    setChatMessage([
      ...nweChatMessages.slice(0, nweChatMessages.length - 1),
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
        timeChat: dayjs(time).format("h:mma"),
      },
    ]);
    setInputChat("");
  }
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      sendMessage();
    } else if (event.key === "Escape") {
      setInputChat("");
    }
  }

  return (
    <div className="container-textbox">
      <input
        className="input-text"
        placeholder="sent message to Chatbot"
        onChange={saveInputText}
        value={inputChat}
        onKeyDown={handleKeyDown}
        ref={btnRef}
      />{" "}
      <audio ref={sendSoundRef} src={soundMs} preload="auto" />
      <button className="btn-send" ref={btnRef} onClick={sendMessage}>
        <img
          src={sendBtn}
          alt="send message button arrow icon in chatbot input area"
        />
      </button>
      <button className="clear-msg" onClick={clearMessage}>
        Clear
      </button>
    </div>
  );
}
