import {
  Fragment,

  useEffect,
} from "react";

import { RouterProvider } from 'react-router/dom'
import {
  createBrowserRouter,

  useNavigate
} from "react-router";
import { Outlet } from "react-router";
import { MainLayout } from "./layout";

import {
  Login,
  Teams,
  Events,
  Page404,
  Dashboard,
  Subscriptions,
} from '@/pages';

import { useAuth } from "./context/auth-provider";

import type { Provider } from "./types/provider";


interface ProtectedRouteProps extends Provider {
  isProtected?: boolean;
}


function DashboardLayout() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}


const ProtectedRoute = ({ isProtected, children }: ProtectedRouteProps) => {
  const { user } = useAuth();
  const navigate = useNavigate();


  useEffect(() => {
    if (!user && isProtected) {
      navigate(`/login`)

      return
    }
  }, [user, isProtected, navigate])


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
    element: (
      <ProtectedRoute isProtected>
        <DashboardLayout />  
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      { path: "teams", element: <Teams /> },
      { path: "events", element: <Events /> },
      { path: "subscriptions", element: <Subscriptions /> },
    ],
  },
  {
    path: "/events",
    element: (
      <ProtectedRoute isProtected>
        <Events />
      </ProtectedRoute>
    ),
  },
  {
    path: "/subscriptions",
    element: (
      <ProtectedRoute isProtected>
        <Subscriptions />
      </ProtectedRoute>
    ),
  },
  {
    path: "/teams",
    element: (
      <ProtectedRoute isProtected>
        <Teams />
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