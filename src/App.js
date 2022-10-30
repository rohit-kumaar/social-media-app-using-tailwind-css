import Layout from "layouts/Layout";
import Home from "pages/Home";
import Login from "pages/Login";
import Profile from "pages/Profile";
import Register from "pages/Register";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import { ProtectedRoute } from "routes/protectedRoutes";
import { ROUTE_PATH } from "routes/routes";

function App() {
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
