import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

export const CapaWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

CapaWrapper.Icons = styled.div`
  display: flex;
  flex-direction: row;
  
  a {
    margin: 8px;
  }
`;

export const ImageLogo = styled.img`

  ${breakpointsMedia({
    xs: css`
      height: 100px;
    `,
    md: css`
      height: 300px;
    `,
  })};
`;
