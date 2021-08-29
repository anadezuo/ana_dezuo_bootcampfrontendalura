import React from 'react';
import PropTypes from 'prop-types';
import Cabecalho from '../src/components/Cabecalho';
import Box from '../src/components/foundation/layout/Box';
import Text from '../src/components/foundation/Text';

export default function Projeto({ setTheme, isThemeDark, setIsThemeDark }) {
  return (
    <Box width="100vw" height="100vh" display="flex">
      <Cabecalho
        setTheme={setTheme}
        isThemeDark={isThemeDark}
        setIsThemeDark={setIsThemeDark}
      />
      <Box
        marginTop="50px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100%"
      >
        <Text
          variant="p"
          color="primary.main"
        >
          Será exibido as informações de um projeto selecionado
        </Text>
      </Box>
    </Box>
  );
}

Projeto.propTypes = {
  setTheme: PropTypes.func.isRequired,
  isThemeDark: PropTypes.bool,
  setIsThemeDark: PropTypes.func.isRequired,
};

Projeto.defaultProps = {
  isThemeDark: false,
};
