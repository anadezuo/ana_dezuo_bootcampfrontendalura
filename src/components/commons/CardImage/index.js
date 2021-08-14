import React from 'react';
import PropTypes from 'prop-types';
import { ImageDestaque, Image } from './styles';

export default function CardImage({ imageUrl, main }) {
  return (
    <>
      {main ? (
        <>
          <ImageDestaque
            src="https://ana-dezuo-bootcamp-frontend-alura.vercel.app/images/projetos/star.png"
            alt="Imagem de uma estrela indicando destaque em um projeto"
          />
          <ImageDestaque.Main src={imageUrl} alt="Imagem do projeto" />
        </>
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
  imageUrl: 'https://ana-dezuo-bootcamp-frontend-alura.vercel.app/images/block.png',
  main: false,
};
