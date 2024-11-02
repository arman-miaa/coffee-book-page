import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Coffees from "../pages/Coffees";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
        element: <MainLayout></MainLayout>,
    errorElement: <p>Error</p>,
    children: [
      {
        path: "/", // or index: true, if nasted component not have here
        element: <Home></Home>,
      },
      {
        path: "coffees",
        element: <Coffees></Coffees>,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

export default router;

// * export (router) 
// ? ekhane multiple export kora jabe tokhon main.jsx e giye router etake distucturing kore import korte hobe
//* import {router} from './routes/Routes';
