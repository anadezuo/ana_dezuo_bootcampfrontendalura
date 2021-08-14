import React from 'react';
import PropTypes from 'prop-types';
import Cabecalho from '../src/components/Cabecalho';
import Text from '../src/components/foundation/Text';

export default function Contato({ setTheme }) {
  // TODO: Atualizar, estilizado simples (inline) pontualmente
  return (
    <>
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
          src="https://ana-dezuo-bootcamp-frontend-alura.vercel.app/images/block.png"
          alt="Um bloco com um ponto de interrogação do jogo Mario Bros"
        />
      </div>
    </>
  );
}

Contato.propTypes = {
  setTheme: PropTypes.node.isRequired,
};

Contato.defaultProps = {};
