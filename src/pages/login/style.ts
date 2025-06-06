import styled from "styled-components";



export const Page = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  
  background-color: ${({theme}) => theme.colors.loginForm};
`;

export const LoginContainer = styled.div`
  width: 756.5px;
  height: 498px;

  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 20px;
  
  box-shadow: 0px 100px 200px 0px #00000040;
`;