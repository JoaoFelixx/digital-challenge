import {
  createBrowserRouter,

  RouterProvider,
} from "react-router";

import { Dashboard, Page404 } from '@/pages';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "*",
    element: <Page404 />
  }
]);


export default function RoutesController() {
  return (
    <RouterProvider router={router} />
  );
} 