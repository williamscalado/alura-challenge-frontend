import { FormEvent } from "react";
import { toast } from "react-toastify";
import { Api } from "../../services/Api";
import { ContainerLogin, FormLogin } from "./style";
interface Ilogin {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const { email, password } = document.forms[0];
    const dataForm: Ilogin = {
      email: email.value,
      password: password.value,
    };

    await Api.post("/login", dataForm)
      .then((res) => {
        const tokenLogin = res.data.token;
        if (!tokenLogin) toast.error("Erros ao processar seus dados!");
        // ... continua
      })
      .catch((error) => {
        toast.error("Email ou senha inválidos");
      });
  };

  return (
    <ContainerLogin>
      <FormLogin onSubmit={handleSubmit}>
        <label htmlFor="">E-mail</label>
        <input id="email" name="email" type="text" />
        <label htmlFor="">Senha</label>
        <input id="password" name="password" type="text" />
        <button>Fazer Login</button>
      </FormLogin>
    </ContainerLogin>
  );
};
