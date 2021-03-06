import { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { DetailsTransactions } from "../pages/details-transactions";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { NewUser } from "../pages/new-user";
import { Upload } from "../pages/upload";
import { isAuthenticated } from "../services/auth";

export const RoutesApp = () => {
  const navigate = useNavigate();

  const PrivateRoute = () => {
    const LoggedIn = isAuthenticated();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (!LoggedIn) {
        navigate("/login");
      }
    }, [LoggedIn]);
  };

  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/new-user" element={<NewUser />}></Route>
      <Route path="/" element={[PrivateRoute(), <Home />]} />
      <Route path="/upload" element={[PrivateRoute(), <Upload />]} />
      <Route
        path="/transactions-summary/:id"
        element={[PrivateRoute(), <DetailsTransactions />]}
      />
      <Route path="*" element={<Navigate to="/" replace />}></Route>
    </Routes>
  );
};
