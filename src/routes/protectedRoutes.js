import { Navigate } from "react-router-dom";
import { ROUTE_PATH } from "./routePath";

// const currentUser = false;
const currentUser = true;

export const ProtectedRoute = ({ children }) => {
  if (!currentUser) {
    return <Navigate to={ROUTE_PATH.Login} />;
  }

  return children;
};
