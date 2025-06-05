import * as s from './style';

import type { Provider } from '@/types/provider';

import { Sidebar } from './sidebar';



export const MainLayout = ({ children }: Provider) => {

  return (
    <s.MainContainer>
      <Sidebar />
      <s.MainContent>
        {children}
      </s.MainContent>
    </s.MainContainer>
  )
}