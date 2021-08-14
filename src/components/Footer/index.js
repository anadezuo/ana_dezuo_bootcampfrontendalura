import React from 'react';
import styled from 'styled-components';
import Text from '../foundation/Text';

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background.contrast.color};
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Text
        tag="p"
        variant="smallestException"
        margin="25px"
        color="primary.contrast"
      >
        © 2021 Ana Paula Dezuó
      </Text>
    </FooterWrapper>
  );
}
