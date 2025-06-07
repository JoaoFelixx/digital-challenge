import { 
  Fragment, 
  
  useEffect, 
} from "react";

import { RouterProvider } from 'react-router/dom'
import { 
  createBrowserRouter, 
  
  useNavigate 
} from "react-router";

import { 
  Login, 
  Page404, 
  Dashboard, 
} from '@/pages';

import { useAuth } from "./context/auth-provider";

import type { Provider } from "./types/provider";


interface ProtectedRouteProps extends Provider {
  isProtected?: boolean;
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