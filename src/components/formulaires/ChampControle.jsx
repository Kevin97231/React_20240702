/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

//  Exemple avec un champ 'contrôlé'
export const ChampControle = () => {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <h2> Les champs contrôlés </h2>
      <p>
        En react, nous avons un concept que nous pouvons appeler les champs
        contrôlés qui s'utilise grâce au <strong>onChange()</strong> d'une input
        et au hook useState. Ainsi, nous pouvons mettre à jour une variable lié
        à l'input à chque changement (donc à chaque fois qu'un caractère est
        ajouté ou supprimé, la variable est mise à jour)
      </p>
      {/* Exemple */}
      <div className="p-5 mt-5 border mb-10 w-fit">
        <p>Bonjour, {name !== "" ? name : "entrez votre nom"}</p>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          className="input input-bordered"
        />
      </div>
    </>
  );
};
