import React from 'react';
import PropTypes from 'prop-types';
import CardMainWrapper from './styles';
import Box from '../../foundation/layout/Box';
import Button from '../../commons/Buttons/Button';
import Text from '../../foundation/Text';

export default function CardMain({
  title, imageUrl, slug, text,
}) {
  return (
    <Box display="grid" placeItems="center" minHeight="100vh" padding="20px">
      <CardMainWrapper>
        <CardMainWrapper.Information>
          <Text
            tag="h4"
            variant={{ xs: 'paragraphXSLight', md: 'title2' }}
            color="theme.main"
            textAlign={{ xs: 'center', md: 'left' }}
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
              <Button
                href={`projetos/${slug}`}
                marginTop="10px"
                marginLeft="10px"
                variant="theme.main"
                color="tertiary.main"
              >
                {' '}
                Visitar
                {' '}
              </Button>
            </Box>
          </CardMainWrapper.Text>
        </CardMainWrapper.Information>
        <CardMainWrapper.Image src={imageUrl} alt="Imagem do projeto" />
      </CardMainWrapper>
    </Box>
  );
}

CardMain.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  slug: PropTypes.string,
  text: PropTypes.string,
};

CardMain.defaultProps = {
  title: 'Projeto sem descrição',
  imageUrl: 'https://ana-portfolio.vercel.app/images/block.png',
  slug: '',
  text: '',
};
