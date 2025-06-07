import styled from "styled-components";


export const Button = styled.button`
  width: 100%;
  height: 40px;

  display: flex;
  justify-content: center;
  
  border: none;
  border-radius: 100px;

  padding: 10px 25px;

  cursor: pointer;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.darkOrange};
  
  font-size: 13px;
  font-weight: 500;
  line-height: 15px;
`;