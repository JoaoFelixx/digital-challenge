import {
  type ReactNode,
  type InputHTMLAttributes,

  useId,
  useState,
} from 'react';

import * as  s from './style';

import eyeIcon from '@/assets/icons/eye-orange.svg';
import closeEyeIcon from '@/assets/icons/closed-eye.svg';

import type {
  FieldError,
  UseFormRegister,
} from 'react-hook-form';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode

  errors?: FieldError;
  register?: UseFormRegister<Record<string, string>>
}


export const Input = ({
  children,

  errors,
  register,

  ...inputProps
}: InputProps) => {
  const inputId = useId();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const hasError = errors ? true : false;


  const toggleShowPassword = () => {
    setShowPassword(show => !show)
  }



  return (
    <s.InputContainer>
      <label htmlFor={inputId}>{children}</label>
      <s.InputCard $hasError={hasError}>
        <input
          {...inputProps}
          {...register(inputProps.name)}
          id={inputId}
          type={showPassword ? 'text' : inputProps.type}
        />

        {inputProps.type === "password" && (
          <img
            src={showPassword ? closeEyeIcon : eyeIcon}
            alt="eye-icon"
            className='eye-password'
            onClick={toggleShowPassword}
          />
        )}
      </s.InputCard>

      {errors && (
        <span className='error'>
          {errors?.message}
        </span>
      )}
    </s.InputContainer>
  )
}