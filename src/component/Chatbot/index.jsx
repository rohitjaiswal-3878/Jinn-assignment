import React from "react";
import styles from "./index.module.css";
import { IoMdSend } from "react-icons/io";
import { useSelector } from "react-redux";
import { IoSendOutline } from "react-icons/io5";
import { VscSend } from "react-icons/vsc";
import { RiSendPlane2Fill } from "react-icons/ri";
import { AiOutlineSend } from "react-icons/ai";

const ChatBot = () => {
  const {
    btnIcon,
    borderColor,
    borderRadius,
    titleBackground,
    botChatBackground,
    botChatTextColor,
    chatBackground,
    chatTextColor,
  } = useSelector((store) => store.settings);
  return (
    <div
      className={styles.container}
      style={{
        borderRadius: `${borderRadius}px`,
        borderColor: `${borderColor}`,
        borderWidth: borderColor ? "2px" : "",
        borderStyle: borderColor ? "solid" : "",
      }}
    >
      {/* Heading */}
      <div
        className={styles.chatHead}
        style={{
          background: titleBackground ? titleBackground : "",
        }}
      >
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
          <div
            className={styles.message}
            style={{
              background: chatBackground ? chatBackground : "",
              color: chatTextColor ? chatTextColor : "",
            }}
          >
            Hello Jinn
          </div>
        </div>
        <div className={styles.botMessageContainer}>
          <img src="/chat-bot.png" alt="chat bot icon." />
          <div
            className={styles.botMessage}
            style={{
              background: botChatBackground ? botChatBackground : "",
              color: botChatTextColor ? botChatTextColor : "",
            }}
          >
            Hello Anurag! How can i help you today?
          </div>
        </div>
      </div>

      {/* chat section */}
      <div className={styles.chatBox}>
        <input type="text" placeholder="Ask us anything..." />
        <div className={styles.sendIcon}>
          {btnIcon == "0" ? (
            <IoSendOutline />
          ) : btnIcon == "1" ? (
            <VscSend />
          ) : btnIcon == "2" ? (
            <RiSendPlane2Fill />
          ) : btnIcon == "3" ? (
            <AiOutlineSend />
          ) : (
            <IoMdSend />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
