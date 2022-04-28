import { HeaderForm } from "../HeaderForm";
import { NewUserForm } from "../newUserForm";
import { ContainerNewUser } from "./style";

export const NewUserDashboard = () => {
  return (
    <>
      <ContainerNewUser>
        <HeaderForm />
        <NewUserForm />
      </ContainerNewUser>
    </>
  );
};
