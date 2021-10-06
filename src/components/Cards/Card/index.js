import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../foundation/Text';
import CardWrapper from './styles';

export default function Card({ title, imageUrl, slug }) {
  return (
    <CardWrapper>
      <CardWrapper.Image
        src={imageUrl}
        alt="Imagem do projeto"
      />
      <CardWrapper.Title>
        <Text
          className="teste"
          tag="h4"
          href={`projetos/${slug}`}
          variant={{ xs: 'paragraphXSLight', md: 'title2Light' }}
        >
          {title}
        </Text>
      </CardWrapper.Title>
    </CardWrapper>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  slug: PropTypes.string,
};

Card.defaultProps = {
  title: 'Projeto sem titúlo',
  imageUrl: '',
  slug: '',
};
