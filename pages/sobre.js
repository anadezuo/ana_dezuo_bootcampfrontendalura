import React from 'react';
import websitePageHOC from '../src/components/wrappers/WebsitePageWrapper/hoc';
import SobreScreen from '../src/components/screens/SobreScreen';

function SobrePage() {
  return <SobreScreen />;
}

export default websitePageHOC(SobrePage, {
  pageWrapperProps: {
    seoProps: { headTitle: 'Sobre' },
  },
});
