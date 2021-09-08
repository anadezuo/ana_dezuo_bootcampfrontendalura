/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Box from '../../foundation/layout/Box';
import SEO from '../../../core/Head/SEO';
import Footer from '../../Footer';
import Cabecalho from '../../Cabecalho';

export default function WebsitePageWrapper({
  children,
  seoProps,
  footerProps,
}) {
  return (
    <>
      <SEO {...seoProps} />
      <Box display="flex" flexDirection="column" flex="1">
        <Cabecalho />
        {children}
        {footerProps.display && <Footer />}
      </Box>
    </>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  footerProps: {
    display: true,
  },
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  footerProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  children: PropTypes.node.isRequired,
};
