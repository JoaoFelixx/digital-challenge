import styled from "styled-components";


interface InputProps {
  $hasError?: boolean;
}


export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  label {
    font-size: 13px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.darkOrange};
  }

  .error {
    color: ${({ theme }) => theme.colors.hasError};
  }
`;

export const InputCard = styled.div<InputProps>`
  width: 333px;
  height: 40px;

  display: flex;
  justify-content: space-between;
  
  border-radius: 100px;
  
  padding: 10px 20px;

  background-color: ${({ theme }) => theme.colors.inputColor};

  border: 1px solid ${({ theme, $hasError }) => ($hasError
    ? theme.colors.hasError
    : "none"
  )};


  img.eye-password {
    cursor: pointer;
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;


    &::placeholder {
      font-size: 12px;
      font-weight: 400;

      color: ${({ theme, $hasError }) => ($hasError
    ? theme.colors.hasError
    : theme.colors.placeholderColor
  )};
    }
  }

  input[type="password"] {
     width: 90%;
  }

  @media (width <=768px) {
    width: 100%;
  }
 
`;