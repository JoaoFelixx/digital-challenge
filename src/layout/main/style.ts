import styled from "styled-components";


export const MainContainer = styled.div`
  display: flex;
  
  width: 100%;
  height: 100%;
`;

export const MainContent = styled.div`
  width: calc(100% - 210px);

  padding: 30px;

  background-color: ${({ theme }) => theme.colors.offWhite};
`;

export const Greeting = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;

  strong {
    font-size: 16px;
    font-weight: 700;
    line-height: 23px;

    color: ${({ theme }) => theme.colors.black};
  }
`;