import { AuthContext } from "context/authContext";
import Layout from "layouts/Layout";
import Home from "pages/Home";
import Login from "pages/Login";
import Profile from "pages/Profile";
import Register from "pages/Register";
import { useContext } from "react";
import {
  createBrowserRouter, Navigate, RouterProvider
} from "react-router-dom";
import { ROUTE_PATH } from "routes/routePath";
import "./App.scss";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to={ROUTE_PATH.Login} />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: ROUTE_PATH.Home,
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: ROUTE_PATH.Home,
          element: <Home />,
        },
        {
          path: ROUTE_PATH.Profile,
          element: <Profile />,
        },
      ],
    },
    {
      path: ROUTE_PATH.Login,
      element: <Login />,
    },
    {
      path: ROUTE_PATH.Register,
      element: <Register />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
