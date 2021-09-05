import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

const CardListWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr, 1fr;
  grid-gap: 32px;
  justify-content: center;
  align-items: center;
  margin: 50px auto;

  ${breakpointsMedia({
    md: css`
      grid-template-columns: 400px 400px;
      grid-gap: 50px;
      max-width: 900px;
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
  })}
`;

export default CardListWrapper;
