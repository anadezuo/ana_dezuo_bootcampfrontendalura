import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.main.color};

  ${breakpointsMedia({
    xs: css`
      border: 1px solid ${({ theme }) => theme.colors.secondary.main.color};
      p {
        display: none;
      }
    `,
    md: css`
      border: none;
      margin-top: 30px;
      p {
        display: flex;
      }
    `,
  })};

  a {
    text-align: center;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.main.color};

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.theme.main.color};
    }
  }
`;

CardWrapper.Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background.main.color};
  width: 100%;
  margin: 20px 0;
`;

export default CardWrapper;
