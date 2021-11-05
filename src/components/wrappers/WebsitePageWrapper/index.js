/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import Box from '../../foundation/layout/Box';
import SEO from '../../../core/Head/SEO';
import Footer from '../../Footer';
import Cabecalho from '../../Cabecalho';
import { WebsitePageContext } from './context';

export { WebsitePageContext } from './context';
export default function WebsitePageWrapper({
  children,
  seoProps,
  footerProps,
  messages,
}) {
  return (
    <WebsitePageContext.Provider
      value={{
        getCMSContent: (cmsKey) => get(messages, cmsKey),
      }}
    >
      <SEO {...seoProps} />
      <Box display="flex" flexDirection="column" flex="1">
        <Cabecalho />
        {children}
        {footerProps.display && <Footer />}
      </Box>
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  footerProps: {
    display: true,
  },
  messages: {},
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  footerProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  messages: PropTypes.object,
};
