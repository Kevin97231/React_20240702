import { ChampControle } from "../formulaires/ChampControle";
import { FormulaireAvecVerif } from "../formulaires/FormulaireAvecVerif";
import { FormulaireClassique } from "../formulaires/FormulaireClassique";

/* eslint-disable react/no-unescaped-entities */
export const Formulaire = () => {
  return (
    <>
      <h1>Les formulaires</h1>

      <ChampControle />
      <FormulaireClassique />
      <br />
      <FormulaireAvecVerif />
    </>
  );
};
