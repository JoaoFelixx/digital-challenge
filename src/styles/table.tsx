import styled from "styled-components";



export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  padding: 20px;

  border-radius: 10px;
  border-width: 1px;

  overflow: hidden auto;

  background-color: ${({ theme }) => theme.colors.white} ;

  border: 1px solid #09428F2B;
`;

export const Table = styled.table`
  width: 100%;

  border-collapse: collapse;
`;

export const TR = styled.tr`

  th,td {
    padding: 12px 16px;
  }

  th {
    text-align: left;

    font-family: Poppins;
    font-weight: 500;
    font-size: 13px;

    letter-spacing: 0%;

    color: ${({ theme }) => theme.colors.darkOrange50};
  }

  td {
    color: ${({ theme }) => theme.colors.placeholderColor};

    font-family: Poppins;
    font-size: 14px;
        
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkOrange10};
  }
`;