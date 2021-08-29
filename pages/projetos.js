import React from 'react';
import PropTypes from 'prop-types';
import SEO from '../src/core/Head/SEO';
import Cabecalho from '../src/components/Cabecalho';
import Projetos from '../src/components/Projetos';
import Box from '../src/components/foundation/layout/Box';

export default function ProjetosPage({
  theme,
  setTheme,
  isThemeDark,
  setIsThemeDark,
}) {
  return (
    <>
      <SEO headTitle="Projetos" />
      <Box marginTop={{ xs: '60px', md: '80px' }}>
        <Cabecalho
          setTheme={setTheme}
          isThemeDark={isThemeDark}
          setIsThemeDark={setIsThemeDark}
        />
        <Projetos theme={theme} />
      </Box>
    </>
  );
}

ProjetosPage.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  setTheme: PropTypes.func.isRequired,
  isThemeDark: PropTypes.bool,
  setIsThemeDark: PropTypes.func.isRequired,
};

ProjetosPage.defaultProps = {
  isThemeDark: false,
};
