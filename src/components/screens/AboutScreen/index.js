import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import Text from '../../foundation/Text';
import LinkdienIcon from '../../../assets/icons/LinkedienIcon';
import GithubIcon from '../../../assets/icons/GithubIcon';
import ButtonFormContactWrapper from '../../wrappers/ButtonFormContactWrapper';
import AboutWrapper from './styles';
import Box from '../../foundation/layout/Box';

export default function AboutScreen({ messages }) {
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
            {messages.pageAbout.title}
          </Text>

          <Text
            tag="p"
            variant={{ xs: 'paragraphXSLight', md: 'paragraphLight' }}
            color="primary.main"
          >
            <Box
              dangerouslySetInnerHTML={{
                __html: messages.pageAbout.description,
              }}
            />
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

AboutScreen.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  messages: PropTypes.object.isRequired,
};