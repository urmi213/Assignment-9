// src/routes/Router.jsx
import { createBrowserRouter } from "react-router";
import Layout from '../components/LayOut';
import Home from '../pages/Home';
import PopularGames from '../pages/PopularGames'; // Add this import
import About from '../pages/About';
import GameDetails from '../pages/GameDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import MyProfile from '../pages/MyProfile';
import UpdateProfile from '../pages/UpdateProfile';
import ForgotPassword from '../pages/ForgotPassword';
import NotFound from '../pages/NotFound';
import ProtectedRoute from '../components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "popular-games", // Add this route
        element: <PopularGames />
      },
      {
        path: "about", // Add this route
        element: <About />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />
      },
      {
        path: "game/:id",
        element: (
          <ProtectedRoute>
            <GameDetails />
          </ProtectedRoute>
        )
      },
      {
        path: "my-profile",
        element: (
          <ProtectedRoute>
            <MyProfile />
          </ProtectedRoute>
        )
      },
      {
        path: "update-profile",
        element: (
          <ProtectedRoute>
            <UpdateProfile />
          </ProtectedRoute>
        )
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
]);

export default router;