import websitePageHOC from '../src/components/wrappers/WebsitePageWrapper/hoc';
import NotFoundScreen from '../src/components/screens/NotFoundScreen';

export default websitePageHOC(NotFoundScreen, {
  pageWrapperProps: {
    seoProps: { headTitle: 'Página não existente' },
  },
});
