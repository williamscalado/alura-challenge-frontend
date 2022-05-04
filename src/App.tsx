import Modal from "react-modal";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { TransactionsProvider } from "./hooks/usetransacions";
import { UserProvider } from "./hooks/useUsers";
import { RoutesApp } from "./routes";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

function App() {
  return (
    <>
      <UserProvider>
        <TransactionsProvider>
          <BrowserRouter>
            <GlobalStyle />
            <RoutesApp />
            <ToastContainer />
          </BrowserRouter>
        </TransactionsProvider>
      </UserProvider>
    </>
  );
}

export default App;
