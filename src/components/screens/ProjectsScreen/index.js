import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import CardsList from '../../Cards/CardsList';
import ButtonFormContactWrapper from '../../wrappers/ButtonFormContactWrapper';

const WrapperProjects = styled.article`
  display: flex;
  flex-flow: column wrap;
  align-items: center;

  ${breakpointsMedia({
    xs: css`
      margin: 35px 0;
    `,
    md: css`
      flex-wrap: wrap;
      margin: 45px 0;
    `,
  })}
`;

export default function ProjectsScreen({ repositores }) {
  return (
    <WrapperProjects>
      <CardsList repositores={repositores} />
      <ButtonFormContactWrapper />
    </WrapperProjects>
  );
}

ProjectsScreen.propTypes = {
  repositores: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      slug: PropTypes.string,
      description: PropTypes.string,
      htmlUrl: PropTypes.string,
      starsCount: PropTypes.number,
      language: PropTypes.string,
      homepage: PropTypes.string,
      isProjectMain: PropTypes.bool,
    }),
  ).isRequired,
};