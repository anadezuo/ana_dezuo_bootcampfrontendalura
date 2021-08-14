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
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

Card.defaultProps = {};
