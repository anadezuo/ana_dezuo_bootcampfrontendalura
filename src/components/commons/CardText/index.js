import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../foundation/Text';

export default function CardText({ text }) {
  return (
    <Text
      tag="p"
      variant="smallestException"
      textAlign="left"
      color="primary.main"
      marginTop="10px"
      marginBottom="10px"
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
