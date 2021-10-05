import React from 'react';
import Text from '../foundation/Text';
import CapaWrapper from './styles';
import Logo from '../commons/Logo';

export default function Capa() {
  return (
    <CapaWrapper>
      <CapaWrapper.Information>
        <Text
          tag="p"
          variant={{ xs: 'paragraphXS', md: 'paragraph' }}
          color="primary.main"
          textAlign="center"
          fontFamily="fontFamilyException"
        >
          Olá, eu sou a
        </Text>
        <Text
          id="nome-perfil"
          tag="h2"
          variant={{ xs: 'titleXS', md: 'title' }}
          color="theme.primary"
          textAlign="center"
          marginTop="10px"
          marginBottom="10px"
        >
          Ana Dezuó
        </Text>

        <Text
          tag="p"
          variant={{ xs: 'paragraphXS', md: 'paragraph' }}
          color="primary.main"
          textAlign="center"
          fontFamily="fontFamilyException"
        >
          Desenvolvedora front-end
          <br />
          Seja bem vindo ao meu portfólio de projetos
        </Text>
      </CapaWrapper.Information>
      <CapaWrapper.Image>
        <Logo height={{ xs: '200px', md: '350px' }} />
      </CapaWrapper.Image>
    </CapaWrapper>
  );
}
