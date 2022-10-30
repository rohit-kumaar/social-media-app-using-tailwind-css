import { Navigate } from "react-router-dom";
import { ROUTE_PATH } from "./routes";

const currentUser = false;

export const ProtectedRoute = ({ children }) => {
  if (!currentUser) {
    return <Navigate to={ROUTE_PATH.Login} />;
  }

  return children;
};
