import App from "@/App";
import EmailOtp from "@/pages/EmailOtp";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { createBrowserRouter } from "react-router-dom";

let MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/verifyemail", element: <EmailOtp /> },
    ],
  },
]);

export default MyRouter;
