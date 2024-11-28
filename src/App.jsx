import { useSelector } from "react-redux";
import "./App.css";
import ChatBot from "./component/Chatbot";
import Customisation from "./component/Customisation";
import { useEffect } from "react";

function App() {
  const { font } = useSelector((store) => store.settings);

  useEffect(() => {
    document.documentElement.style.setProperty("--font-family", font);
  }, [font]);
  return (
    <div className="app">
      <ChatBot />
      <Customisation />
    </div>
  );
}

export default App;
