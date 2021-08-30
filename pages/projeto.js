import React from 'react';
import Cabecalho from '../src/components/Cabecalho';
import Box from '../src/components/foundation/layout/Box';
import Text from '../src/components/foundation/Text';
import SEO from '../src/core/Head/SEO';

export default function Projeto() {
  return (
    <>
      <SEO headTitle="Projeto XX" />
      <Box width="100vw" height="100vh" display="flex">
        <Cabecalho />
        <Box
          marginTop="50px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="100%"
          height="100%"
        >
          <Text variant="p" color="primary.main">
            Será exibido as informações de um projeto selecionado
          </Text>
        </Box>
      </Box>
    </>
  );
}
