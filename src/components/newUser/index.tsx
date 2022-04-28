import { HeaderLogin } from "../HeaderLogin";
import { FormNewUser } from "../newUserForm/style";
import { ContainerLogin } from "./style";

export const NewUserDashboard = () => {
  return (
    <ContainerLogin>
      <HeaderLogin />
      <FormNewUser />
    </ContainerLogin>
  );
};
