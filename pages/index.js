import React from 'react';
import Capa from '../src/components/Capa';
import Cabecalho from '../src/components/Cabecalho';
import Projetos from '../src/components/Projetos';
import Footer from '../src/components/Footer';
import Box from '../src/components/foundation/layout/Box';

export default function Home() {
  return (
    <Box width="100vw" height="100vh">
      <Cabecalho />
      <Capa />
      <Projetos />
      <Footer />
    </Box>
  );
}
