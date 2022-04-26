import Modal from "react-modal";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { RoutesApp } from "./routes";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <RoutesApp />
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
