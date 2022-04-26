import logoImg from "../../assets/challenges-logo-2.svg";
import { Conteiner, Content, ContentButtons } from "./style";

export function Header() {
  return (
    <Conteiner>
      <Content>
        <img src={logoImg} id="logo" alt="My Money " />
        <ContentButtons>
          <button>Enviar transações </button>
          <button>Listar transações </button>
          <button>Usuários</button>
          <button>Sair</button>
        </ContentButtons>
      </Content>
    </Conteiner>
  );
}
