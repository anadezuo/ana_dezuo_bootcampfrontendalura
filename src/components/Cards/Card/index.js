import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../foundation/Text';
import CardImage from '../CardImage';
import CardWrapper from './styles';

export default function Card({
  title, description, imageUrl, slug,
}) {
  return (
    <CardWrapper>
      <CardImage imageUrl={imageUrl} />
      <CardWrapper.Title>
        <Text
          tag="h4"
          href={`projetos/${slug}`}
          variant={{ xs: 'paragraphXSLight', md: 'title2Light' }}
        >
          {title}
        </Text>
        <Text
          tag="p"
          variant={{ xs: 'smallestExceptionXS', md: 'smallestException' }}
          textAlign="left"
          color="primary.main"
        >
          {description}
        </Text>
      </CardWrapper.Title>
    </CardWrapper>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  slug: PropTypes.string,
};

Card.defaultProps = {
  title: 'Projeto sem titúlo',
  description: 'Projeto sem descrição',
  imageUrl: '',
  slug: '',
};
