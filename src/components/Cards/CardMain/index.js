import React from 'react';
import PropTypes from 'prop-types';
import CardMainWrapper from './styles';
import CardImage from '../../commons/CardImage';
import CardTitle from '../../commons/CardTitle';
import CardText from '../../commons/CardText';
import Box from '../../foundation/layout/Box';
import Button from '../../commons/Buttons/Button';

export default function CardMain({
  title, imageUrl, link, text,
}) {
  return (
    <Box display="grid" placeItems="center" minHeight="100vh" padding="20px">
      <CardMainWrapper>
        <CardMainWrapper.Information>
          <CardTitle title={title} main />
          <CardMainWrapper.Text>
            <CardText text={text} />
            <Box display="flex" flexDirection="row" justifyContent="flex-start">
              <a href={link} target="_blank" rel="noreferrer">
                <Button
                  padding="5px"
                  marginTop="10px"
                  marginLeft="10px"
                  variant="theme.main"
                  backgroundColor="primary.main"
                >
                  {' '}
                  Visitar
                  {' '}
                </Button>
              </a>
            </Box>
          </CardMainWrapper.Text>
        </CardMainWrapper.Information>
        <CardMainWrapper.Image>
          <CardImage imageUrl={imageUrl} main />
        </CardMainWrapper.Image>
      </CardMainWrapper>
    </Box>
  );
}

CardMain.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  link: PropTypes.string.isRequired,
  text: PropTypes.string,
};

CardMain.defaultProps = {
  title: 'Projeto sem descrição',
  imageUrl: 'https://ana-portfolio.vercel.app/images/block.png',
  text: '',
};
