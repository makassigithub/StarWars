import { createBrowserRouter } from "react-router-dom";

import StarWarList from "../components/starShipsList";
import Detail from "../components/common/details";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StarWarList />,
    errorElement: <ErrorPage />,
    children: [],
  },
  {
    path: "details/:detailId",
    element: <Detail />,
  },
]);

export default router;
