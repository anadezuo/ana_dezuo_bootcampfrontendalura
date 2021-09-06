import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
import { ProjectWrapper, Tag, ImageDestaque } from './styles';
import StarIcon from '../../../assets/icons/StarIcon';

export default function ProjectScreen({ project }) {
  const themeContext = useContext(ThemeContext);
  const { color } = themeContext.colors.primary.main;

  return (
    <ProjectWrapper>
      <Text
        tag="h1"
        variant={{ xs: 'title2XS', md: 'title2' }}
        color="primary.main"
      >
        {`Projeto ${project.name} `}
      </Text>
      <ProjectWrapper.Project>
        <ImageDestaque src={project.imageUrl} isProjectMain alt={`Imagem do projeto ${project.name}`} />

        <Grid.Col
          value={{ md: 6 }}
          display="flex"
          flexDirection="column"
          flex="1"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Text
            tag="p"
            variant={{ xs: 'paragraphXS', md: 'paragraph' }}
            color="primary.main"
            marginBottom={{ xs: '10px', md: '20px' }}
          >
            {project.description}
          </Text>

          <Text
            tag="p"
            variant={{ xs: 'paragraphXSBold', md: 'paragraphBold' }}
            color="primary.main"
          >
            Visite o site em
          </Text>
          <Text
            href={project.homepage}
            variant={{ xs: 'paragraphXS', md: 'paragraph' }}
            color="primary.main"
            marginBottom={{ xs: '10px', md: '20px' }}
          >
            {project.homepage}
          </Text>

          <Text
            tag="p"
            variant={{ xs: 'paragraphXSBold', md: 'paragraphBold' }}
            color="primary.main"
          >
            Código fonte
          </Text>
          <Text
            href={project.htmlUrl}
            variant={{ xs: 'paragraphXS', md: 'paragraph' }}
            color="primary.main"
            marginBottom={{ xs: '10px', md: '20px' }}
          >
            {project.htmlUrl}
          </Text>

          <Grid.Row
            alignItens="center"
            width="100%"
            margin="10px"
            justifyContent={{ xs: 'space-evenly', md: 'flex-end' }}
          >
            <Tag>
              <Text
                tag="p"
                variant={{ xs: 'paragraphXS', md: 'paragraph' }}
                color="primary.main"
              >
                {project.language || 'Sem linguagem'}
              </Text>
            </Tag>

            <Tag>
              <StarIcon color={color} />
              <Text
                tag="p"
                variant={{ xs: 'paragraphXS', md: 'paragraph' }}
                color="primary.main"
                textAlign="center"
                marginLeft="5px"
              >
                {project.starsCount}
              </Text>
            </Tag>
          </Grid.Row>
        </Grid.Col>
      </ProjectWrapper.Project>
    </ProjectWrapper>
  );
}

ProjectScreen.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    htmlUrl: PropTypes.string,
    starsCount: PropTypes.number,
    language: PropTypes.string,
    homepage: PropTypes.string,
    isProjectMain: PropTypes.bool,
    imageUrl: PropTypes.string,
  }),
};

ProjectScreen.defaultProps = {
  project: PropTypes.shape({
    name: 'Sem Nome',
    description: 'Projeto sem descrição',
    htmlUrl: 'https://github.com',
    starsCount: 0,
    language: 'Sem linguagem',
    homepage: 'https://github.com',
    isProjectMain: false,
    imageUrl: '',
  }),
};

/*

<Box
      display="flex"
      flexDirection="column"
      flex="1"
      justifyContent="center"
      alignItems="center"
      marginTop="50px"
      // width="100%"
      // height="100%"
    > */

// {`isProjectMain: ${project.isProjectMain} `}
