import styled from "styled-components";


export const SidebarContainer = styled.aside`
  width: 210px;
  height: 100%;
  max-width: 210px;

  border: 1px solid ${({ theme }) => theme.colors.borderColor};

  padding-top: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.darkOrange};
      
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
    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid ${({theme}) => theme.colors.darkOrange};

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