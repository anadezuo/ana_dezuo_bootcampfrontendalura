import React from 'react';
import Head from 'next/head';

export default function AppHead() {
  return (
    <Head>
      <title>Portfolio Ana Dezuó</title>
      <meta name="title" content="Portfolio Ana Paula Dezuó" />

      <meta
        name="description"
        content="Aqui você encontra alguns dos meus projetos"
      />
      <meta name="theme-color" content="#ffffff" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://ana-portfolio.vercel.app/"
      />
      <meta property="og:title" content="Portfolio Ana Paula Dezuó" />
      <meta
        property="og:description"
        content="Aqui você encontra alguns dos meus projetos"
      />
      <meta
        property="og:image"
        content="https://ana-portfolio.vercel.app/images/projetos/overview.png"
      />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://ana-portfolio.vercel.app/"
      />
      <meta property="twitter:title" content="Portfolio Ana Paula Dezuó" />
      <meta
        property="twitter:description"
        content="Aqui você encontra alguns dos meus projetos"
      />
      <meta
        property="twitter:image"
        content="https://ana-portfolio.vercel.app/images/instalura-capa.png"
      />

      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon/favicon-16x16.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/favicon/apple-touch-icon.png"
      />

      {/* Fontes */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
        rel="stylesheet"
      />
      <link href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap" rel="stylesheet" />

    </Head>
  );
}
