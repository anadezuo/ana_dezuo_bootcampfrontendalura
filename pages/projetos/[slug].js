import React from 'react';
import websitePageHOC from '../../src/components/wrappers/WebsitePageWrapper/hoc';
import ProjectScreen from '../../src/components/screens/ProjectScreen';

function ProjectInternalPage({ project }) {
  return <ProjectScreen project={project} />;
}

ProjectInternalPage.propTypes = ProjectScreen.propTypes;

export default websitePageHOC(ProjectInternalPage);

export async function getStaticProps({ params }) {
  const repositores = await fetch(
    'https://api.github.com/users/anadezuo/repos',
  ).then(async (respostaDoServer) => {
    const resposta = await respostaDoServer.json();
    return resposta;
  });

  if (repositores.length === 0) return {};

  repositores.sort((f, s) => s.stargazers_count - f.stargazers_count);
  repositores[0].isProjectMain = true; // projeto com mais estrelas

  const foundProject = repositores.find(
    (repo) => !repo.private && params.slug === repo.name,
  );

  const project = {
    name: foundProject.name,
    slug: foundProject.name,
    description: foundProject.description,
    htmlUrl: foundProject.html_url,
    starsCount: foundProject.stargazers_count,
    language: foundProject.language,
    homepage: foundProject.homepage,
    isProjectMain: foundProject.isProjectMain || false,
    imageUrl:
      'https://ana-dezuo-bootcamp-frontend-alura.vercel.app/images/projetos/alurakut.png',
  };

  return {
    props: {
      project,
      pageWrapperProps: {
        seoProps: {
          headTitle: project.name,
        },
      },
    },
  };
}

export async function getStaticPaths() {
  const repositores = await fetch(
    'https://api.github.com/users/anadezuo/repos',
  ).then(async (respostaDoServer) => {
    const resposta = await respostaDoServer.json();
    return resposta;
  });

  // console.log(repositores);

  const paths = repositores.map((repo) => {
    const param = { params: { slug: repo.name } };
    return param;
  });
  // console.log(paths);

  return {
    paths,
    fallback: false,
  };
}
