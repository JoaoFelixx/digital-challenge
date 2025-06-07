import {
  type ChangeEvent,

  Children,

  Fragment,

  useRef,
  useMemo,
  useState,
  useCallback,
  memo,
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
import {
  type ActivePage as Page,
} from '@/context/page-provider';

import ActionItem from './action-item';
import RedirectItem from './redirect-item';


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


function Sidebar() {
  const {
    user,

    handleLogout,
  } = useAuth();

  const inputFileRef = useRef<HTMLInputElement>(null);

  const [/* openUserForm */, setOpenUserForm] = useState<boolean>(false);



  const openUserFormMethod = useCallback(() => {
    setOpenUserForm(true)
  }, [])

  const updateProfilePicture = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];

    console.log(file);
  }


  const redirects = useMemo((): Redirect[] => [
    {
      page: 'dashboard',
      name: 'Dashboard',
      icon: menu,
      path: '/'
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
  ], []);

  const actions = useMemo((): Action[] => [
    {
      name: 'Alterar dados',
      icon: account,
      click: openUserFormMethod
    },
    {
      name: 'Sair',
      icon: leave,
      click: handleLogout,
    },
  ], [openUserFormMethod, handleLogout]);

  return (
    <Fragment>
      <s.SidebarContainer>
        <s.SideCard>
          <s.Logo 
            loading='lazy' 
            src={logo} 
            alt="Logo" 
          />

          <s.ListContainer>
            <h2 className='span'>Menu</h2>
            <ul>
              {Children.toArray(redirects.map((redirect) => (
                <RedirectItem
                  key={redirect.name}
                  redirect={redirect}
                />
              )))}
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
              <ActionItem
                key={action.name}
                action={action}
              />
            )))}
          </s.ActionList>
        </s.UserSession>
      </s.SidebarContainer>
      {/*
       {openUserForm && (
        <Fragmen t></Fragment>
      )}
      */}
    </Fragment>
  )
}


export default memo(Sidebar)