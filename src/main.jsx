import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import Profile from "./Profile";
import Popeyes from "./Popeyes";
import Spinach from "./Spinach";
import Default from "./Default";
import ErrorPage from "./ErrorPage";
import routes from "./routes";

const router = createBrowserRouter(routes)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);