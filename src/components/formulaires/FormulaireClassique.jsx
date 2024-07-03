/* eslint-disable react/no-unescaped-entities */
export const FormulaireClassique = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formResult = new FormData(e.target);
    console.log(formResult);
  };

  return (
    <>
      <h2>Les formulaires 'classique'</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="login"
          defaultValue="login"
          className="input input-bordered"
        />
        <input
          type="text"
          name="password"
          defaultValue="password"
          className="input input-bordered"
        />
        <button type="submit" className="btn">
          Envoyer
        </button>
      </form>
    </>
  );
};
