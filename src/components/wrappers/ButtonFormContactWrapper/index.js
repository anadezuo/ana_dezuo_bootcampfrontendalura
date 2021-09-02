import React, { useState } from 'react';
import Box from '../../foundation/layout/Box';
import Modal from '../../commons/Modal';
import FormContato from '../../patterns/FormContato';
import Button from '../../commons/Buttons/Button';

export default function ButtonFormContactWrapper() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Modal isOpen={modal} onClose={() => setModal(false)}>
        {(propsModal) => (
          <FormContato
            propsModal={propsModal}
            setModal={setModal}
          />
        )}
      </Modal>
      <Box margin="15px">
        <Button
          variant="theme.main"
          color="tertiary.main"
          onClick={() => setModal(true)}
        >
          {' '}
          Entre em contato
          {' '}
        </Button>
      </Box>
    </>
  );
}
