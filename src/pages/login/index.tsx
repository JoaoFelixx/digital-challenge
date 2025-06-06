import * as s from './style';

import { LoginForm } from '@/components/Controls';






export const Login = () => {

  return (
    <s.Page>
      <s.LoginContainer>
        <LoginForm />
      </s.LoginContainer>
    </s.Page>
  )
}