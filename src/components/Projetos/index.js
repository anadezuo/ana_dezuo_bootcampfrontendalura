import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import breakpointsMedia from '../../theme/utils/breakpointsMedia';
import SectionTitle from '../SectionTitle';
import CardsList from '../Cards/CardsList';
import Button from '../commons/Buttons/Button';
import Modal from '../commons/Modal';
import FormContato from '../patterns/FormContato';
import Box from '../foundation/layout/Box';

const WrapperProjetos = styled.article`
  display: flex;
  flex-flow: column wrap;
  align-items: center;

  ${breakpointsMedia({
    md: css`
      flex-wrap: wrap;
    `,
  })}
`;

export default function Projetos({ theme }) {
  const [modal, setModal] = useState(false);

  return (
    <WrapperProjetos>
      <SectionTitle />
      <CardsList />
      <Modal isOpen={modal} onClose={() => setModal(false)}>
        {(propsModal) => (
          <FormContato
            propsModal={propsModal}
            theme={theme}
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
    </WrapperProjetos>
  );
}

Projetos.propTypes = {
  theme: PropTypes.shape({}).isRequired,
};

Projetos.defaultProps = {};
