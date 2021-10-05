import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

const CardWrapper = styled.div`
  width: auto;
  background-color: transparent;

  ${breakpointsMedia({
    xs: css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      border: 1px solid ${({ theme }) => theme.colors.primary.main.color};
    `,
    md: css`
      border: none;
      grid-column: 1 / span 3;
      display: flex;
      flex-direction: row;
      max-width: 800px;
      max-height: 500px;
      align-items: center;
      margin: 50px;
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
      height: 260px;
      background-color: ${({ theme }) => theme.colors.colorTransparency.main.color};
      box-shadow: 0px 0px 8px
        ${({ theme }) => theme.colors.primary.main.color};
      transform: translateX(50px);
      z-index: 2;
    `,
  })};
`;

CardWrapper.Image = styled.img`
  order: 1;
  flex-grow: 2;
  justify-content: center;
  height: 177px;
  width: auto;
  object-fit: cover;

  ${breakpointsMedia({
    md: css`
      order: 2;
      height: 330px;
      width: auto;
      padding: 15px;
      border: 5px solid
        ${({ theme }) => theme.colors.theme.primary.color};
      transform: translateX(-30px);
    `,
  })}
`;

export default CardWrapper;
