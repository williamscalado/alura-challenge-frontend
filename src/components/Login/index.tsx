import { HeaderLogin } from "../HeaderLogin";
import { LoginForm } from "../LoginForm";
import { ContainerLogin } from "./style";

export const LoginDashboard = () => {
  return (
    <ContainerLogin>
      <HeaderLogin />
      <LoginForm />
    </ContainerLogin>
  );
};
