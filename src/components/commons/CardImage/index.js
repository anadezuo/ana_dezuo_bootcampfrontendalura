import React from 'react';
import PropTypes from 'prop-types';
import { ImageDestaque, Image } from './styles';

export default function CardImage({ imageUrl, main }) {
  return (
    <>
      {main ? (
        <ImageDestaque.Main src={imageUrl} alt="Imagem do projeto" />
      ) : (
        <Image src={imageUrl} alt="Imagem do projeto" />
      )}
    </>
  );
}

CardImage.propTypes = {
  imageUrl: PropTypes.string,
  main: PropTypes.bool,
};

CardImage.defaultProps = {
  imageUrl: 'https://ana-portfolio.vercel.app/images/block.png',
  main: false,
};
