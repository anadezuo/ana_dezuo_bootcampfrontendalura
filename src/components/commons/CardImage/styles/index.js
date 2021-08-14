import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

export const ImageDestaque = styled.img`
  position: absolute;

  ${breakpointsMedia({
    xs: css`
      height: 80px;
      width: auto;
    `,
    md: css`
      height: 100px;
      width: auto;
    `,
  })};
`;

ImageDestaque.Main = styled.img`
  height: 177px;
  width: auto;
  object-fit: cover;

  ${breakpointsMedia({
    md: css`
      height: 330px;
      width: auto;
    `,
  })};
`;

export const Image = styled.img`
  height: 177px;
  width: 248px;
  object-fit: contain;
`;
