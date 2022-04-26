import { useState } from "react";
import Modal from "react-modal";
import { GlobalStyle } from "./assets/styles/global";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewCategoryModal } from "./components/NewCategoryModal";
import { NewTransasionModal } from "./components/NewTransasionModal";
import { TableTransasion } from "./components/TableTransasion";
import { CategoriesProvider } from "./hooks/Categories";
import { TransasionsProvider } from "./hooks/Transasions";

Modal.setAppElement("#root");

function App() {
  const [isOpenModalNewTransasion, setIsOpenModalNewTransasion] =
    useState(false);
  function openModalNewTransasion() {
    setIsOpenModalNewTransasion(true);
  }
  function closeModalNewTransasion() {
    setIsOpenModalNewTransasion(false);
  }

  const [isOpenNewCategory, setisOpenNewCategory] = useState(false);
  function openModalNewCategory() {
    setisOpenNewCategory(true);
  }
  function closeModalNewCategory() {
    setisOpenNewCategory(false);
  }

  return (
    <>
      <CategoriesProvider>
        <TransasionsProvider>
          <GlobalStyle />
          <Header openModal={openModalNewCategory} />
          <Dashboard />
          <NewTransasionModal
            modalIsOpen={isOpenModalNewTransasion}
            closeModal={closeModalNewTransasion}
          />
          <NewCategoryModal
            modalIsOpen={isOpenNewCategory}
            closeModal={closeModalNewCategory}
          />
          <TableTransasion openModal={openModalNewTransasion} />
        </TransasionsProvider>
      </CategoriesProvider>
    </>
  );
}

export default App;
