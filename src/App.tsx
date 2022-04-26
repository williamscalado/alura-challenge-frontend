import Modal from "react-modal";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./assets/styles/global";
import { RoutesApp } from "./routes";

Modal.setAppElement("#root");

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <RoutesApp />
      </BrowserRouter>
    </>
  );
}

export default App;
