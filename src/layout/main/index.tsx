import {
  lazy,

  Suspense,
} from 'react';

import * as s from './style';

import type { Provider } from '@/types/provider';

import { useAuth } from '@/context/auth-provider';

const DynamicSidebar = lazy(() => import('./sidebar'))


export const MainLayout = ({ children }: Provider) => {
  const { user } = useAuth();

  return (
    <s.MainContainer>
      <Suspense>
        <DynamicSidebar />
      </Suspense>
      <s.MainContent>
        <s.Greeting>
          Bem vindo de volta, <strong>{user?.name}</strong>
        </s.Greeting>
        {children}
      </s.MainContent>
    </s.MainContainer>
  )
}