import websitePageHOC from '../src/components/wrappers/WebsitePageWrapper/hoc';
import ProjetoScreen from '../src/components/screens/ProjetoScreen';

export default websitePageHOC(ProjetoScreen, {
  pageWrapperProps: {
    seoProps: { headTitle: 'Projeto XX' },
  },
});
