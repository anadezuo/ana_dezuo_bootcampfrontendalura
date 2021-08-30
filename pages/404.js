import React from 'react';
import Cabecalho from '../src/components/Cabecalho';
import Box from '../src/components/foundation/layout/Box';
import Logo from '../src/components/commons/Logo';
import Text from '../src/components/foundation/Text';
import SEO from '../src/core/Head/SEO';
import ButtonContatoModal from '../src/components/commons/Buttons/ButtonContatoModal';

export default function NotFountPage() {
  return (
    <>
      <SEO />
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
          <Logo height={{ xs: '100px', md: '200px' }} />
          <Text
            tag="p"
            variant={{ xs: 'paragraphXSLight', md: 'paragraphLight' }}
            color="primary.main"
            marginTop="20px"
            textAlign="center"
          >
            Ops! Essá página que está procurando não existe.
            <br />
            Mas ela pode existir!
            <br />
            Me deixe uma mensagem falando sobre o que está procurando.
            <br />
          </Text>
          <ButtonContatoModal />
        </Box>
      </Box>
    </>
  );
}
