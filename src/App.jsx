import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Layouts
import MainLayout from "./layout/MainLayout";

// Pages
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Error from "./pages/Error";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/movie/:imdbID",
          element: <Movie />,
        },
      ],
    },
  ]);
  return (
    <div className="font-inter">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
