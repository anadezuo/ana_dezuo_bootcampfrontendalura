import styled from 'styled-components';

const Menu = styled.nav`
  background-color: ${({ theme }) => theme.colors.colorTransparency.main.color};
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  z-index: 15;
  position: fixed;
  width: 100vw;
  top: 0;
`;

Menu.Logo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
`;

Menu.Navbar = styled.div`
  margin-right: 30px;
  flex-flow: row nowrap;
  display: flex;
  align-items: center;

  a {
    padding: 0 20px;
    list-style: none;
    text-decoration: none;
    text-align: center;
    display: block;
    transition: ${({ theme }) => theme.transition};
    border: none;
    color: ${({ theme }) => theme.colors.primary.main.color};
    &:hover,
    &:focus {
      font-weight: 700;
      color: ${({ theme }) => theme.colors.theme.primary.color};
    }
  }
`;

export default Menu;
