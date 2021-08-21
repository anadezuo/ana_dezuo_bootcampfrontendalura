import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

const CardWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.secondary.main.color};;
  width: auto;
  box-shadow: 5px 5px 10px ${({ theme }) => theme.colors.secondary.main.color};

  ${breakpointsMedia({
    md: css`
      grid-column: 1 / span 3;
      display: flex;
      flex-direction: row;
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

CardWrapper.Test = styled.div`
  ${breakpointsMedia({
    md: css`
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    `,
  })};
`;

export default CardWrapper;
