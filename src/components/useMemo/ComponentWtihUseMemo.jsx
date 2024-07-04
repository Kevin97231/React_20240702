import { useMemo, useState } from "react";

export const ComponentWtihUseMemo = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [input, setInput] = useState("");

  //  const sum = numbers.reduce((total, currentValue) => currentValue + total, 0);
  const sum = useMemo(() => {
    console.log("calcul du 'sum' présent dans le useMemo");
    return numbers.reduce((total, currentValue) => currentValue + total, 0);
  }, [numbers]);

  const addNumber = () => {
    setNumbers([...numbers, Math.random() * 10]);
  };

  return (
    <>
      <h2>Avec useMemo</h2>
      <p>Sum: {sum}</p>
      <button onClick={addNumber} className="btn m-5">
        AJouter un chiffre
      </button>
      <div>
        <input
          className="mx-5 input input-bordered"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {input}
      </div>
    </>
  );
};
