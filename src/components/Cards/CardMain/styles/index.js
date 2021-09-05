import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

const CardWrapper = styled.div`
  width: auto;
  background-color: transparent;

  ${breakpointsMedia({
    xs: css`
      border: 1px solid ${({ theme }) => theme.colors.secondary.main.color};
      display: flex;
      flex-direction: column;
    `,
    md: css`
      border: none;
      grid-column: 1 / span 3;
      display: flex;
      flex-direction: row;
      max-width: 800px;
      max-height: 500px;
      align-items: center;
    `,
  })};
`;

CardWrapper.Text = styled.div`
  display: none;

  ${breakpointsMedia({
    md: css`
      display: flex;
      flex-direction: column;
    `,
  })};
`;

CardWrapper.Information = styled.div`
  order: 2;

  ${breakpointsMedia({
    xs: css`
      margin: 20px 0;
    `,
    md: css`
      order: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;

      flex-grow: 1;
      padding: 0 40px;
      height: 280px;
      background-color: ${({ theme }) => theme.colors.colorTransparency.main.color};
      box-shadow: 0px 0px 8px
        ${({ theme }) => theme.colors.secondary.main.color};
      transform: translateX(50px);
      z-index: 2;
    `,
  })};
`;

CardWrapper.Image = styled.div`
  order: 1;

  ${breakpointsMedia({
    md: css`
      order: 2;
    `,
  })}
`;

export default CardWrapper;
