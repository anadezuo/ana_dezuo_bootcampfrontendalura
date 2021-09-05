import React from 'react';
import PropTypes from 'prop-types';
import { ImageDestaque, Image } from './styles';

export default function CardImage({ imageUrl, isProjectMain }) {
  return (
    <>
      {isProjectMain ? (
        <ImageDestaque src={imageUrl} alt="Imagem do projeto" />

      ) : (
        <Image src={imageUrl} alt="Imagem do projeto" />
      )}
    </>
  );
}

CardImage.propTypes = {
  imageUrl: PropTypes.string,
  isProjectMain: PropTypes.bool,
};

CardImage.defaultProps = {
  imageUrl: 'https://ana-portfolio.vercel.app/images/block.png',
  isProjectMain: false,
};
