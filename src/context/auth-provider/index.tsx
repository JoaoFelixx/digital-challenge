import {
  createContext,

  useState,
  useContext,
  useCallback,
} from 'react';

import defaultUserPicture from '@/assets/images/user.png';

import { toast } from 'react-toastify';

import type { User } from '@/types/user';
import type { Provider } from '@/types/provider';


interface Auth {
  user: User;

  handleLogin?: ({ email, password }: Pick<User, "email" | "password">) => Promise<void>
  handleLogout?: () => void
}


const AuthContext = createContext<Auth>({
  user: null
});


//eslint-disable-next-line
export const useAuth = (): Auth => {
  const context = useContext<Auth>(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context
}


export const AuthProvider = ({ children }: Provider) => {
  const [user, setUser] = useState<User>(null);


  const handleLogin = useCallback(async ({ email, password }: Pick<User, 'email' | 'password'>) => {
    try {
      await setTimeout(() => { }, 500)

      setUser({
        id: '1',
        name: 'Kaique Steck',
        email,
        password,
        pictureAvatar: defaultUserPicture,
        position: 'Administrador'
      })

    } catch {
      toast.error(`Erro ao fazer login, tente novamente`);
    }
  }, [])

  const handleLogout = useCallback(() => {
    setUser(null);

    window.location.href = "/login"
  }, [])


  return (
    <AuthContext.Provider
      value={{
        user,

        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};