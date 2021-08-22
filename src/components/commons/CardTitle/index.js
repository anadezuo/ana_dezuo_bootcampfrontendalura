import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../foundation/Text';

export default function CardTitle({ main, title }) {
  return (
    <Text
      tag="h4"
      marginTop="20px"
      marginBottom="20px"
      variant={
        main
          ? { xs: 'paragraphBoldXS', md: 'title2' }
          : { xs: 'paragraphBoldXS', md: 'paragraphBold' }
      }
      textAlign={main ? { xs: 'center', md: 'left' } : 'center'}
      color={main ? 'theme.main' : ''}
    >
      {title}
    </Text>
  );
}

CardTitle.propTypes = {
  main: PropTypes.bool,
  title: PropTypes.string,
};

CardTitle.defaultProps = {
  main: false,
  title: 'Projeto sem título',
};
