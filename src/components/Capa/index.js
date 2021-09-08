import React from 'react';
import Text from '../foundation/Text';
import CapaWrapper from './styles';
import Logo from '../commons/Logo';

export default function Capa() {
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
        marginTop="10px"
        marginBottom="10px"
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
    </CapaWrapper>
  );
}
