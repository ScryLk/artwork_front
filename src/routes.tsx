import { createBrowserRouter } from "react-router-dom";
import Login from "./screens/auth/login/login";
import Register from "./screens/auth/register/register";
import RegisterConfirm from "./screens/auth/register/register-confirm/register-confirm";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/register/confirm/:id",
    element: <RegisterConfirm />
  }
])

export default router