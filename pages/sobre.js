import React from 'react';
import websitePageHOC from '../src/components/wrappers/WebsitePageWrapper/hoc';
import AboutScreen from '../src/components/screens/AboutScreen';

function AboutPage() {
  return <AboutScreen />;
}

export default websitePageHOC(AboutPage, {
  pageWrapperProps: {
    seoProps: { headTitle: 'Sobre' },
  },
});
