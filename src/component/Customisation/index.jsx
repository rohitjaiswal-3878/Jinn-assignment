import React from "react";
import styles from "./index.module.css";
import { IoSendOutline } from "react-icons/io5";
import { VscSend } from "react-icons/vsc";
import { RiSendPlane2Fill } from "react-icons/ri";
import { AiOutlineSend } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  setBorderColor,
  setBorderRadius,
  setBotChatBackground,
  setBotChatTextColor,
  setBtnIcon,
  setChatBackground,
  setChatTextColor,
  setFont,
  setTitleBackground,
} from "../../store/setting";

const Customisation = () => {
  const { btnIcon, borderRadius } = useSelector((store) => store.settings);
  const dispatch = useDispatch();

  const handleIcon = (index) => {
    dispatch(setBtnIcon(index));
  };

  const handleColor = (e, place) => {
    const color = e.target.value;

    switch (place) {
      case "border":
        dispatch(setBorderColor(color));
        break;
      case "heading":
        dispatch(setTitleBackground(color));
        break;
      case "chatBg":
        dispatch(setBotChatBackground(color));
        break;
      case "chatText":
        dispatch(setBotChatTextColor(color));
        break;
      case "userChatBg":
        dispatch(setChatBackground(color));
        break;
      case "userChatText":
        dispatch(setChatTextColor(color));
        break;
    }
  };

  const handleBorderRadius = (e) => {
    dispatch(setBorderRadius(e.target.value));
  };

  const handleFont = (e) => {
    dispatch(setFont(e.target.value));
  };

  return (
    <div className={styles.container}>
      <ul className={styles.settings}>
        <li className={styles.buttonIcon}>
          <span>Button Icon</span>
          <ul>
            <li
              onClick={() => handleIcon(0)}
              style={{
                border: btnIcon == "0" ? "2px solid red" : "",
              }}
            >
              <IoSendOutline />
            </li>
            <li
              onClick={() => handleIcon(1)}
              style={{
                border: btnIcon == "1" ? "2px solid red" : "",
              }}
            >
              <VscSend />
            </li>
            <li
              onClick={() => handleIcon(2)}
              style={{
                border: btnIcon == "2" ? "2px solid red" : "",
              }}
            >
              <RiSendPlane2Fill />
            </li>
            <li
              onClick={() => handleIcon(3)}
              style={{
                border: btnIcon == "3" ? "2px solid red" : "",
              }}
            >
              <AiOutlineSend />
            </li>
          </ul>
        </li>
        <li>
          <span>Border Color</span>{" "}
          <input type="color" onChange={(e) => handleColor(e, "border")} />
        </li>
        <li>
          <span>Border radius</span>{" "}
          <input
            type="range"
            min="0"
            max="50"
            value={borderRadius ? borderRadius : "0"}
            onChange={handleBorderRadius}
          />
          <span>{borderRadius ? borderRadius : "0"} px</span>
        </li>
        <li>
          <span>Chat title area background color</span>
          <input type="color" onChange={(e) => handleColor(e, "heading")} />
        </li>
        <li>
          <span>Bot chat bubble background color</span>
          <input type="color" onChange={(e) => handleColor(e, "chatBg")} />
        </li>
        <li>
          <span>Bot chat text color</span>
          <input type="color" onChange={(e) => handleColor(e, "chatText")} />
        </li>
        <li>
          <span>User chat bubble background color</span>
          <input type="color" onChange={(e) => handleColor(e, "userChatBg")} />
        </li>
        <li>
          <span>User chat text color</span>
          <input
            type="color"
            onChange={(e) => handleColor(e, "userChatText")}
          />
        </li>
        <li>
          <span>Text font</span>{" "}
          <select name="textFont" id={styles.textFont} onChange={handleFont}>
            <option value="sans">sans</option>
            <option value="sans-serif">Sans-serif</option>
            <option value="monospace">Mongospace</option>
            <option value="fantasy">fantasy</option>
          </select>
        </li>
      </ul>
    </div>
  );
};

export default Customisation;
