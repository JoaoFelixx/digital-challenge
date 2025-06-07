import {
  createContext,

  useMemo,
  useContext,
  useReducer,
  useCallback,
} from "react";

import type { Provider } from "@/types/provider";


export type ActivePage = 'dashboard' | 'events' | 'teams' | 'subscriptions';

interface PageState {
  activePage: ActivePage;
}

type PageAction = { type: 'CHANGE_PAGE'; payload: ActivePage };


interface PageContextType {
  activePage: ActivePage;

  changePage?: (props: ActivePage) => void;
}


const pageReducer = (state: PageState, action: PageAction): PageState => {
  if (action.type === "CHANGE_PAGE") {
    return {
      activePage: action.payload
    }
  }

  return state
}


const PageContext = createContext<PageContextType>({
  activePage: 'events',
  changePage: () => {
    throw new Error('changePage not initialized');
  },
});

//eslint-disable-next-line
export const usePage = () => {
  const context = useContext(PageContext);

  if (!context) {
    throw new Error('usePage must be used within a PageProvider');
  }

  return context;
}

export const PageProvider = ({ children }: Provider) => {
  const [{ activePage }, dispatch] = useReducer(pageReducer, {
    activePage: 'events',
  });

  const changePage = useCallback((page: ActivePage) => {
    dispatch({ type: 'CHANGE_PAGE', payload: page });
  }, []);

  const value = useMemo(() => ({
    activePage,
    changePage,
  }), [activePage, changePage]);


  return (
    <PageContext.Provider value={value}>
      {children}
    </PageContext.Provider>
  );
};
