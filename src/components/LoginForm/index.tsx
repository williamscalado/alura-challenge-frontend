import { FormEvent } from "react";
import { toast } from "react-toastify";
import * as yup from "yup";
import Api from "../../services/Api";
import { AuthLogin } from "../../services/auth";
import { ContainerLogin, FormLogin } from "./style";
interface Ilogin {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const { email, password } = document.forms[0];
    const emailForm = email.value;
    const passwordForm = password.value;

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

    const dataForm: Ilogin = {
      email: emailForm,
      password: passwordForm,
    };

    const validateData = await schema.validate(dataForm).catch((err) => err);
    if (validateData.message) {
      toast.error(validateData.message);
      return false;
    }

    await Api.post("/login", dataForm)
      .then((res) => {
        const tokenLogin = res.data.token;
        if (!tokenLogin) toast.error("Erros ao processar seus dados!");
        AuthLogin(tokenLogin);
        console.log(tokenLogin);
        // ... continua
      })
      .catch((error) => {
        toast.error("Email ou senha inválido(s)");
      });
  };

  return (
    <ContainerLogin>
      <FormLogin onSubmit={handleSubmit}>
        <label htmlFor="">E-mail</label>
        <input id="email" name="email" type="text" />
        <label htmlFor="">Senha</label>
        <input id="password" name="password" type="password" />
        <button>Fazer Login</button>
      </FormLogin>
    </ContainerLogin>
  );
};
