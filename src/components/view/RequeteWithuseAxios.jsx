import { useEffect, useState } from "react";
import { useAxios } from "../../hook/useAxios";

export const RequeteWithuseAxios = () => {
  const { get } = useAxios();

  const [products, setProducts] = useState();

  useEffect(() => {
    get("/products").then((result) => {
      setProducts(result);
      console.log(result);
    });
  }, []);

  return (
    <>
      <h1>Requetes avec notre hook personnalisé !</h1>

      {!products ? (
        <div className="skeleton h-32 w-32"></div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prix</th>
              <th>Quantité</th>
              <th>Catégorie</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.number}</td>
                <td>{product.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
