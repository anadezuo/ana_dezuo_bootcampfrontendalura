import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import propToStyle from '../../../theme/utils/propToStyle';
import Box from '../../foundation/layout/Box';

export const ImageLogo = styled.img`
  ${propToStyle('height')}
  ${propToStyle('width')}
`;

export default function LogoWithDescription({ height, width }) {
  const themeContext = useContext(ThemeContext);

  const urlLogo = themeContext.isDark
    ? 'https://ana-dezuo-bootcamp-frontend-alura.vercel.app/images/logo/logo_descricao_dark.png'
    : 'https://ana-dezuo-bootcamp-frontend-alura.vercel.app/images/logo/logo_descricao_light.png';

  return (
    <Box display="flex" justifyContent="center">
      <ImageLogo
        height={height}
        width={width}
        src={urlLogo}
        alt="Imagem com a letra A com descrição de desenvolvedora front-end, web e mobile."
      />
    </Box>
  );
}

LogoWithDescription.propTypes = {
  height: PropTypes.shape({ xs: PropTypes.string, md: PropTypes.string }),
  width: PropTypes.shape({ xs: PropTypes.string, md: PropTypes.string }),
};

LogoWithDescription.defaultProps = {
  height: { xs: '25px', md: '50px' },
  width: { xs: 'auto', md: 'auto' },
};
