import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import CardsList from '../../Cards/CardsList';
import ButtonFormContactWrapper from '../../wrappers/ButtonFormContactWrapper';
import Text from '../../foundation/Text';

const WrapperProjects = styled.article`
  display: flex;
  flex-flow: column wrap;
  align-items: center;

  ${breakpointsMedia({
    xs: css`
      margin-top: 80px;
      margin-bottom: 20px;
    `,
    md: css`
      flex-wrap: wrap;
      margin-top: 100px;
      margin-bottom: 25px;
    `,
  })}
`;

export default function ProjectsScreen({ repositores }) {
  return (
    <WrapperProjects>
      <Text
        tag="h2"
        variant={{ xs: 'title2XS', md: 'title2' }}
        color="primary.main"
        marginBottom="20px"
      >
        Portfólio
      </Text>
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
