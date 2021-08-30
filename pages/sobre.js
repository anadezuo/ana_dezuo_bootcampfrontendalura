import React from 'react';
import SEO from '../src/core/Head/SEO';
import Cabecalho from '../src/components/Cabecalho';
import Box from '../src/components/foundation/layout/Box';

export default function Sobre() {
  // const [modal, setModal] = useState(false);

  return (
    <>
      <SEO headTitle="Sobre Ana" />
      <Box width="100vw" height="100vh" display="flex">
        <Cabecalho />
      </Box>
    </>
  );
}
