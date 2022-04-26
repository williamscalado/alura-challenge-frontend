import logoImg from "../../assets/challenges-logo-2.svg";
import { Conteiner, Content } from "./style";

export function HeaderLogin() {
  return (
    <Conteiner>
      <Content>
        <img src={logoImg} id="logo" alt="Alura Challenger" />
      </Content>
    </Conteiner>
  );
}
