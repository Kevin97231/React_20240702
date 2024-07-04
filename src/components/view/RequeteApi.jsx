import { ExempleRequete } from "../ExempleRequete";

/* eslint-disable react/no-unescaped-entities */
export const RequeteApi = () => {
  return (
    <>
      <h1>Requêts API</h1>
      <h2>Rappel</h2>
      <p>
        <a
          className="underline"
          href="https://developer.mozilla.org/fr/docs/Web/HTTP/Methods"
        ></a>
      </p>
      <strong>En résumé: </strong>
      <ul className="pl-5 list-disc pb-5">
        <li>
          <strong>GET: </strong> Sert à récupérer des données
        </li>
        <li>
          <strong>POST: </strong> Utilisé avec un body, très souvent en JSON (ou
          xml sur des anciennes appli ou cas particulier). très utilisé pour les
          create.
        </li>
        <li>
          <strong>PUT: </strong> Même logique que le post à la différence que
          c'est utilisé pour mettre à jour une ressource
        </li>
        <li>
          <strong>DELETE: </strong> Utilisé pour supprimer une ressource. (en
          général, il existe des méthode de type 'deleteByID' sur les API
          backend)
        </li>
      </ul>

      <h2>Les requêtes avec la bibliothèque 'Axios'</h2>
      <a className="underline" href="https://axios-http.com/fr/docs/example">
        documentation axios
      </a>
      <p className="pt-5">Les adresses avec notre Json server</p>
      <ul className="pl-5 list-disc">
        <li>GET: http://localhost:3001/products</li>
        <li>POST: http://localhost:3001/products</li>
        <li>PUT: http://localhost:3001/products/id</li>
        <li>DELETE: http://localhost:3001/products/id</li>
      </ul>
      <ExempleRequete />
    </>
  );
};
