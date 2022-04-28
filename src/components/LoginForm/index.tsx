import { FormEvent, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import Api from "../../services/Api";
import { AuthLogin } from "../../services/auth";
import { ContainerLogin, FormLogin } from "./style";
interface Ilogin {
  email: string;
  password: string;
}
let schema = yup.object().shape({
  email: yup
    .string()
    .required("Digite um email")
    .email("Digite um email válido"),
  password: yup
    .string()
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .required("Digite uma senha"),
});

export const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassoword] = useState<string>("");

  const processLogin = async (data: Ilogin) => {
    try {
      const result = await Api.post("/login", data);
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
        password: password,
      };

      await validateDataForm(dataForm);
      await processLogin(dataForm);
      navigate("/");
    } catch (error: Error | any) {
      toast.error(error.message);
    }
  };

  return (
    <ContainerLogin>
      <FormLogin onSubmit={handleSubmit}>
        <label htmlFor="">E-mail</label>
        <input
          id="email"
          name="email"
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <label htmlFor="">Senha</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassoword(e.target.value)
          }
        />
        <button>Fazer Login</button>
      </FormLogin>
    </ContainerLogin>
  );
};
