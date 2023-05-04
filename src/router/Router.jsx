import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import RecipesLayout from "../layout/RecipesLayout";
import Blog from "../pages/blog/Blog";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://cooking-master-server-mahadi61.vercel.app/"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/recipes/:id",
        element: (
          <PrivetRoute>
            <RecipesLayout></RecipesLayout>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://cooking-master-server-mahadi61.vercel.app/recipes/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
