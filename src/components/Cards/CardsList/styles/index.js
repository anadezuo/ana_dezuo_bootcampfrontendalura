import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

const CardListWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 60px;
  justify-content: center;
  align-items: center;
  margin: 20px auto;

  ${breakpointsMedia({
    md: css`
      grid-template-columns: 300px 300px;
    `,
    lg: css`
      grid-template-columns: 350px 350px 350px;
    `,
  })};
`;

CardListWrapper.ProjectList = styled.div`
  order: 2;
`;

CardListWrapper.ProjectMain = styled.div`
  order: 1;
  ${breakpointsMedia({
    md: css`
      grid-column: 1 / span 2;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    `,
    lg: css`
      grid-column: 1 / span 3;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    `,
  })}
`;

export default CardListWrapper;
