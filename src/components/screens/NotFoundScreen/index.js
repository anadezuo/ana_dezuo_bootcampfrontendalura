import React from 'react';
import Box from '../../foundation/layout/Box';
import Logo from '../../commons/Logo';
import Text from '../../foundation/Text';
import ButtonFormContactWrapper from '../../wrappers/ButtonFormContactWrapper';

export default function NotFountScreen() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      marginTop="50px"
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
      <ButtonFormContactWrapper />
    </Box>
  );
}
