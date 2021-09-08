import React from 'react';
import websitePageHOC from '../src/components/wrappers/WebsitePageWrapper/hoc';
import Box from '../src/components/foundation/layout/Box';
import Capa from '../src/components/Capa';

function HomeScreen() {
  return (
    <Box width="100%" height="100%">
      <Capa />
    </Box>
  );
}

export default websitePageHOC(HomeScreen, {
  pageWrapperProps: {
    seoProps: { headTitle: 'Home' },
    footerProps: {
      display: false,
    },
  },
});
