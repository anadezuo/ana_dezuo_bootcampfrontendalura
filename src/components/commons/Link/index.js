import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled.a`
  color: inherit;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
`;

export default function Link({ children, href, ...props }) {
  return (
    <NextLink href={href} passHref>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <StyledLink {...props} passHref>
        {children}
      </StyledLink>
    </NextLink>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
