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
    path: "/post/read/:id",
    element: <ReadPost />,
  },
  {
    path: "*",
    element: <h1 className="text-center mt-5 ">404 idt Found</h1>,
    
  },
]);

root.render(
  <>
    <RouterProvider router={router} />
  </>
);
