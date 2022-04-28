import { HeaderForm } from "../HeaderForm";
import { LoginForm } from "../LoginForm";
import { ContainerLogin } from "./style";

export const LoginDashboard = () => {
  return (
    <ContainerLogin>
      <HeaderForm />
      <LoginForm />
    </ContainerLogin>
  );
};
