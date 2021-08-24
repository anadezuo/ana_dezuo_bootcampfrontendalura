import React from 'react';
import PropTypes from 'prop-types';
import Menu from './styles';
import Text from '../foundation/Text';
import { ButtonTheme, SwitcherTheme } from '../../theme/SwitcherTheme';
import { ThemeLight, ThemeDark } from '../../theme';

export default function Cabecalho({ setTheme, isThemeDark, setIsThemeDark }) {
  const changeTheme = () => {
    const newStateThemDark = !isThemeDark;
    // eslint-disable-next-line no-unused-expressions
    newStateThemDark ? setTheme(ThemeDark) : setTheme(ThemeLight);
    setIsThemeDark(newStateThemDark);
  };

  return (
    <Menu>
      <Menu.Logo>
        <Text
          tag="a"
          variant={{ xs: 'paragraphXS', md: 'paragraph' }}
          href="/"
          color="black"
          fontFamily="fontFamily"
        >
          Home
        </Text>
      </Menu.Logo>
      <Menu.Navbar>
        <Text
          tag="a"
          variant={{ xs: 'paragraphXS', md: 'paragraph' }}
          href="/projetos"
          color="primary.contrast"
        >
          Projetos
        </Text>
        <Text
          tag="a"
          variant={{ xs: 'paragraphXS', md: 'paragraph' }}
          href="/sobre"
          color="primary.contrast"
        >
          Sobre mim
        </Text>
        <ButtonTheme onClick={changeTheme}>
          <SwitcherTheme isThemeDark={isThemeDark} />
        </ButtonTheme>
      </Menu.Navbar>
    </Menu>
  );
}

Cabecalho.propTypes = {
  setTheme: PropTypes.func.isRequired,
  isThemeDark: PropTypes.bool,
  setIsThemeDark: PropTypes.func.isRequired,
};

Cabecalho.defaultProps = {
  isThemeDark: false,
};
