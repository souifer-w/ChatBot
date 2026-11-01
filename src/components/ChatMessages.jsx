import { useEffect, useRef } from "react";
import { ChatMessage } from "./ChatMessage";
export function ChatMessages({ chatMessages }) {
  const ChatMessageRef = useRef(null);
  useEffect(() => {
    const containerElement = ChatMessageRef.current;
    if (containerElement) {
      containerElement.scrollTop = containerElement.scrollHeight;
    }
  }, [chatMessages]);
  if (chatMessages.length === 0) {
    return (
      <p className="empty-chat">
        Welcom to the chatbot project! Send a message using the textbox below
      </p>
    );
  }
  return (
    <div className="chat-message-container" ref={ChatMessageRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            key={chatMessage.id}
            message={chatMessage.message}
            sender={chatMessage.sender}
            timeChat={chatMessage.timeChat}
          />
        );
      })}
    </div>
  );
}
