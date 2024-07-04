import axios from "axios";
import { useEffect, useState } from "react";

export const ExempleRequete = () => {
  const url = "http://localhost:3001/products";

  const [products, setProducts] = useState([]);

  //   A NE PAS REPRODUIRE !
  //   axios.get(url).then((response) => {
  //     console.log(response);
  //     setProducts(response.data);
  //   });

  // Bonne pratique, quand je fonctionne avec de l'asynchrone:

  useEffect(() => {
    // const fetchData = () => {
    //   axios
    //     .get(url)
    //     .then((response) => {
    //       console.log(response);
    //       setProducts(response.data);
    //     })
    //     .catch((err) => console(err.message))
    //     .finally(() => console.log("requête terminé !"));
    // };

    // Equivalent avec async / await:
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/products");
        console.log(response);
        setProducts(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des produits:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Exemple </h1>
    </>
  );
};
