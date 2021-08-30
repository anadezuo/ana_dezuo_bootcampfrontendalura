import React from 'react';
import Head from '../src/core/Head/AppHead';
import SEO from '../src/core/Head/SEO';
import { ThemeProviderCustomized } from '../src/hooks/useTheme';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <ThemeProviderCustomized>
      <Head />
      <SEO headTitle="Home" />
      <Component
        /* eslint-disable-next-line react/jsx-props-no-spreading */
        {...pageProps}
      />
    </ThemeProviderCustomized>
  );
}
