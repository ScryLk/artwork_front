import { createBrowserRouter } from "react-router-dom";
import Login from "./screens/auth/login/login";
import Register from "./screens/auth/register/register";
import RegisterConfirm from "./screens/auth/register/register-confirm/register-confirm";
import Home from "./screens/home/home";
import ForgotPassword from "./screens/auth/login/forgot-password/forgot-password";
import RestorePassword from "./screens/auth/login/forgot-password/restore-password/restore-password";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/register/confirm/:id",
    element: <RegisterConfirm />,
  },
  {
    path: "/darkart",
    element: <Home />,
  },
  {
    path: "/login/forgotpassword",
    element: <ForgotPassword />,
  },
  {
    path: "/login/forgotpassword/restorepassword/:id",
    element: <RestorePassword />,
  },
]);

export default router;
