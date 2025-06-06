import React, {
  type ChangeEvent,

  Children,

  Fragment,

  useRef,
  useState,
} from 'react';

import * as s from './style';

import logo from '@/assets/icons/login-logo.svg';
import menu from '@/assets/icons/dashboard/menu.svg';
import team from '@/assets/icons/dashboard/team.svg';
import event from '@/assets/icons/dashboard/event.svg';
import leave from '@/assets/icons/dashboard/leave.svg';
import account from '@/assets/icons/dashboard/account.svg';
import subscription from '@/assets/icons/dashboard/subscription.svg';

import { useAuth } from '@/context/auth-provider';
import { useNavigate } from 'react-router';


type Page = 'dashboard' | 'events' | 'teams' | 'subscriptions';

interface Redirect {
  page: Page;
  name: string;
  path: string;
  icon: string;
}

interface Action {
  name: string;
  icon: string;
  click(): void
}


export const Sidebar = () => {
  const navigate = useNavigate();
  const {
    user,

    handleLogout,
  } = useAuth();

  const inputFileRef = useRef<HTMLInputElement>(null);

  const [activePage, setActivePage] = useState<Page>('events');
  const [openUserForm, setOpenUserForm] = useState<boolean>(false);


  const redirects: Redirect[] = [
    {
      page: 'dashboard',
      name: 'Dashboard',
      icon: menu,
      path: '/dashboard'
    },
    {
      page: 'events',
      name: 'Eventos',
      icon: event,
      path: '/events'
    },
    {
      page: 'teams',
      name: 'Teams',
      icon: team,
      path: '/teams'
    },
    {
      page: 'subscriptions',
      name: 'Subscriptions',
      icon: subscription,
      path: '/subscriptions'
    },
  ];

  const actions: Action[] = [
    {
      name: 'Alterar dados',
      icon: account,
      click: () => {
        setOpenUserForm(true)
      }
    },
    {
      name: 'Sair',
      icon: leave,
      click: handleLogout,
    },
  ]


  const onChangeProfilePicture = () => {
    inputFileRef.current.click();
  }

  const updateProfilePicture = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];

    console.log(file);
  }

  const onChosePage = ({ page, path }: Omit<Redirect, 'name' | 'logo'>) => {
    navigate(path);
    setActivePage(page)
  }


  return (
    <Fragment>
      <s.SidebarContainer>
        <s.SideCard>
          <s.Logo src={logo} alt="Logo" />

          <s.ListContainer>
            <h2 className='span'>Menu</h2>
            <ul>
              {React.Children.toArray(redirects.map((redirect) => (
                <li
                  key={redirect.name}
                  className={activePage === redirect.page ? 'active' : ''}
                  onClick={() => onChosePage(redirect)}
                >
                  <img src={redirect.icon} alt={redirect.name} />
                  <span>{redirect.name}</span>
                </li>
              )),
              )}
            </ul>
          </s.ListContainer>
        </s.SideCard>

        <s.UserSession>
          <s.Separator />
          <s.UserContainer>
            <div className='img-profile'>
              <img
                src={user.pictureAvatar}
                alt={user.name}
                className='profile-picture'
              />
            </div>

            <div className='user-info'>
              <h4>{user.name}</h4>
              <span>{user.position}</span>
            </div>

            <input
              type="file"
              ref={inputFileRef}
              style={{ display: 'none' }}
              onChange={updateProfilePicture}
            />
          </s.UserContainer>

          <s.ActionList>
            {Children.toArray(actions.map(action => (
              <li key={action.name} onClick={action.click}>
                <img
                  src={action.icon}
                  alt={action.name}

                  onClick={onChangeProfilePicture}
                />
                <span>{action.name}</span>
              </li>
            )))}
          </s.ActionList>
        </s.UserSession>
      </s.SidebarContainer>

      {openUserForm && (
        <Fragment></Fragment>
      )}

    </Fragment>
  )
}