/* eslint-disable react/prop-types */
function ExempleJsx() {
  const title = "Bienvenue sur mon appli react";

  const title2 = <h1>Bienvenue !!</h1>;

  const img = "../src/assets/react.svg";

  // const user = undefined;

  const user = {
    fistName: "John",
    lastName: "Doe",
  };

  const style = { color: "red", backgroundColor: "gray" };

  const handleClick = (e) => {
    console.log(e);
    alert("j'ai cliqué");
  };

  const fruits = ["banane", "abricot", "pomme"];

  const proprieteApasserAMonEnfant = {
    id: "myId",
    className: "myClassName",
  };

  return (
    <>
      <h1>{title}</h1>
      {title2}
      <div>
        <img src={img} alt="" />
      </div>
      <p className="text-lg">je suis le texte mis en forme avec tailwind</p>

      {/* Affichage conditionnel: */}

      {/* Avec un affichage si la condition est 'vrai' et un affichage différent si la condition est fausse */}
      {user ? <h1>Bonjour {user.fistName}</h1> : <h1>Bonjour</h1>}

      {/* Avec un affichage que la condition est 'vrai'*/}
      {user && <h1>Bonjour {user.fistName}</h1>}

      {/* ______________________________________________________________________________________________________ */}

      <h1 style={{ color: "red", backgroundColor: "gray" }}>Titre en rouge</h1>
      <h1 style={style}>Titre en rouge</h1>

      <br />

      <button onClick={handleClick}>cliquez !</button>
      <br />
      <button onClick={() => alert("j'ai encore cliqué !")}>cliquez !</button>

      <br />

      <ul>
        {fruits.map((fruit) => (
          <li className="list-none" key={fruit}>
            {fruit}
          </li>
        ))}
      </ul>

      <MonEnfant color="blue">Voici ton texte, mon enfant !</MonEnfant>

      <MonEnfant2 color="blue" props={proprieteApasserAMonEnfant}>
        Voici ton texte, mon enfant !
      </MonEnfant2>
    </>
  );
}

export default ExempleJsx;

function MonEnfant({ color, children = "Passe moi un texte !" }) {
  return (
    <>
      <p>Je suis ton enfant</p>
      <p>{color}</p>
      <p>{children}</p>
    </>
  );
}

const MonEnfant2 = ({ color, children, props }) => {
  return (
    <p style={{ color: color }} {...props}>
      {children}
    </p>
  );
};

//   Explication du ternaire :
// const bool = true;
// const text = "Toto";
// // Utilisation d'un ternaire
// //  ternaire : (condition) ? (valeur si vrai) : valeur si faux
// const verif = bool ? "vrai" : "faux";

// const verifText = text === "Toto" ? "vrai" : "faux";
