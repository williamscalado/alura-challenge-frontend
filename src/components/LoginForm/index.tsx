import { FormEvent } from "react";
import { Api } from "../../services/Api";
import { ContainerLogin, FormLogin } from "./style";

export const LoginForm = () => {
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { email, password } = document.forms[0];

    await Api.post("/login", {
      email: email.value,
      password: password.valeu,
    }).then((res) => {
      console.log(res);
    });
  };

  return (
    <ContainerLogin>
      <FormLogin onSubmit={handleSubmit}>
        <label htmlFor="">E-mail</label>
        <input id="email" type="text" />
        <label htmlFor="">Senha</label>
        <input id="password" type="text" />
        <button>Fazer Login</button>
      </FormLogin>
    </ContainerLogin>
  );
};
