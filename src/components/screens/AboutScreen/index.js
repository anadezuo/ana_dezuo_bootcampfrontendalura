import React, { useContext } from 'react';
import styled, { css, ThemeContext } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import Text from '../../foundation/Text';
import LinkdienIcon from '../../../assets/icons/LinkedienIcon';
import GithubIcon from '../../../assets/icons/GithubIcon';

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  width: 100%;
  height: 100%;

  ${breakpointsMedia({
    md: css`
      display: flex;
      flex-direction: row;
    `,
  })}
`;

AboutWrapper.Image = styled.div`
  img {
    border-radius: 25%;
    margin: 10px;
    height: 115px;
    width: 115px;
    padding: 10px;
    border: 5px solid
      ${({ theme }) => theme.colors.theme.colorTransparency.main.color};

    ${breakpointsMedia({
    md: css`
        margin: 100px;
        height: 270px;
        width: 270px;
      `,
  })}
  }
`;

AboutWrapper.Text = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  width: auto;

  ${breakpointsMedia({
    md: css`
      width: 600px;
    `,
  })}
`;

AboutWrapper.Icon = styled.div`
  display: flex;
  flex-direction: row;

  a {
    margin: 10px;
  }
`;

export default function AboutScreen() {
  const themeContext = useContext(ThemeContext);
  const { color } = themeContext.colors.primary.main;
  return (
    <AboutWrapper>
      <AboutWrapper.Image>
        <img
          src="https://avatars.githubusercontent.com/u/43011663?v=4"
          alt="Foto de Ana Paula Dezuó"
        />
      </AboutWrapper.Image>

      <AboutWrapper.Text>
        <Text
          tag="h2"
          variant={{ xs: 'title2XS', md: 'title2' }}
          color="primary.main"
          marginBottom="20px"
        >
          Oi! Eu sou a Ana...
        </Text>

        <Text
          tag="h2"
          variant={{ xs: 'paragraphXSLight', md: 'paragraphLight' }}
          color="primary.main"
        >
          O mundo da tecnologia sempre me fascinou e encantou, com aquele ar de
          mistério de como tudo funcionava, e foi que me formei em análise e
          desenvolvimento de sistemas pela Fatec Dom Amary Castanho - Itu, e
          desde 2013 atuando como desenvolvedora de software no mercado.
          <br />
          <br />
          Durante minha trajetória, está como maior parte a manutenção de um ERP,
          projetos de performance em bancos relacionais e NoSQL, e um aplicativo
          de captura de pedidos realizado em Flutter.
          <br />
          <br />
          Atualmente sou uma desenvolvedora Front-End, conhecendo um pouco mais
          sobre o ReactJs, através de estudo realizados por conta própria, uma
          formação em React, e ainda em execução o Bootcamp Front-End Avançado
          da Alura.
          <br />
          <br />
          Contatos:
        </Text>

        <AboutWrapper.Icon>
          <a
            href="https://www.linkedin.com/in/anadezuo/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkdienIcon color={color} />
          </a>

          <a
            href="https://github.com/anadezuo"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon color={color} />
          </a>
        </AboutWrapper.Icon>
      </AboutWrapper.Text>
    </AboutWrapper>
  );
}
