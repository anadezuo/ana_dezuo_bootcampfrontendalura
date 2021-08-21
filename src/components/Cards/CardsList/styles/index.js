import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

const CardListWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 32px;
  justify-content: center;
  align-items: center;
  margin: 32px auto;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.main.color};
  }

  ${breakpointsMedia({
    md: css`
      grid-template-columns: 250px 250px 250px;
      grid-gap: 10px;
      max-width: 900px;
    `,
  })};
`;

CardListWrapper.ProjectList = styled.div`
  order: 2;
  ${breakpointsMedia({
    md: css`
      order: 1;
    `,
  })}
`;

CardListWrapper.ProjectMain = styled.div`
  order: 1;
  ${breakpointsMedia({
    md: css`
      order: 2;
      grid-column: 1 / span 3;
    `,
  })}
`;

export default CardListWrapper;
