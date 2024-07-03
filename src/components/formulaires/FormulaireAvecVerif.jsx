import { useForm } from "react-hook-form";

export const FormulaireAvecVerif = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitWithVerif = (data) => {
    console.log("Formulaire accepté !", data);
  };

  return (
    <>
      <h2>Formulaire avec vérification</h2>

      <form onSubmit={handleSubmit(onSubmitWithVerif)}>
        <div className="mb-5">
          <input
            type="text"
            placeholder="email"
            className="input input-bordered mr-2"
            {...register("email", {
              required: "email requis",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Adresse e-mail invalide",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="mb-5">
          <input
            type="password"
            placeholder="mot de passe"
            className="input input-bordered mr-2"
            {...register("password", {
              required: "password requis",
              pattern: {
                value:
                  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-/:;,.]).{8,}$/,
                message:
                  "Le mot de passe doit contenir au moins une minuscule, une majuscule, un chiffre, un caractère spécial et au moins 8 caractères",
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <button type="submit" className="btn">
          Soumettre
        </button>
      </form>
    </>
  );
};
