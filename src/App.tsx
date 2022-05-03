import Modal from "react-modal";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { TransactionsProvider } from "./hooks/usetransacions";
import { RoutesApp } from "./routes";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

function App() {
  return (
    <>
      <TransactionsProvider>
        <BrowserRouter>
          <GlobalStyle />
          <RoutesApp />
          <ToastContainer />
        </BrowserRouter>
      </TransactionsProvider>
    </>
  );
}

export default App;
