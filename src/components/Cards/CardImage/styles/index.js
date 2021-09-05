import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

export const ImageDestaque = styled.img`
  flex-grow: 2;
  justify-content: center;
  height: 177px;
  width: auto;
  object-fit: cover;

  ${breakpointsMedia({
    md: css`
      height: 330px;
      width: auto;
      padding: 15px;
      border: 5px solid
        ${({ theme }) => theme.colors.theme.colorTransparency.main.color};
      transform: translateX(-30px);
    `,
  })};
`;

export const Image = styled.img`
  height: 177px;
  width: auto;
  object-fit: cover;
`;
