import React from 'react';
import PropTypes from 'prop-types';
import Cabecalho from '../src/components/Cabecalho';
import Text from '../src/components/foundation/Text';
import Box from '../src/components/foundation/Box';

export default function Sobre({ setTheme }) {
  // TODO: Atualizar, estilizado simples (inline) pontualmente
  return (
    <Box
      width="100vw"
      height="100vh"
    >
      <Cabecalho setTheme={setTheme} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Text
          tag="h1"
          variant="subTitle"
          color="primary.main"
          textAlign="center"
          marginTop="0"
          marginBottom="0"
        >
          Página em construção
        </Text>
        <img
          style={{ width: '150px' }}
          src="https://ana-portfolio.vercel.app/images/block.png"
          alt="Um bloco com um ponto de interrogação do jogo Mario Bros"
        />
      </div>
    </Box>
  );
}

Sobre.propTypes = {
  setTheme: PropTypes.node.isRequired,
};

Sobre.defaultProps = {};
