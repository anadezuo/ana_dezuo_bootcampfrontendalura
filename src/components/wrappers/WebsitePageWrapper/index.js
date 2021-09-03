/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../foundation/layout/Box';
import SEO from '../../../core/Head/SEO';
import Footer from '../../Footer';
import Cabecalho from '../../Cabecalho';

export default function WebsitePageWrapper({ children, seoProps }) {
  return (
    <>
      <SEO {...seoProps} />
      <Box display="flex" flexDirection="column" flex="1">
        <Cabecalho />
        {children}
        <Footer />
      </Box>
    </>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};
