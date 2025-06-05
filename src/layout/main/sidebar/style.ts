import styled from "styled-components";


export const SidebarContainer = styled.aside`
  width: 210px;
  height: 100%;
  max-width: 210px;

  border: 1px solid ${({ theme }) => theme.colors.borderColor};

  padding-top: 30px;

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
