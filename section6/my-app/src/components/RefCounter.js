import { useRef } from "react";
import "../app.css";

function RefCounter() {
  const inputRef = useRef(null);

  const onClickButton = () => {
    console.log(inputRef.current?.disabled);
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  console.log(inputRef.current);

  return (
    <div className="refCounter">
      <input ref={inputRef} disabled />
      <button type="button" onClick={onClickButton}>
        버튼
      </button>
    </div>
  );
}

export default RefCounter;
