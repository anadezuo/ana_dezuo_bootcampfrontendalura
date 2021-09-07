import React from 'react';
import styled from 'styled-components';
import Text from '../foundation/Text';

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.colorTransparency.contrast.color};
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Text
        tag="p"
        variant="smallestException"
        margin="15px"
        color="primary.contrast"
      >
        © Copyright 2021.
      </Text>
    </FooterWrapper>
  );
}
