import {
  Children,

  useState
} from 'react';

import * as s from './style';

import logo from '@/assets/login-logo.svg';
import menu from '@/assets/dashboard/menu.svg';
import team from '@/assets/dashboard/team.svg';
import event from '@/assets/dashboard/event.svg';
import subscription from '@/assets/dashboard/subscription.svg';

import { useNavigate } from 'react-router';


type Page = 'dashboard' | 'events' | 'teams' | 'subscriptions';

interface Redirect {
  page: Page;
  name: string;
  path: string;
  logo: string;
}


export const Sidebar = () => {
  const navigate = useNavigate();

  const [activePage, setActivePage] = useState<Page>('events');


  const redirects: Redirect[] = [
    {
      page: 'dashboard',
      name: 'Dashboard',
      logo: menu,
      path: '/dashboard'
    },
    {
      page: 'events',
      name: 'Eventos',
      logo: event,
      path: '/events'
    },
    {
      page: 'teams',
      name: 'Teams',
      logo: team,
      path: '/teams'
    },
    {
      page: 'subscriptions',
      name: 'Subscriptions',
      logo: subscription,
      path: '/subscriptions'
    },
  ];


  const onChosePage = ({ page, path }: Omit<Redirect, 'name' | 'logo'>) => {
    navigate(path);
    setActivePage(page)
  }


  return (
    <s.SidebarContainer>
      <s.Logo src={logo} alt="Logo" />

      <s.ListContainer>
        <h2 className='span'>Menu</h2>
        <ul>
          {Children.toArray(redirects.map((redirect) => (
            <li
              className={activePage === redirect.page ? 'active' : ''}
              onClick={() => onChosePage(redirect)}
            >
              <img src={redirect.logo} alt={redirect.name} />
              <span>{redirect.name}</span>
            </li>
          )),
          )}
        </ul>
      </s.ListContainer>

    </s.SidebarContainer>
  )
}