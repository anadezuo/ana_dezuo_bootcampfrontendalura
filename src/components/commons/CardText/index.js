import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../foundation/Text';

export default function CardText({ text }) {
  return (
    <Text
      tag="p"
      variant="smallestException"
      textAlign="left"
      margin="32px"
    >
      {text}
    </Text>
  );
}

CardText.propTypes = {
  text: PropTypes.string,
};

CardText.defaultProps = {
  text: 'Projeto sem descrição',
};
