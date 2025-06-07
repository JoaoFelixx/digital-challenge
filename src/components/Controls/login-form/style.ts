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

    right: 36px;
  }
`;

export const Logo = styled.img`
  width: 161px;
`;

export const FormController = styled.form`
  display: flex;
  flex-direction: column;
  gap: 35px;

  padding-bottom: 49px;
`;

export const Greetings = styled.main`
  display: flex;
  flex-direction: column;
  gap: 6px;

  h3 {
    font-size: 26px;
    font-weight: 700;

    color: ${({ theme }) => theme.colors.darkOrange};
  }

  span {
    font-size: 13px;
    font-weight: 400;

    color: ${({ theme }) => theme.colors.silver};
  }
`;