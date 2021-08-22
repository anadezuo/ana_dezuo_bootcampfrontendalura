import React from 'react';
import PropTypes from 'prop-types';
import CardImage from '../../commons/CardImage';
import CardTitle from '../../commons/CardTitle';
import CardWrapper from './styles';

export default function Card({ title, imageUrl, link }) {
  return (
    <CardWrapper>
      <CardImage imageUrl={imageUrl} />
      <CardWrapper.Text>
        <a href={link} target="_blank" rel="noreferrer">
          <CardTitle title={title} main={false} />
        </a>
      </CardWrapper.Text>
    </CardWrapper>
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
