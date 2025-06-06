import { Fragment } from "react";

import { RouterProvider } from 'react-router/dom'

import { createBrowserRouter } from "react-router";

import { Dashboard, Page404, Login } from '@/pages';

import { useAuth } from "./context/auth-provider";

import type { Provider } from "./types/provider";


interface ProtectedRouteProps extends Provider {
  isProtected?: boolean;
}


const ProtectedRoute = ({ isProtected, children }: ProtectedRouteProps) => {
  const { user } = useAuth();


  return (
    <Fragment>
      {(isProtected && user) &&
        <Fragment>{children}</Fragment>
      }

      {!isProtected && (
        children
      )}
    </Fragment>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: (
      <ProtectedRoute isProtected>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <ProtectedRoute>
        <Login />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: (
      <ProtectedRoute >
        <Page404 />
      </ProtectedRoute>
    )
  }
]);


export default function RoutesController() {
  return (
    <RouterProvider router={router} />
  );
} 