import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.main.color};
  border: 1px solid ${({ theme }) => theme.colors.secondary.main.color};
  
  ${breakpointsMedia({
    md: css`
      margin-top: 32px;
      width: 250px;
    `,
  })};

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.main.color};

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.theme.main.color};
    }
  }
`;

CardWrapper.Text = styled.div`
  background-color: ${({ theme }) => theme.colors.background.main.color};
  width: 100%;
`;

export default CardWrapper;
