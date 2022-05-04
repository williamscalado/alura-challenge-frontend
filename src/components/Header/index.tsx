import { useNavigate } from "react-router-dom";
import logoImg from "../../assets/challenges-logo-2.svg";
import { logout } from "../../services/auth";
import { Conteiner, Content, ContentButtons } from "./style";

export function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <Conteiner>
      <Content>
        <img
          src={logoImg}
          id="logo"
          alt="My Money"
          onClick={() => navigate("/")}
        />
        <ContentButtons>
          <button onClick={() => navigate("/upload")}>Transações </button>
          <button>Usuários</button>
          <button onClick={handleLogout}>Sair</button>
        </ContentButtons>
      </Content>

    </Conteiner>
  );
}
