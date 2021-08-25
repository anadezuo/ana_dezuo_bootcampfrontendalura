import React from 'react';
import PropTypes from 'prop-types';
import Capa from '../src/components/Capa';
import Cabecalho from '../src/components/Cabecalho';
import Projetos from '../src/components/Projetos';
import Footer from '../src/components/Footer';
import Box from '../src/components/foundation/layout/Box';

export default function Home({
  theme, setTheme, isThemeDark, setIsThemeDark,
}) {
  return (
    <Box width="100vw" height="100vh">
      <Cabecalho
        setTheme={setTheme}
        isThemeDark={isThemeDark}
        setIsThemeDark={setIsThemeDark}
      />
      <Capa theme={theme} />
      <Projetos theme={theme} />
      <Footer />
    </Box>
  );
}

Home.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  setTheme: PropTypes.func.isRequired,
  isThemeDark: PropTypes.bool,
  setIsThemeDark: PropTypes.func.isRequired,
};

Home.defaultProps = {
  isThemeDark: false,
};
