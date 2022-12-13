import React, { useState } from "react";
import "./app.css";

function App() {
  return <Counter />;
}

export default App;

function Counter() {
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

function ErrorCounter() {
  let counter = 0;
  console.log(counter);

  const onClickIncrease = () => {
    counter += 1;
  };

  const onClickDecrease = () => {
    counter -= 1;
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
