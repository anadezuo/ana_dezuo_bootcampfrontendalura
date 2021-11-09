import React from 'react';

export const WebsitePageContext = React.createContext({
  getCMSContent: (cmsKey) => cmsKey,
});
