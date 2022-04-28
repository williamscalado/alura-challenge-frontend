import { FormEvent, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import Api from "../../services/Api";
import { AuthLogin } from "../../services/auth";
import { ContainerNewUser, FormNewUser } from "./style";
interface Ilogin {
  email: string;
  name: string;
}
let schema = yup.object().shape({
  email: yup
    .string()
    .required("Digite um email")
    .email("Digite um email válido"),
  nome: yup
    .string()
    .required("Digite seu nome")
    .min(4, "Precisamos de seu nome completo"),
});
const navigate = useNavigate();

export const newUserForm = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");

  const processLogin = async (data: Ilogin) => {
    try {
      const result = await Api.post("/user", data);
      const tokenLogin = result.data.token;
      if (!tokenLogin) throw new Error();
      AuthLogin(tokenLogin);
    } catch (error: Error | any) {
      throw new Error("Email ou senha inválidos");
    }
  };

  const validateDataForm = async (data: Ilogin) => {
    const validateData = await schema.validate(data);
    if (validateData.message) throw new Error(validateData.message);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const dataForm: Ilogin = {
        email: email,
        name: name,
      };

      await validateDataForm(dataForm);
      await processLogin(dataForm);
      navigate("/");
    } catch (error: Error | any) {
      toast.error(error.message);
    }
  };

  return (
    <ContainerNewUser>
      <FormNewUser onSubmit={handleSubmit}>
        <label htmlFor="">Nome</label>
        <input
          id="nome"
          name="nome"
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
        <label htmlFor="">E-mail</label>
        <input
          id="email"
          name="email"
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />

        <button type="submit">Fazer Login</button>
        <button type="button" className="new-user-button">
          Novo por aqui? faça seu cadastro!
        </button>
      </FormNewUser>
    </ContainerNewUser>
  );
};
