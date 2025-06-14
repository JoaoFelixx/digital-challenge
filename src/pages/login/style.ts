import styled from "styled-components";



export const Page = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  
  background-color: ${({theme}) => theme.colors.neutralColor300};
`;

export const LoginContainer = styled.div`
  width: 756.5px;
  height: 498px;

  background-color: ${({ theme }) => theme.colors.neutralColor};

  border-radius: 20px;
  
  box-shadow: 0px 100px 200px 0px #00000040;

  @media (width <= 768px) {
    width: 90%;
  }
`;