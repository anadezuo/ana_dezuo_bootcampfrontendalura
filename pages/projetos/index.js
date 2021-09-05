import React from 'react';
import websitePageHOC from '../../src/components/wrappers/WebsitePageWrapper/hoc';
import ProjectsScreen from '../../src/components/screens/ProjectsScreen';

function ProjectsPage({ repositores }) {
  return <ProjectsScreen repositores={repositores} />;
}

export default websitePageHOC(ProjectsPage, {
  pageWrapperProps: {
    seoProps: { headTitle: 'Projetos' },
  },
});

export async function getStaticProps() {
  const repositores = await fetch(
    'https://api.github.com/users/anadezuo/repos',
  ).then(async (res) => {
    const response = await res.json();

    if (response.length === 0) return {};

    response.sort((f, s) => s.stargazers_count - f.stargazers_count);

    const responseData = response.map((repo) => {
      if (!repo.private) {
        return {
          name: repo.name,
          slug: repo.name,
          description: repo.description,
          htmlUrl: repo.html_url,
          starsCount: repo.stargazers_count,
          language: repo.language,
          homepage: repo.homepage,
          isProjectMain: false,
          imageUrl:
            'https://ana-dezuo-bootcamp-frontend-alura.vercel.app/images/projetos/alurakut.png',
        };
      }
      return {};
    });

    responseData[0].isProjectMain = true;
    return responseData;
  });

  return {
    props: {
      repositores,
    },
  };
}

ProjectsPage.propTypes = ProjectsScreen.propTypes;
