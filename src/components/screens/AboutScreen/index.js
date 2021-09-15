import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Text from '../../foundation/Text';
import LinkdienIcon from '../../../assets/icons/LinkedienIcon';
import GithubIcon from '../../../assets/icons/GithubIcon';
import ButtonFormContactWrapper from '../../wrappers/ButtonFormContactWrapper';
import AboutWrapper from './styles';
import Box from '../../foundation/layout/Box';

export default function AboutScreen() {
  const themeContext = useContext(ThemeContext);
  const { color } = themeContext.colors.primary.main;

  return (
    <AboutWrapper>
      <AboutWrapper.Information>
        <AboutWrapper.CubeUp />
        <AboutWrapper.Image>
          <img
            src="https://avatars.githubusercontent.com/u/43011663?v=4"
            alt="Foto de Ana Paula Dezuó"
          />
        </AboutWrapper.Image>
        <AboutWrapper.CubeDown />

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
            tag="p"
            variant={{ xs: 'paragraphXSLight', md: 'paragraphLight' }}
            color="primary.main"
          >
            O mundo da tecnologia sempre me fascinou e encantou, com aquele ar
            de mistério de como tudo funcionava, e foi que me formei em análise
            e desenvolvimento de sistemas pela Fatec Dom Amary Castanho - Itu, e
            desde 2013 atuando como desenvolvedora de software no mercado.
            <br />
            <br />
            Durante minha trajetória, está como maior parte a manutenção de um
            ERP, projetos de performance em bancos relacionais e NoSQL, e um
            aplicativo de captura de pedidos realizado em Flutter.
            <br />
            <br />
            Atualmente sou uma desenvolvedora Front-End, conhecendo um pouco
            mais sobre o ReactJs, através de estudo realizados por conta
            própria, uma formação em React, e ainda em execução o Bootcamp
            Front-End Avançado da Alura.
          </Text>
        </AboutWrapper.Text>
      </AboutWrapper.Information>

      <AboutWrapper.Contact>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          marginLeft="20px"
          marginRight="20px"
          height="100vh"
        >
          <Text
            tag="h2"
            variant={{ xs: 'title2XS', md: 'title2' }}
            color={themeContext.isDark ? 'primary.contrast' : 'primary.main'}
            marginTop="20px"
            marginBottom="20px"
          >
            Contatos
          </Text>
          <Text
            tag="p"
            variant={{ xs: 'paragraphXSLight', md: 'paragraphLight' }}
            color={themeContext.isDark ? 'primary.contrast' : 'primary.main'}
            textAlign={{ xs: 'center', md: 'left' }}
          >
            Gostaria de saber mais sobre mim ou meu sobre trabalho?
            <br />
            Ou você tem um projeto legal que você quer que eu participe?
            <br />
            Envie-me um e-mail ou entre em contato com os meios abaixo!
          </Text>

          <ButtonFormContactWrapper />
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
        </Box>
      </AboutWrapper.Contact>
    </AboutWrapper>
  );
}
