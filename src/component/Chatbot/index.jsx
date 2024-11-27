import React from "react";
import styles from "./index.module.css";
import { IoMdSend } from "react-icons/io";

const ChatBot = () => {
  return (
    <div className={styles.container}>
      {/* Heading */}
      <div className={styles.chatHead}>
        <div className={styles.icon}>
          <img src="/chat-bot.png" alt="chat bot icon." />
        </div>
        <div className={styles.name}>
          <span>Jinn Live</span>
          <span>Demo Bot</span>
        </div>

        <span className={styles.close}>x</span>
      </div>

      {/* Body */}
      <div className={styles.chatSection}>
        <div className={styles.messageContainer}>
          <div className={styles.message}>Hello Jinn</div>
        </div>
        <div className={styles.botMessageContainer}>
          <img src="/chat-bot.png" alt="chat bot icon." />
          <div className={styles.botMessage}>
            Hello Anurag! How can i help you today?
          </div>
        </div>
      </div>

      {/* chat section */}
      <div className={styles.chatBox}>
        <input type="text" placeholder="Ask us anything..." />
        <div className={styles.sendIcon}>
          <IoMdSend />
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
