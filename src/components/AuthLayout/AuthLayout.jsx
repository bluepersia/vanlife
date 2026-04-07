import { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext/LoginContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function AuthLayout() {
  const { isLoggedIn } = useContext(LoginContext);
  const location = useLocation();

  if (isLoggedIn) return <Outlet />;

  return (
    <Navigate
      to="/login"
      state={{ from: location.pathname, message: "You must log in first" }}
      replace={true}
    />
  );
}
