import React from 'react';
import Text from '../foundation/Text';

export default function SectionTitle() {
  return (
    <Text
      tag="h3"
      variant={{ xs: 'title2XS', md: 'title2' }}
      textAlign="center"
      color="primary.main"
      marginTop="30px"
    >
      Projetos
    </Text>
  );
}
