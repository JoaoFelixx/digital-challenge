import './i18n';

import RoutesController from './routes';
import { Flip, ToastContainer } from 'react-toastify';

import { theme } from './styles/theme';

import { GlobalStyle } from './styles/global-style';

import { AuthProvider } from './context/auth-provider';
import { ThemeProvider } from 'styled-components';


export default function Application() {


  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ToastContainer
          position='top-right'
          autoClose={3000}
          closeOnClick
          pauseOnHover
          transition={Flip}
        />
        <RoutesController />
      </ThemeProvider>
    </AuthProvider>
  )
}
