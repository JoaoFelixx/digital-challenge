import styled from "styled-components";


export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
`;

export const Card = styled.div`
  position: relative;

  display: flex;
  align-items: flex-end;

  width: 355.5px;
  height: 478px;

  border-radius: 20px;
  
  background-color: ${({ theme }) => theme.colors.darkOrange};


  img {
    position: absolute;

    width: 357px;
    height: 316px;

    right: 60px;
  }
`;

export const FormController = styled.form`
  display: flex;
  flex-direction: column;
`;