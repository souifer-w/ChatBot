import { useEffect, useState } from "react";
import { ChatInput } from "./components/ChatInput";
import { ChatMessages } from "./components/ChatMessages";
import { chatbot } from "supersimpledev";
import "./App.css";

function App() {
  const [chatMessages, setChatMessage] = useState(
    JSON.parse(localStorage.getItem("messages")) || [],
  );
  useEffect(() => {
    chatbot.addResponses({
      // Greetings

      hi: "Hello! 👋",
      hello: "Hi there! 😊",
      hey: "Hey! How are you?",
      yo: "Yo! 😎",
      "good morning": "Good morning! ☀️",
      "good afternoon": "Good afternoon! 😊",
      "good evening": "Good evening! 🌙",
      "good night": "Good night! 😴",

      // Goodbye
      bye: "Goodbye! 👋",
      "see you": "See you later!",
      "take care": "Take care! ❤️",

      // Politeness
      thanks: "You're welcome! 😊",
      "thank you": "My pleasure!",
      sorry: "No worries.",
      please: "Of course!",

      // Small Talk

      "how are you": "I'm doing great! How about you?",
      "what's up": "Not much! What's up with you?",
      "how's it going": "Everything's going well!",
      "how was your day": "It's been a good day so far.",

      // Identity
      "who are you": "I'm your AI assistant.",
      "what is your name": "I'm ChatBot.",
      "who made you": "A developer built me.",
      "are you real": "I'm an AI, not a human.",
      "are you a robot": "Yes, I'm an AI chatbot. 🤖",

      // Capabilities

      "what can you do":
        "I can answer questions, chat, and help with many topics.",
      help: "Ask me anything!",
      "can you help me": "Of course! What do you need?",

      // Time & Date
      time: "I can tell you the current time if connected to your device.",
      date: "I can tell today's date if connected to your device.",

      // Programming
      javascript:
        "JavaScript is one of the most popular programming languages.",
      html: "HTML creates the structure of web pages.",
      css: "CSS styles web pages.",
      react: "React is a JavaScript library for building user interfaces.",
      node: "Node.js lets JavaScript run on servers.",
      python: "Python is popular for AI, web development, and automation.",

      // Technology
      ai: "AI stands for Artificial Intelligence.",
      chatgpt: "ChatGPT is an AI language model.",
      computer: "Computers process information using hardware and software.",
      internet: "The internet connects millions of devices worldwide.",

      // Education
      math: "I can help solve math problems.",
      science: "Science helps us understand the world.",
      history: "History teaches us about past events.",
      english: "I can help you practice English.",

      // Health
      exercise: "Regular exercise is great for your health.",
      sleep: "Most adults need about 7–9 hours of sleep.",
      water: "Stay hydrated by drinking enough water.",
      food: "A balanced diet is important for good health.",

      // Entertainment
      joke: "Why do programmers hate nature? It has too many bugs. 😂",
      fact: "Octopuses have three hearts.",
      quote: "Success comes from consistency.",
      "motivate me": "You can do more than you think. Keep going! 💪",

      // Feelings
      "i am happy": "That's awesome! 😊",
      "i am sad": "I'm sorry you're feeling that way. I'm here to chat.",
      "i am bored": "Want a joke, a game, or an interesting fact?",
      "i am tired": "Make sure you get some rest.",
      "i am stressed": "Take a short break and focus on one thing at a time.",

      // Fun
      "tell me a joke":
        "Why do Java developers wear glasses? Because they don't C#. 😂",
      "tell me a fact": "Bananas are berries, but strawberries aren't.",
      "play a game": "Let's play! Try guessing a number between 1 and 10.",

      // Love
      "i love you": "❤️ That's kind of you!",
      "do you love me": "I appreciate you being here! 😊",

      // Weather
      weather: "I need a weather API to give live forecasts.",

      // Default
      default:
        "I'm not sure how to answer that yet. Could you rephrase your question?",
    });
    localStorage.setItem("messages", JSON.stringify(chatMessages));
  }, [chatMessages]);
  return (
    <div className="container-chatBot">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput chatMessages={chatMessages} setChatMessage={setChatMessage} />
    </div>
  );
}

export default App;
