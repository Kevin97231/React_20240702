import { useState } from "react";

export const ComponentWtihoutUseMemo = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [input, setInput] = useState("");

  console.log("chargement du composant 'withoutUseMemo'");
  const sum = numbers.reduce((total, currentValue) => currentValue + total, 0);
  console.log("calcul de 'sum' effectué");

  const addNumber = () => {
    setNumbers([...numbers, Math.random() * 10]);
  };

  return (
    <>
      <h2>Sans useMemo</h2>
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
