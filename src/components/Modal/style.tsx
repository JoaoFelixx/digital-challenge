import styled, { keyframes } from "styled-components";


const openModal = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


export const BlurContainer = styled.div`
  position: absolute;

  top: 0;
  right: 0;

  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;

  width: calc(100% - 210px);
  height: 100%;

  background-color: #00000030;

  @media (width <= 768px) {
    width: 100%;
  }
`;

export const ModalContainer = styled.div`
  position: relative;

  width: 90%;
  max-width: 500px;
  
  background-color:${({ theme }) => theme.colors.neutralColor};
  
  border-radius: 16px;
  
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  
  animation: ${openModal} 0.3s ease-out;

  @media (width <= 768px) {
    max-width: 90%;
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  
  border: none;
  
  color: ${({ theme }) => theme.colors.neutralColor};
  font-size: 1.5rem;
  
  cursor: pointer;
  
  transition: color 0.2s;

  &:hover {
    color: #333;
  }
`;

export const ModalHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1em;

  color: ${({ theme }) => theme.colors.neutralColor};
  background-color: ${({ theme }) => theme.colors.primaryColor};

  border-radius: 16px 16px 0  0;
`;

export const ModalContent = styled.div`
  padding: 12px;

`;