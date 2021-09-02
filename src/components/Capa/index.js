import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Text from '../foundation/Text';
import CapaWrapper from './styles';
import GithubIcon from '../../assets/icons/GithubIcon';
import TwitterIcon from '../../assets/icons/TwitterIcon';
import MediumIcon from '../../assets/icons/MediumIcon';
import Logo from '../commons/Logo';

export default function Capa() {
  const themeContext = useContext(ThemeContext);

  const { color } = themeContext.colors.primary.main;
  const colorContrast = themeContext.colors.background.main.color;

  return (
    <CapaWrapper className="capa">
      <Logo
        height={{ xs: '200px', md: '350px' }}
      />
      <Text
        tag="h2"
        variant="subTitle"
        color="theme.main"
        textAlign="center"
        marginTop="8px"
        marginBottom="8px"
      >
        Portfólio
      </Text>

      <Text
        tag="p"
        variant={{ xs: 'paragraphXS', md: 'paragraph' }}
        color="primary.main"
        textAlign="center"
        marginTop="0"
        fontFamily="fontFamilyException"
      >
        Olá, seja bem vindo ao meu portfólio de projetos
      </Text>

      <CapaWrapper.Icons>
        <a href="https://github.com/anadezuo" target="_blank" rel="noreferrer">
          <GithubIcon color={color} colorContrast={colorContrast} />
        </a>
        <a href="https://twitter.com/twitter" target="_blank" rel="noreferrer">
          <TwitterIcon color={color} colorContrast={colorContrast} />
        </a>
        <a href="https://medium.com/" target="_blank" rel="noreferrer">
          <MediumIcon color={color} colorContrast={colorContrast} />
        </a>
      </CapaWrapper.Icons>
    </CapaWrapper>
  );
}
