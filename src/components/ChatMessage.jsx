import RobotImage from "../assets/robot.png";
import UserImge from "../assets/author-02.jpg";
export function ChatMessage({ message, sender, timeChat }) {
  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-bot"}
    >
      {sender === "robot" && (
        <img className="img-robot" src={RobotImage} width="30px" />
      )}
      <div className={sender === "user" ? "message-user" : "message-bot"}>
        {message}
        <p className="message-time">{timeChat}</p>
      </div>
      {sender === "user" && (
        <img className="img-user" src={UserImge} width="30px" />
      )}
    </div>
  );
}
