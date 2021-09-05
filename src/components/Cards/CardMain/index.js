import React from 'react';
import PropTypes from 'prop-types';
import CardMainWrapper from './styles';
import CardImage from '../CardImage';
import Box from '../../foundation/layout/Box';
import Button from '../../commons/Buttons/Button';
import Text from '../../foundation/Text';

export default function CardMain({
  title, imageUrl, link, text,
}) {
  return (
    <Box display="grid" placeItems="center" minHeight="100vh" padding="20px">
      <CardMainWrapper>
        <CardMainWrapper.Information>
          <Text
            tag="h4"
            variant={{
              xs: 'paragraphXSLight',
              md: 'title2',
            }}
            textAlign={{ xs: 'center', md: 'left' }}
            color="theme.main"
          >
            {title}
          </Text>

          <CardMainWrapper.Text>
            <Text
              tag="p"
              variant="smallestException"
              textAlign="left"
              color="primary.main"
              marginTop="10px"
              marginBottom="10px"
            >
              {text}
            </Text>
            <Box display="flex" flexDirection="row" justifyContent="flex-start">
              <a href={link} target="_blank" rel="noreferrer">
                <Button
                  padding="5px"
                  marginTop="10px"
                  marginLeft="10px"
                  variant="theme.main"
                  color="tertiary.main"
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
          <CardImage imageUrl={imageUrl} isProjectMain />
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
