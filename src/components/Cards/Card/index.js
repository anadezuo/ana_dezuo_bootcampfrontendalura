import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../foundation/Text';
import CardImage from '../CardImage';
import CardWrapper from './styles';

export default function Card({
  title, description, imageUrl, link,
}) {
  return (
    <CardWrapper>
      <CardImage imageUrl={imageUrl} />
      <CardWrapper.Title>
        <a href={link} target="_blank" rel="noreferrer">
          <Text
            tag="h4"
            variant={{ xs: 'paragraphXSLight', md: 'title2Light' }}
            margin="20px 0"
            // textAlign={{ xs: 'center', md: 'left' }}
            textAlign="center"
          >
            {title}
          </Text>
        </a>
        <Text
          tag="p"
          variant={{ xs: 'paragraphXSLight', md: 'paragraphLight' }}
          textAlign="left"
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
  link: PropTypes.string,
};

Card.defaultProps = {
  title: 'Projeto sem titúlo',
  description: 'Projeto sem descrição',
  imageUrl: '',
  link: '',
};
