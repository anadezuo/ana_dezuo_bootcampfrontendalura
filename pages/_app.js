/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Head from '../src/core/Head/AppHead';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Component
        {...pageProps}
      />
    </>
  );
}
