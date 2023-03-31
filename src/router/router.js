import {
    createBrowserRouter,
  } from "react-router-dom";

  import StarWarList from "../components/starWarsList";
  import Pilot from "../components/Pilot";
  import ErrorPage from "../components/ErrorPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <StarWarList />,
      errorElement: <ErrorPage />,
      children:[]
    },
    {
      path: "pilots/:pilotId",
      element: <Pilot />,
    },
  ]);

  export default router;