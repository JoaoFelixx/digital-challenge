import {
  type ReactNode,
  type ButtonHTMLAttributes,
} from 'react';

import * as  s from './style';


interface InputProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}


export const Submit = ({ children, ...inputProps }: InputProps) => {

  return (
    <s.Button {...inputProps} type='submit' >
      {children}
    </s.Button>
  )
}