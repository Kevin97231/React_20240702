import { useState, useEffect } from "react";

/* eslint-disable react/no-unescaped-entities */
export const HookUseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effet secondaire déclenché");
    document.title = `Count: ${count}`;

    return () => {
      console.log("fonction de nettoyage");
    };
  }, [count]);

  useEffect(() => {
    // Si mon tableau de dépendance est vide, le code contenu ici
    //  se déclenchera uniquement au 'montage du composant'
    console.log("Composant monté");

    // le code contenu dans le return sera exécuté au moment du 'démontage
    return () => {
      console.log("fonction exécuté au démontage du composant !");
    };
  }, []);

  return (
    <>
      <h1>Le hook useEffect</h1>
      <ul>
        Le hook useEffect est utilisé:
        <li>pour gérer des effets secondaires d'un composant</li>
        <li>
          pour effectuer des opérations après le rendu du composant (comme{" "}
          <strong>des appels à des API</strong>, manipulation du DOM, gestion
          d'abonnements ...)
        </li>
      </ul>
      <p className="py-5">
        <strong>
          useEffect() est très souvent utilisé en conjonction avec un useState()
          pour gérer des effets secondaires à des changements d'état
        </strong>
      </p>

      <h2>Exemple: </h2>
      <div className="flex">
        <p>count = {count}</p>
        <button className="btn" onClick={() => setCount((value) => value + 1)}>
          +
        </button>
        <h4 className="pt-2 pl-2">
          Regardez le titre du document ! (nom de l'onglet)
        </h4>
      </div>
    </>
  );
};
