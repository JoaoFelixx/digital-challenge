import styled, { keyframes } from "styled-components";


const openUploadContainer = keyframes`
  from {
    left: -30px;
    opacity: 0;
  } 
  to {
    left: 44px;
    opacity: 1;
  }
`;

const openSidebar = keyframes`
  from {
    left: -210px;
    opacity: 0;
  } 
  to {
    left: 0;
    opacity: 1;
  }
`;


export const SidebarContainer = styled.aside`
  width: 210px;
  height: 100%;
  max-width: 210px;

  z-index: 2;
  
  border: 1px solid ${({ theme }) => theme.colors.neutralColor1000};

  padding-top: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.neutralColor100};

  animation: ${openSidebar} .5s;
    

  @media (width <= 768px) {
    position: fixed;
  } 
`;

export const SideCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const Logo = styled.img`

`;

export const ListContainer = styled.div`
  width: 100%;

  padding: 0 15px;

  h2.span {
    font-size: 9px;
    font-weight: 800;
    line-height: 15px;
    color: #A3A3A3;
  }

  ul {
    width: 100%;

    list-style: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    li {
      width: 100%;

      cursor: pointer;

      display: flex;
      align-items: center;
      gap: 10px;

      padding: 10px;

      border-radius: 5px;

      font-size: 1em;
      font-weight: 500;
      line-height: 15px;

      &.active {
        color: ${({ theme }) => theme.colors.neutralColor};
        background-color: ${({ theme }) => theme.colors.primaryColor};
      
        img {
          filter: invert(1);
        }
      }
    }
  }
`;

export const UserSession = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  gap: 5px;
  
  padding: 30px 25px;
`;

export const UserContainer = styled.div`
  display: flex;
  gap: 10px;

  padding: 1px;

   .img-profile,
   img.profile-picture {
    border-radius: 15px;

  }

  .img-profile {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid ${({ theme }) => theme.colors.primaryColor};

    padding: 1px;
  }

  img.profile-picture {
    width: 40px;
    height: 40px;

    cursor: pointer;
  }

  .user-info {
    h4, span {
      line-height: 15px; 
    }

    h4 {
      font-size: 1em;
      font-weight: 500;
    }

    span {
      font-size: 11px;
      font-weight: 400;
      color: #00000080;
    }
  }
`;

export const Separator = styled.hr`
  position: absolute;
  top: -30px;

  opacity: 10%;
  
  width: calc(100% - 50px);
`;

export const ActionList = styled.ul`
  width: 100%;
  
  list-style: none;

  li {
    display: flex;
    gap: 10px;

    padding: 10px;

    cursor: pointer;

    span {
      font-weight: 500;
      font-size: 14px;
      line-height: 15px;
      letter-spacing: 0%;
    }
  }
`;

export const UploadContainer = styled.div`
  position: absolute;
  top: -2px;
  left: 44px;

  width: 273px;
  height: 40px;

  border: 1px solid ${({ theme }) => theme.colors.neutralColor600};
  border-radius: 100px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 20px;

  background-color: ${({ theme }) => theme.colors.neutralColor400};

  animation: ${openUploadContainer} .5s;


  p {
    font-weight: 400;
    font-size: 12px;

    color: ${({ theme }) => theme.colors.neutralColor700}
  }

  span:has(>img) {
    cursor: pointer;
  }  


  @media (width <= 768px) {
    width: 200px;
  }
`;

export const MenuIcon = styled.img`
  position: fixed;

  width: 36px;
  height: 36px;
`;