import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius};

  ${breakpointsMedia({
    xs: css`
      border: 1px solid ${({ theme }) => theme.colors.secondary.main.color};
    `,
    md: css`
      background-color: ${({ theme }) => theme.colors.theme.main.color};
      border: none;
      margin-top: 30px;
      position: relative;

      &:hover img {
        opacity: 0.2;
      }

      &:hover a {
        opacity: 1;
      }
    `,
  })};
`;

CardWrapper.Title = styled.div`
  ${breakpointsMedia({
    xs: css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: ${({ theme }) => theme.colors.background.main.color};
      width: 100%;
      margin: 20px 0;

      a{
        text-align: center;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.primary.main.color};
      }

    `,
    md: css`
      transition: .5s ease;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -80%);
      background-color: transparent;

      a{
        text-align: center;
        text-decoration: none;
        opacity: 0;
      }

      &:hover {
        color: ${({ theme }) => theme.colors.theme.main.color};
      }
    }
    `,
  })};
`;

CardWrapper.Image = styled.img`
  height: 177px;
  width: auto;

  ${breakpointsMedia({
    md: css`
      height: 200px;
      width: 300px;
      object-fit: cover;
      transition: transform 0.2s;
      backface-visibility: hidden;
      border-radius: ${({ theme }) => theme.borderRadius};
    `,
    lg: css`
      height: 230px;
      width: 350px;
      object-fit: cover;
      transition: 0.5s ease;
      backface-visibility: hidden;
      border-radius: ${({ theme }) => theme.borderRadius};
    `,
  })};
`;

export default CardWrapper;
