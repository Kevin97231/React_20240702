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
    const fetchData = () => {
      axios
        .get(url)
        .then((response) => {
          console.log(response);
          setProducts(response.data);
        })
        .catch((err) => console(err.message))
        .finally(() => console.log("requête terminé !"));
    };

    // Equivalent avec async / await:
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get("http://localhost:3001/products");
    //     console.log(response);
    //     setProducts(response.data);
    //   } catch (error) {
    //     console.error("Erreur lors de la récupération des produits:", error);
    //   }
    // };
    fetchData();
  }, []);

  const addProduct = (newProduct) => {
    axios.post(url, newProduct).then((response) => {
      console.log(response);

      // Permet de mettre à jour le tableau sans avoir besoin de refaire une requete 'get'
      // En général, une API renvoie en réponse à un POST l'objet / la données qui a été rajouté(e)
      setProducts((prevProducts) => [...prevProducts, response.data]);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const newProduct = {
      category: formData.get("category"),
      name: formData.get("name"),
      number: formData.get("number"),
      price: formData.get("price"),
    };

    addProduct(newProduct);
  };

  return (
    <>
      <h2>Les produits reçus de mon Json serveur : </h2>
      <div className="border m-5 p-5">
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

        {/* Formulaire pour ajouter de nouveaux produits: */}

        <div className="py-10 border-t">
          <h2>Requête post: </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-4 gap-4 mb-5">
              <input
                name="name"
                placeholder="Nom du produit:"
                type="text"
                className="flex input input-bordered"
              />
              <input
                name="number"
                placeholder="Quantité"
                type="number"
                className="flex input input-bordered"
              />
              <input
                name="price"
                placeholder="Prix du produit"
                type="number"
                className="flex input input-bordered"
              />
              <input
                name="category"
                placeholder="Catégorie"
                type="text"
                className="flex input input-bordered"
              />
            </div>
            <button type="submit" className="btn btn-outline btn-primary">
              Ajouter le produit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
