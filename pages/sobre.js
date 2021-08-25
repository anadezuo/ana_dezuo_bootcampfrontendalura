import React from 'react';
import PropTypes from 'prop-types';
import Cabecalho from '../src/components/Cabecalho';
import Box from '../src/components/foundation/layout/Box';

export default function Sobre({ setTheme, isThemeDark, setIsThemeDark }) {
  // const [modal, setModal] = useState(false);

  return (
    <Box width="100vw" height="100vh" display="flex">
      <Cabecalho
        setTheme={setTheme}
        isThemeDark={isThemeDark}
        setIsThemeDark={setIsThemeDark}
      />
    </Box>
  );
}

Sobre.propTypes = {
  setTheme: PropTypes.func.isRequired,
  isThemeDark: PropTypes.bool,
  setIsThemeDark: PropTypes.func.isRequired,
};

Sobre.defaultProps = {
  isThemeDark: false,
};
