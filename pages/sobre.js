import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Cabecalho from '../src/components/Cabecalho';
import Box from '../src/components/foundation/layout/Box';
import Button from '../src/components/commons/Buttons/Button';
import Modal from '../src/components/commons/Modal';
import FormContato from '../src/components/patterns/FormContato';

export default function Sobre({ theme, setTheme }) {
  const [modal, setModal] = useState(false);

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
    >
      <Cabecalho setTheme={setTheme} />
      <Modal isOpen={modal} onClose={() => setModal(false)}>
        {(propsModal) => (
          <FormContato
            propsModal={propsModal}
            theme={theme}
            setModal={setModal}
          />
        )}
      </Modal>
      <Button onClick={() => setModal(true)}> Entre em contato </Button>
    </Box>
  );
}

Sobre.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  setTheme: PropTypes.func.isRequired,
};

Sobre.defaultProps = {};
