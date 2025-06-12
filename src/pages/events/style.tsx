import styled from "styled-components";


export const Title = styled.h1`
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;

  color: ${({ theme }) => theme.colors.primaryColor};
`;

export const TableHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  flex-wrap: wrap;

  @media (width <= 768px) {
    justify-content: flex-start;
  } 
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
  
  background-color: ${({ theme }) => theme.colors.neutralColor400};


  input {
    background-color: transparent;
    outline: none;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.neutralColor900};
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

  cursor: pointer;

  color: ${({ theme }) => theme.colors.neutralColor};
  background-color: ${({ theme }) => theme.colors.primaryColor};
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
  position: relative;

  cursor: pointer;
`;

export const Dropdown = styled.ul`
  position: absolute;
  right: 8px;  
  bottom: 0;

  z-index: 2;

  list-style: none;

  width: 123px;
  height: 105px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.neutralColor};

  border: 1px solid ${({ theme }) => theme.colors.neutralColor1100};
  border-radius: 15px;

  box-shadow: 0px 4px 4px 0px ${({ theme }) => theme.colors.neutralColor1100};


  li {
    width: 100%;
    height: 35px;

    z-index: 3;

    display: flex;
    align-items: center;
    gap: 10px;
    
    padding: 5px 20px;
    
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutralColor1000};
  }

  @media (width <= 768px) {
   
  }
`;