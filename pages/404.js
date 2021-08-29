import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Cabecalho from '../src/components/Cabecalho';
import Box from '../src/components/foundation/layout/Box';
import Logo from '../src/components/commons/Logo';
import Text from '../src/components/foundation/Text';
import Modal from '../src/components/commons/Modal';
import FormContato from '../src/components/patterns/FormContato';
import Button from '../src/components/commons/Buttons/Button';
import SEO from '../src/core/Head/SEO';

export default function NotFountPage({
  theme,
  setTheme,
  isThemeDark,
  setIsThemeDark,
}) {
  const [modal, setModal] = useState(false);

  return (
    <>
      <SEO />
      <Box width="100vw" height="100vh" display="flex">
        <Cabecalho
          setTheme={setTheme}
          isThemeDark={isThemeDark}
          setIsThemeDark={setIsThemeDark}
        />
        <Modal isOpen={modal} onClose={() => setModal(false)}>
          {(propsModal) => (
            <FormContato
              propsModal={propsModal}
              theme={theme}
              setModal={setModal}
            />
          )}
        </Modal>
        <Box
          marginTop="50px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="100%"
          height="100%"
        >
          <Logo height={{ xs: '100px', md: '200px' }} />
          <Text
            tag="p"
            variant={{ xs: 'paragraphXSLight', md: 'paragraphLight' }}
            color="primary.main"
            marginTop="20px"
            textAlign="center"
          >
            Ops! Essá página que está procurando não existe.
            <br />
            Mas ela pode existir!
            <br />
            Me deixe uma mensagem falando sobre o que está procurando.
            <br />
          </Text>
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
        </Box>
      </Box>
    </>
  );
}

NotFountPage.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  setTheme: PropTypes.func.isRequired,
  isThemeDark: PropTypes.bool,
  setIsThemeDark: PropTypes.func.isRequired,
};

NotFountPage.defaultProps = {
  isThemeDark: false,
};
