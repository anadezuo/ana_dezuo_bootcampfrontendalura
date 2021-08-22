import React from 'react';
import PropTypes from 'prop-types';
import Cabecalho from '../src/components/Cabecalho';
import Box from '../src/components/foundation/layout/Box';

export default function Sobre({ setTheme }) {
  // const [modal, setModal] = useState(false);

  return (
    <Box width="100vw" height="100vh" display="flex">
      <Cabecalho setTheme={setTheme} />
    </Box>
  );
}

Sobre.propTypes = {
  setTheme: PropTypes.func.isRequired,
};

Sobre.defaultProps = {};
