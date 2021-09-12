import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

export const ProjectWrapper = styled.article`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  width: 100%;
  height: 100%;
  a {
    text-align: center;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.main.color};

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.theme.primary.color};
    }
  }
`;

ProjectWrapper.Project = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;

  ${breakpointsMedia({
    md: css`
      display: flex;
      flex-direction: row;
      flex: 1;
    `,
  })}
`;

export const Tag = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 5px;

  padding: 10px;
  color: ${({ theme }) => theme.colors.primary.main.color};
  background-color: ${({ theme }) => theme.colors.theme.primary.color};
  border-radius: ${({ theme }) => theme.borderRadiusTag};
`;

export const ImageDestaque = styled.img`
  justify-content: center;
  height: 200px;
  width: auto;
  object-fit: cover;

  padding: 15px;
  border: 5px solid
    ${({ theme }) => theme.colors.theme.colorTransparency.primary.color};

  ${breakpointsMedia({
    md: css`
      height: 300px;
      width: auto;
    `,
  })};
`;
