import websitePageHOC from '../src/components/wrappers/WebsitePageWrapper/hoc';
import SobreScreen from '../src/components/screens/SobreScreen';

export default websitePageHOC(SobreScreen, {
  pageWrapperProps: {
    seoProps: { headTitle: 'Sobre' },
  },
});
