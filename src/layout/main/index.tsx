import { 
  lazy,
  
  Suspense,
} from 'react';

import * as s from './style';

import type { Provider } from '@/types/provider';

const DynamicSidebar = lazy(() => import('./sidebar'))


export const MainLayout = ({ children }: Provider) => {

  return (
    <s.MainContainer>
      <Suspense>
        <DynamicSidebar />
      </Suspense>
      <s.MainContent>
        {children}
      </s.MainContent>
    </s.MainContainer>
  )
}