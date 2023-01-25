import { createBrowserRouter } from "react-router-dom";
import Add from "../Pages/Add";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
        path: "/add",
        element: <Add/>,
      },
  ]);
  export{router}