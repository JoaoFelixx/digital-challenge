import * as s from './style';

import type { Provider } from '@/types/provider';

import { useAuth } from '@/context/auth-provider';

import Sidebar from './sidebar';


export const MainLayout = ({ children }: Provider) => {
  const { user } = useAuth();

  return (
    <s.MainContainer>
      <Sidebar />
      <s.MainContent>
        <s.Greeting>
          Bem vindo de volta, <strong>{user?.name}</strong>
        </s.Greeting>
        {children}
      </s.MainContent>
    </s.MainContainer>
  )
}