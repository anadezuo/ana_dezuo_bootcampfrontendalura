import React from 'react';
import Card from '../Card';
import CardMain from '../CardMain';
import CardListWrapper from './styles';

export default function CardsList() {
  const projects = [
    {
      title: 'Projeto A',
      main: false,
      imageUrl: 'https://ana-dezuo-bootcamp-frontend-alura.vercel.app/images/projetos/projeto_1.png',
      text: '',
      link: 'https://www.google.com.br/',
    },
    {
      title: 'Projeto M',
      main: false,
      imageUrl: 'https://ana-dezuo-bootcamp-frontend-alura.vercel.app/images/projetos/projeto_2.png',
      text: '',
      link: 'https://www.google.com.br/',
    },
    {
      title: 'Alurakut',
      main: true,
      imageUrl: 'https://ana-dezuo-bootcamp-frontend-alura.vercel.app/images/projetos/alurakut.png',
      text: 'Venha rever essa rede social tão nostálgica que você viveu na infância.',
      link: 'https://alurakut-anadezuo.vercel.app/login',
    },
    {
      title: 'Projeto Y',
      main: false,
      imageUrl: 'https://ana-dezuo-bootcamp-frontend-alura.vercel.app/images/projetos/projeto_3.png',
      text: '',
      link: 'https://www.google.com.br/',
    },
  ];

  return (
    <CardListWrapper>
      {projects.map((project) => (project.main ? (
        <CardListWrapper.ProjectMain key={project.imageUrl}>
          <CardMain
            title={project.title}
            imageUrl={project.imageUrl}
            link={project.link}
            text={project.text}
          />
        </CardListWrapper.ProjectMain>
      ) : (
        <CardListWrapper.ProjectList key={project.imageUrl}>
          <Card
            title={project.title}
            imageUrl={project.imageUrl}
            link={project.link}
          />

        </CardListWrapper.ProjectList>
      )))}
    </CardListWrapper>
  );
}
