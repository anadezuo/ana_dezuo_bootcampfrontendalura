import React from 'react';
import PropTypes from 'prop-types';
import Cabecalho from '../src/components/Cabecalho';
import Projetos from '../src/components/Projetos';
import Box from '../src/components/foundation/layout/Box';

export default function ProjetosPage({ theme, setTheme }) {
  return (
    <Box>
      <Cabecalho setTheme={setTheme} />
      <Projetos theme={theme} />
    </Box>
  );
}

ProjetosPage.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  setTheme: PropTypes.func.isRequired,
};

ProjetosPage.defaultProps = {};
