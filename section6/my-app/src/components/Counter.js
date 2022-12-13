import { useState, useEffect } from "react";
import { useUpdateEffect } from "../hooks";

function Counter() {
  const [counter, setCounter] = useState(0);

  const onClickIncrease = () => {
    setCounter((prev) => prev + 1);
  };

  const onClickDecrease = () => {
    setCounter((prev) => prev - 1);
  };

  useEffect(() => {
    console.log("USE EFFECT:: ", counter);
  }, [counter]);

  useUpdateEffect(() => {
    console.log("USE UPDATE EFFECT:: ", counter);
  }, [counter]);

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

export default Counter;
