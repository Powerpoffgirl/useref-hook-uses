import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  const inputElement = useRef();
  const [inputValue1, setInputValue1] = useState("");
  const previousInputValue1 = useRef("");

  const focusInput = () => {
    inputElement.current.focus();
  };

  useEffect(() => {
    count.current = count.current + 1;
    previousInputValue1.current = inputValue1;
  }, [inputValue1]);

  return (
    <div className="App">
      <br />
      <br />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
      <br />
      <br />
      <hr />
      <br />
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
      <br />
      <br />
      <hr />
      <br />
      <input
        type="text"
        value={inputValue1}
        onChange={(e) => setInputValue1(e.target.value)}
      />
      <h2>Current Value: {inputValue1}</h2>
      <h2>Previous Value: {previousInputValue1.current}</h2>
    </div>
  );
}

export default App;
