import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/UI/GlobalStyles';
import { ThemeLight } from '../src/theme';
import Head from '../src/core/Head/AppHead';
import SEO from '../src/core/Head/SEO';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState(ThemeLight);
  const [isThemeDark, setIsThemeDark] = useState(false);

  return (
    <>
      <Head />
      <SEO headTitle="Home" />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component
          /* eslint-disable-next-line react/jsx-props-no-spreading */
          {...pageProps}
          theme={theme}
          setTheme={setTheme}
          isThemeDark={isThemeDark}
          setIsThemeDark={setIsThemeDark}
        />
      </ThemeProvider>
    </>
  );
}
