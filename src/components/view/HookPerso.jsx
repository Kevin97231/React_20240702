import { useIncrement } from "../../hook/useIncrement";
import { useToggle } from "../../hook/useToggle";

export const HookPerso = () => {
  const [checked, toggleCheck] = useToggle(false);

  const { count, increment, decrement } = useIncrement({
    initailValue: 0,
    min: 0,
  });

  return (
    <>
      <h1>Les hooks personnalisés</h1>

      <p className="p-2">
        <strong>
          <a href="https://usehooks.com/" className="underline">
            Plein de hooks personnalisé ici !!
          </a>
        </strong>
      </p>
      <h2>Cas de figure n°1</h2>
      <p>
        Dans une appli react, on peut souvent avoir besoin de faire varier une
        valeur entre vrai et faux (case à cocher). Par exemple, afficher/masquer
        un élement. Pour cela, on peut mettre en place un hook personnalisé
      </p>

      <div className="p-5">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => toggleCheck()}
        />
        <p>
          Case hook personnalisé : {checked ? "case cochée" : "case non cochée"}
        </p>
      </div>
      <h2>Cas de figure n°2</h2>
      <p className="pb-5">
        Je veux utiliser un hook perso. pour incrémenter et décrémenter une
        valeur (en passant par un useState pour mettre à jour mon rendu)
      </p>
      {count}
      <br />
      <button className="btn" onClick={increment}>
        +
      </button>
      <button className="btn" onClick={decrement}>
        -
      </button>
    </>
  );
};
