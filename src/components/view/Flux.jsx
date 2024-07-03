/* eslint-disable react/prop-types */
import { useState } from "react";

/* eslint-disable react/no-unescaped-entities */
export const Flux = () => {
  const data = [
    { nom: "Produit 1", prix: 20.99, quantite: 5 },
    { nom: "Produit 2", prix: 15.45, quantite: 10 },
    { nom: "Produit 3", prix: 75.32, quantite: 58 },
    { nom: "Produit 4", prix: 30.0, quantite: 25 },
    { nom: "Produit 5", prix: 26.0, quantite: 16 },
  ];

  const [checked, setChecked] = useState(true);

  return (
    <>
      <h1>Les flux de données</h1>

      <h2>De parent vers enfant: </h2>
      <p>
        Pour faire passer des données d'un composant parent vers le composant
        enfant, nous devons utiliser les 'props'
      </p>
      <ComposantEnfant />
      <br />
      <ComposantEnfant text="Voici tes données !" dataFromParent={data} />

      <h2>De l'enfant vers son parent</h2>
      <p>
        En react, pour faire passer des données d'un composant enfant vers son
        parent, il est courant d'utiliser des fonctions de rappel (callback
        functions) passées en tant que props. Ces fonctions de rappel sont
        ensuite utilisées dans l'enfant pour transmettre les données au parent
      </p>

      <CheckBoxEnfant checked={checked} onCheck={setChecked} />

      <br />
      {checked ? "case cochée" : "case non cochée"}
    </>
  );
};

function ComposantEnfant({
  text = "passe moi tes données !",
  dataFromParent = [],
}) {
  return (
    <>
      {text}
      <p>Voici les données passés par mon parent: </p>
      {dataFromParent.length > 0 &&
        dataFromParent.map((product) => (
          <div key={product.nom} className="border">
            <p>Nom: {product.nom}</p>
            <p>Prix: {product.prix}</p>
            <p>Produit: {product.quantite}</p>
          </div>
        ))}
    </>
  );
}

function CheckBoxEnfant({ checked, onCheck }) {
  return (
    <input
      type="checkbox"
      onChange={(e) => onCheck(e.target.checked)}
      checked={checked}
    />
  );
}
