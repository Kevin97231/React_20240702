/* eslint-disable react/prop-types */
import { useState } from "react";

export const Exercice = () => {
  return (
    <>
      <h1>Exercices</h1>
      Nous avons une liste de produits:
      <pre>
        {/* number correspond à la quantité */}
        {`
                    const products = [
                        { category: 'Fruits', price: '$1', number: 0, name: 'Banana' },
                        { category: 'Fruits', price: '$1', number: 2, name: 'Mango' },
                        { category: 'Fruits', price: '$2', number: 0, name: 'Pineapple' },
                        { category: 'Vegetables', price: '$2', number: 4, name: 'Broccoli' },
                        { category: 'Vegetables', price: '$4', number: 0, name: 'Carrot' },
                        { category: 'Vegetables', price: '$1', number: 6, name: 'Zucchini' }
                    ];
                `}
      </pre>
      <pre>
        {`
                    1)  Créer un composant parent et deux composants enfants

                        Les deux composants enfant afficheront un tableau contenant les colonnes 'nom', 'prix' et 'quantité'. Le premier enfant affichera UNIQUEMENT les fruits,
                        le second uniquement les légumes

                        (Utiliser la fonction filter() pour trier)

                    2)  Ajouter une case à cocher permettant de masquer / afficher les produits qui ne sont pas en stock (s'aider de l'attribut 'number' représentant la quantité)

                    3)  Ajouter une barre de recherche permettant de faire une recherche sur le 'name' sur l'ensemble du tableau
                `}
      </pre>
      <br />
      <ComposantParent />
    </>
  );
};

const ComposantParent = () => {
  const products = [
    { category: "Fruits", price: "$1", number: 0, name: "Banana" },
    { category: "Fruits", price: "$1", number: 2, name: "Mango" },
    { category: "Fruits", price: "$2", number: 0, name: "Pineapple" },
    { category: "Vegetables", price: "$2", number: 4, name: "Broccoli" },
    { category: "Vegetables", price: "$4", number: 0, name: "Carrot" },
    { category: "Vegetables", price: "$1", number: 6, name: "Zucchini" },
  ];

  const fruits = products.filter((product) => product.category === "Fruits");
  const legumes = products.filter(
    (product) => product.category === "Vegetables"
  );

  const [afficherHorsStock, setAfficherHorsStock] = useState(true);
  const [rechercheUtilisateur, setRechercheUtilisateur] = useState("");

  const handleCheckBox = (e) => setAfficherHorsStock(e.target.checked);
  const handleSearch = (e) => setRechercheUtilisateur(e.target.value);

  return (
    <>
      <label>Afficher hors stock: </label>
      <div className="flex">
        <div>
          <div>
            <input
              type="text"
              value={rechercheUtilisateur}
              onChange={handleSearch}
            />
          </div>
          <input
            type="checkbox"
            checked={afficherHorsStock}
            onChange={handleCheckBox}
          />
        </div>
      </div>
      <ProductList
        products={fruits}
        afficherHorsStock={afficherHorsStock}
        rechercheUtilisateur={rechercheUtilisateur}
      />
      <ProductList
        products={legumes}
        afficherHorsStock={afficherHorsStock}
        rechercheUtilisateur={rechercheUtilisateur}
      />
      {/* <Fruits products={products} />;
      <Legumes products={products} />; */}
    </>
  );
};

const ProductList = ({ products, afficherHorsStock, rechercheUtilisateur }) => {
  return (
    <>
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prix</th>
            <th>Quantité</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 &&
            products
              .filter(
                (product) =>
                  (afficherHorsStock ? true : product.number > 0) &&
                  product.name
                    .toLowerCase()
                    .includes(rechercheUtilisateur.toLowerCase())
              )
              .map((product) => (
                <tr key={product.name}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.number}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </>
  );
};

//  SOLUTION AVEC DEUX COMPOSANTS -> un pour les fruits et un pour les légumes
// const Fruits = ({ products }) => {
//   const fruits = products.filter((product) => product.category === "Fruits");

//   return (
//     <>
//       {fruits.map((product) => (
//         <ul key={product.name}>
//           <li>{product.name}</li>
//           <li>{product.price}</li>
//           <li>{product.number}</li>
//         </ul>
//       ))}
//     </>
//   );
// };

// const Legumes = ({ products }) => {
//   const legumes = products.filter(
//     (product) => product.category === "Vegetables"
//   );

//   return (
//     <>
//       {legumes.map((product) => (
//         <ul key={product.name}>
//           <li>{product.name}</li>
//           <li>{product.price}</li>
//           <li>{product.number}</li>
//         </ul>
//       ))}
//     </>
//   );
// };
