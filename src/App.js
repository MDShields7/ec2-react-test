import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import io from "socket.io-client";
// var socket = io(); // PRODUCTION BUILD
var socket = io(); // DEVELOPMENT

function App() {
  const [msgs, setMsgs] = useState([]);
  socket.on("welcome", (welcome) => {
    // console.log('typeof msgs', typeof msgs)
    // console.log('Array.isArray(msgs)', Array.isArray(msgs))
    // console.log('typeof welcome', typeof welcome)
    // console.log('welcome', welcome)
    // console.log('typeof newMsgs', typeof newMsgs)
    let newMsgs = [...msgs];
    newMsgs.push(welcome);
    console.log('newMsgs', newMsgs)
    setMsgs(newMsgs);
    // setMsgs([...msgs].push(welcome));
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Test ReactJS project.</p>
        <ul>
          {msgs.map((elem) => (
            <li>{elem}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
