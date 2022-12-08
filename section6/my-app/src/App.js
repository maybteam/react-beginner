import React, { useState } from "react";
import "./app.css";

function App() {
  const [counter, setCounter] = useState(0);

  const onClickIncrease = () => {
    setCounter((prev) => prev + 1);
  };

  const onClickDecrease = () => {
    setCounter((prev) => prev - 1);
    setCounter((prev) => prev - 1);
  };

  return (
    <main>
      <button type="button" onClick={onClickDecrease}>
        -
      </button>
      <strong>{counter}</strong>
      <button type="button" onClick={onClickIncrease}>
        +
      </button>
    </main>
  );
}

export default App;