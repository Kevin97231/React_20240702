import { useState } from "react";

export const HookUseState = () => {
  let [count, setCount] = useState(0);

  let count2 = 0;

  const incrementUseState = () => {
    // setCount(count + 1);
    setCount((value) => value + 1);
  };

  function increment() {
    console.log("j'ai cliqué sur le deuxième bouton");
    count2 = count2 + 1;
  }

  return (
    <>
      <h1>Le hook useState</h1>

      <div className="m-5 border">
        <p>count: {count}</p>
        <button onClick={incrementUseState}>+</button>
      </div>
      <div className="m-5 border">
        <p>count2: {count2}</p>
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};
