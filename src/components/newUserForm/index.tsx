import { useNavigate } from "react-router-dom";
import { ContainerNewUser, FormNewUser } from "./style";
import * as yup from "yup";
import { ObjectShape } from "yup/lib/object";
import { toast } from "react-toastify";
import Api from "../../services/Api";
import { FormEvent, useState } from "react";

interface INewUser {
  name: string;
  email: string;
}
const validateRulesForm = yup.object().shape({
  name: yup
    .string()
    .required("Digite seu nome")
    .min(6, "Precisamos do seu nome completo"),
  email: yup.string().email().required("Digite seu email"),
});

export const NewUserForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const validateDataForm = async (data: INewUser) => {
    const result = await validateRulesForm.validate(data);
    if (result.message) throw new Error(result.message);
  };

  const createNewUser = async (data: INewUser) => {
    try {
      const result = await Api.post("/user", data);
      return result;
    } catch (error: Error | any) {
      throw new Error(error.response.data.message);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const dataForm: INewUser = {
        name: name,
        email: email,
      };

      await validateDataForm(dataForm);
      await createNewUser(dataForm);
      toast.success(
        "Usuario cadastrado com sucesso, senha enviada por e-mail!"
      );
      navigate("/login");
    } catch (error: Error | any) {
      toast.error(error.message);
    }
  };

  return (
    <ContainerNewUser>
      <FormNewUser onSubmit={handleSubmit}>
        <h1>Novo usuário</h1>
        <label htmlFor="">Nome</label>
        <input
          id="nome"
          name="nome"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="">E-mail</label>
        <input
          id="email"
          name="email"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Enviar dados </button>
        <button
          type="button"
          className="login-button"
          onClick={() => navigate("/login")}
        >
          Já é cadastrado? clique aqui!
        </button>
      </FormNewUser>
    </ContainerNewUser>
  );
};
