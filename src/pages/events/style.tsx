import styled from "styled-components";


export const Title = styled.h1`
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;

  color: ${({ theme }) => theme.colors.darkOrange};
`;

export const TableHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;

export const TableFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;

export const SearchContainer = styled.div`
  width: 203px;
  height: 36px;

  display: flex;
  align-items: center;
  gap: 10px;

  padding: 10px 15px;

  border-radius: 33px;
  
  background-color: ${({ theme }) => theme.colors.inputColor};


  input {
    background-color: transparent;
    outline: none;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.black20};
    }

    &:focus {
      outline: none;
    }
  }
`;

export const Button = styled.button`
  width: 124px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
  padding: 10px 15px;

  border-radius: 33px;
  border: none;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.darkOrange};
`;

export const StatusContainer = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;

  span.status {
    display: block;

    width: 10px;
    height: 10px;

    background-color: #34d159;
    
    border-radius: 50%;
  }
`;

export const Action = styled.span`
  cursor: pointer;
`;