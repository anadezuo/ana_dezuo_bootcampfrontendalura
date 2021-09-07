import React from 'react';
import Menu from './styles';
import Text from '../foundation/Text';
import { ButtonTheme, SwitcherTheme } from '../../theme/SwitcherTheme';
import { useTheme } from '../../hooks/useTheme';
import LogoDescription from '../commons/Logo/LogoDescription';

export default function Cabecalho() {
  const { toggleTheme } = useTheme();

  function handleToggleTheme() {
    toggleTheme();
  }

  return (
    <Menu>
      <Menu.Logo>
        <LogoDescription
          height={{ xs: '50px', md: '60px' }}
        />
      </Menu.Logo>
      <Menu.Navbar>
        <Text
          tag="a"
          variant={{ xs: 'paragraphXS', md: 'paragraph' }}
          href="/"
          color="black"
        >
          Home
        </Text>
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
          Sobre
        </Text>
        <ButtonTheme onClick={handleToggleTheme} alt="Botão de escolha de tema">
          <SwitcherTheme />
        </ButtonTheme>
      </Menu.Navbar>
    </Menu>
  );
}
