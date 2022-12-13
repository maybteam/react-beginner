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

export default ErrorCounter;
