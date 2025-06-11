import {
  type ChangeEvent,

  Children,

  Fragment,

  memo,

  useRef,
  useMemo,
  useState,
} from 'react';

import * as s from './style';

import logo from '@/assets/icons/login-logo.svg';
import menu from '@/assets/icons/dashboard/menu.svg';
import menuH from '@/assets/icons/menu-h.svg'
import team from '@/assets/icons/dashboard/team.svg';
import event from '@/assets/icons/dashboard/event.svg';
import leave from '@/assets/icons/dashboard/leave.svg';
import upload from '@/assets/icons/upload.svg';
import account from '@/assets/icons/dashboard/account.svg';
import subscription from '@/assets/icons/dashboard/subscription.svg';

import { useAuth } from '@/context/auth-provider';
import { useClickAway } from 'react-use';
import { useWindowSize } from '@/hooks/use-window-size';

import type { ActivePage as Page } from '@/context/page-provider';

import { toast } from 'react-toastify';

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
  const { isMobile } = useWindowSize();
  const {
    user,

    handleLogout,
    uploadPictureAvatar,
  } = useAuth();

  const inputFileRef = useRef<HTMLInputElement>(null);
  const uploadContainerRef = useRef<HTMLDivElement>(null);
  const sidebarContainerRef = useRef<HTMLDivElement>(null);

  const [openSidebar, setOpenSidebar] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState<boolean>(false);

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
      click: null
    },
    {
      name: 'Sair',
      icon: leave,
      click: handleLogout,
    },
  ], [handleLogout]);


  const showSideBar = !isMobile || openSidebar;


  const updateProfilePicture = (event: ChangeEvent<HTMLInputElement>) => {
    try {
      const file = event.target.files[0];

      if (!file) {
        return
      }

      const availableExtensions = [
        "png", "jpg", "jpeg"
      ]

      const isAvailableExtension = availableExtensions.some(
        extension => file?.name?.endsWith(extension)
      )

      if (!isAvailableExtension) {
        toast.warning(`Tipo de arquivo inválido, use png, jpg ou jpeg`)

        return
      }

      const fileUrl = URL.createObjectURL(file)

      uploadPictureAvatar(fileUrl);

    } catch {
      toast.error(`Erro ao fazer upload da foto`)
    }
  }

  const openFileManager = () => {
    inputFileRef.current.click()
  }

  useClickAway(sidebarContainerRef, () => {
    if (isMobile) {
      setOpenSidebar(false);
      setShowUploadModal(false);
    }
  })

  useClickAway(uploadContainerRef, () => {
    setShowUploadModal(false)
  })


  return (
    <Fragment>
      {isMobile && (
        <s.MenuIcon
          src={menuH}
          alt="menu"
          onClick={() => setOpenSidebar(true)}
        />
      )}
      {showSideBar && (
        <s.SidebarContainer ref={sidebarContainerRef}>
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
                  onClick={() => setShowUploadModal(true)}
                />

                {showUploadModal && (
                  <s.UploadContainer ref={uploadContainerRef}>
                    <p>Escolher arquivo</p>

                    <span onClick={openFileManager}>
                      <img src={upload} alt="upload-icon" />
                    </span>
                  </s.UploadContainer>
                )}

                <input
                  type="file"
                  ref={inputFileRef}
                  style={{ display: 'none' }}
                  onChange={updateProfilePicture}
                />
              </div>

              <div className='user-info'>
                <h4>{user.name}</h4>
                <span>{user.position}</span>
              </div>
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
      )}
    </Fragment>
  )
}


export default memo(Sidebar)