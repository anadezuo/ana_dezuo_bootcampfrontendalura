import styled from 'styled-components';

const Menu = styled.nav`
  background-color: ${({ theme }) => theme.colors.background.contrast.color};
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  //z-index: 15;
  position: fixed;
  width: 100vw;
  top: 0;

  a {
    padding: 10px;
    list-style: none;
    text-decoration: none;
    text-align: center;
    display: block;
    transition: ${({ theme }) => theme.transition};
  }
`;

Menu.Logo = styled.div`
  display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.theme.main.color};
    padding-left: 15px;
    padding-right: 15px;

    a {
      color: ${({ theme }) => theme.colors.primary.main.color};
      &:hover,
      &:focus {
        font-weight: 700;
        color: ${({ theme }) => theme.colors.theme.contrast.color};
      }
    }
`;

Menu.Navbar = styled.div`
  flex-flow: row nowrap;
  display: flex;
  align-items: center;
  a {
    border: none;
    color: ${({ theme }) => theme.colors.primary.contrast.color};
    &:hover,
    &:focus {
      font-weight: 700;
      color: ${({ theme }) => theme.colors.theme.main.color};
    }
  }
`;

export default Menu;
