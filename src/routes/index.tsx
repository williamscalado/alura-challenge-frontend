import { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
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
      <Route path="/" element={[PrivateRoute(), <Home />]} />
      <Route path="/login" element={<Login />}></Route>
      <Route path="*" element={<Navigate to="/" replace />}></Route>
    </Routes>
  );
};