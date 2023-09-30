import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home/Home";
import Post from "./views/Post/Post";
import ReadPost from "./views/ReadPost/ReadPost";
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/post",
    element: <Post />,
  },
  {
    path: "/read",
    element: <ReadPost />,
  },
]);

root.render(
  <>
    <RouterProvider router={router} />
  </>
);
