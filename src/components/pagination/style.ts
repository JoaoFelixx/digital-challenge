import styled from "styled-components";


interface ButtonProps {
  $selected?: boolean;
}


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  margin-top: 2rem;

  span.results {
    font-size: 12px;
    color: red;
    font-weight: 400;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Button = styled.button<ButtonProps>`
  width: 75px;
  height: 35px;

  display: flex;
  gap: 10px;

  padding: 10px 16px;
  
  border: none;
  border-radius: 200px;

  font-weight: 400;
  font-size: 12px;

  background-color: ${({ theme, $selected }) => ($selected 
    ? theme.colors.darkOrange 
    : theme.colors.buttonColorWhite
  )};
  color:${({ theme, $selected }) => ($selected 
    ? theme.colors.white 
    : theme.colors.black
  )};
`;

export const Page = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  border-radius: 100px;

  border: 0;
  background-color: ${({ theme, $selected }) => ($selected 
    ? theme.colors.darkOrange 
    : theme.colors.buttonColorWhite
  )};

  font-size: 14px;
  color:${({ theme, $selected }) => ($selected 
    ? theme.colors.white 
    : theme.colors.black
  )};
  font-weight: 500;

  transition: 0.15s;
`

export const Ellipsis = styled.span`
  font-size: 14px;
  color: #2e3d4d;
  font-weight: 500;
  padding: 0 8px;
`;