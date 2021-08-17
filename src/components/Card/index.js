import React from 'react';
import PropTypes from 'prop-types';
import CardImage from '../commons/CardImage';
import CardTitle from '../commons/CardTitle';
import CardWrapper from './styles';

export default function Card({ title, imageUrl, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <CardWrapper>
        <CardImage imageUrl={imageUrl} />
        <CardWrapper.Text>
          <CardTitle title={title} />
        </CardWrapper.Text>
      </CardWrapper>
    </a>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  link: PropTypes.string.isRequired,
};

Card.defaultProps = {
  title: 'Projeto sem descrição',
  imageUrl: 'https://ana-portfolio.vercel.app/images/block.png',
};
