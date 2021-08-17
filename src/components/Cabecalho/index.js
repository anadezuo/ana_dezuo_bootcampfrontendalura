import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Menu from './styles';
import Text from '../foundation/Text';
import { ButtonTheme, SwitcherTheme } from '../../theme/SwitcherTheme';
import { ThemeLight, ThemeDark } from '../../theme';

export default function Cabecalho({ setTheme }) {
  const [isDark, setIsDark] = useState(false);
  const changeTheme = () => {
    // eslint-disable-next-line no-unused-expressions
    isDark ? setTheme(ThemeLight) : setTheme(ThemeDark);
    setIsDark(!isDark);
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
        <Text
          tag="a"
          variant={{ xs: 'paragraphXS', md: 'paragraph' }}
          href="/contato"
          color="primary.contrast"
        >
          Contato
        </Text>
        <ButtonTheme onClick={changeTheme}>
          <SwitcherTheme isThemeDark={isDark} />
        </ButtonTheme>
      </Menu.Navbar>
    </Menu>
  );
}

Cabecalho.propTypes = {
  setTheme: PropTypes.func.isRequired,
};

Cabecalho.defaultProps = {};
