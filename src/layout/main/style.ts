import styled from "styled-components";


export const MainContainer = styled.div`
  display: flex;
  
  width: 100%;
  height: 100%;
`;

export const MainContent = styled.div`
  width: calc(100% - 210px);

  padding: 8px;

  background-color: ${({ theme }) => theme.colors.offWhite};
`;