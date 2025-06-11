import * as s from './style'

import login from '@/assets/images/login.png';
import loginLogo from '@/assets/icons/login-logo.svg';

import { Input } from '@/components/input';
import { Submit } from '@/components/submit';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  type LoginFormData,
  LoginFormSchema,
} from "./login.zod";

import { toast } from 'react-toastify';

import { useAuth } from '@/context/auth-provider';
import { useNavigate } from 'react-router';
import { useWindowSize } from '@/hooks/use-window-size';



export const LoginForm = () => {
  const { isMobile } = useWindowSize()
  const navigate = useNavigate();
  const { handleLogin } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginFormSchema),
  });


  const onSubmit = async ({ email, password }: LoginFormData) => {
    try {
      await handleLogin({
        email, password
      })

      navigate(`/events`);

    } catch {
      toast.error(`Erro ao fazer login, tente novamente mais tarde`)
    }
  }


  return (
    <s.FormContainer>
      <s.FormController onSubmit={handleSubmit(onSubmit)} >
        <s.Logo src={loginLogo} alt="" />

        <s.Greetings>
          <h3>Bem-vindo de volta</h3>
          <span>Entre com sua conta para acessar o painel.</span>
        </s.Greetings>

        <Input
          name='email'
          type='email'
          errors={errors.email}
          register={register}
          placeholder={`Digite aqui`}
        >
          E-mail
        </Input>

        <Input
          name='password'
          type='password'
          errors={errors.password}
          register={register}
          placeholder={`Digite aqui`}
        >
          Senha
        </Input>

        <Submit>Enviar</Submit>
      </s.FormController>
      {!isMobile && (
        <s.Card>
          <img src={login} alt='user-network' />
        </s.Card>
      )}
    </s.FormContainer>
  )
}