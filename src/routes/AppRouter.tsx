import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../pages/Home";
import Categories from "../pages/Categories";
import Product from "../pages/Products";
import AboutUs from "../pages/AboutUs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPages from "../pages/ErrorPages";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MainLayouts from "../layouts/MainLayouts";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "about-us", element: <AboutUs /> },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "products/:prefix",
        element: <Product />,
        loader: ({ params }) => {
          // تحقق من صحة الكلمة: أحرف فقط
          if (!/^[a-z]+$/i.test(params.prefix)) {
            throw new Response("Category not found", {
              status: 400,
              statusText: "Bad Request",
            });
          }
          return true;
        },
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "*",
        element: <ErrorPages />,
      },
    ],
  },
]);
const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
