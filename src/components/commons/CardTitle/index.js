import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../foundation/Text';

export default function CardTitle({ title }) {
  return (
    <Text
      tag="h4"
      variant={{ xs: 'paragraphBoldXS', md: 'paragraphBold' }}
      textAlign="center"
    >
      {title}
    </Text>
  );
}

CardTitle.propTypes = {
  title: PropTypes.string,
};

CardTitle.defaultProps = {
  title: 'Projeto sem título',
};
