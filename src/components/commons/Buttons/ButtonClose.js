import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import iconClose from '../../../assets/images/iconClose.png';

const Button = styled.button`
  margin: 15px;
  border: none;
  background-color: inherit;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
`;

export default function ButtonClose({ setAction }) {
  return (
    <Button
      onClick={() => {
        setAction(false);
      }}
    >
      <Image src={iconClose} alt="Imagem em x que fecha a tela" />
    </Button>
  );
}

ButtonClose.propTypes = {
  setAction: PropTypes.func.isRequired,
};

ButtonClose.defaultProps = {};
