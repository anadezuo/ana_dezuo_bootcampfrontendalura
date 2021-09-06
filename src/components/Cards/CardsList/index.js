import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import CardMain from '../CardMain';
import CardListWrapper from './styles';

// muda para receber com provider
export default function CardsList({ repositores }) {
  return (
    <CardListWrapper>
      {repositores
        && repositores.map((repo) => (repo.isProjectMain ? (
          <CardListWrapper.ProjectMain key={repo.slug}>
            <CardMain
              title={repo.name}
              imageUrl={repo.imageUrl}
              slug={repo.slug}
              text={repo.description}
            />
          </CardListWrapper.ProjectMain>
        ) : (
          <CardListWrapper.ProjectList key={repo.slug}>
            <Card
              title={repo.name}
              description={repo.description}
              imageUrl={repo.imageUrl}
              slug={repo.slug}
            />
          </CardListWrapper.ProjectList>
        )))}
    </CardListWrapper>
  );
}

CardsList.propTypes = {
  repositores: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      slug: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string,
      starsCount: PropTypes.number,
      language: PropTypes.string,
      homepage: PropTypes.string,
      isProjectMain: PropTypes.bool,
    }),
  ).isRequired,
};
