import { useState } from "react";
import "./App.css";
import { Input } from "antd";
function App() {
  const [userInput, setUserInput] = useState("");
  function handleUserInput(e) {
    setUserInput(e.target.value);
  }
  return (
    <>
      <h1>Welcome to AI Assist</h1>
      <h5>Built by Harshal and Akshay</h5>
      <Input
        type="text"
        value={userInput}
        onChange={handleUserInput}
        placeholder="Type Here..."
      />
    </>
  );
}

export default App;
