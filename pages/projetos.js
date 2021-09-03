import React from 'react';
import websitePageHOC from '../src/components/wrappers/WebsitePageWrapper/hoc';
import Projetos from '../src/components/Projetos';

function ProjetosScreen() {
  return <Projetos />;
}

export default websitePageHOC(ProjetosScreen, {
  pageWrapperProps: {
    seoProps: { headTitle: 'Projetos' },
  },
});
