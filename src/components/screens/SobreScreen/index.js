import React from 'react';
import Box from '../../foundation/layout/Box';
import Text from '../../foundation/Text';

export default function SobreScreen() {
  return (
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
        Sobre
      </Text>
    </Box>
  );
}
