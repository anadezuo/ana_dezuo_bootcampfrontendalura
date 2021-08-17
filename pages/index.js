import React from 'react';
import PropTypes from 'prop-types';
import Capa from '../src/components/Capa';
import Cabecalho from '../src/components/Cabecalho';
import Projetos from '../src/components/Projetos';
import Footer from '../src/components/Footer';
import Box from '../src/components/foundation/Box';

export default function Home({ theme, setTheme }) {
  return (
    <Box
      width="100vw"
      height="100vh"
    >
      <Cabecalho setTheme={setTheme} />
      <Capa theme={theme} />
      <Projetos />
      <Footer />
    </Box>
  );
}

Home.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  setTheme: PropTypes.func.isRequired,
};

Home.defaultProps = {};
