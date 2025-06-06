import * as s from './style'

import login from '@/assets/images/login.png';
import loginLogo from '@/assets/icons/login-logo.svg'





export const LoginForm = () => {


  return (
    <s.FormContainer>
      <s.FormController >
        <img src={loginLogo} alt="" />

        <input type="text" />
        <input type="text" />

        <button></button>
      </s.FormController>
      <s.Card>
        <img src={login} alt='user-network' />
      </s.Card>
    </s.FormContainer>
  )
}