import { ComponentWtihUseMemo } from "../useMemo/ComponentWtihUseMemo";
import { ComponentWtihoutUseMemo } from "../useMemo/ComponentWtihoutUseMemo";

export const HookUseMemo = () => {
  return (
    <>
      <h1>Le hook useMemo</h1>

      <ComponentWtihUseMemo />
      <ComponentWtihoutUseMemo />

      {/* <h2>Explication :</h2> */}
      <p></p>
    </>
  );
};
