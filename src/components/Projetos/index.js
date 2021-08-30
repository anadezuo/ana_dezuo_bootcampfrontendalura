import React from 'react';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../theme/utils/breakpointsMedia';
import SectionTitle from '../SectionTitle';
import CardsList from '../Cards/CardsList';
import ButtonContatoModal from '../commons/Buttons/ButtonContatoModal';

const WrapperProjetos = styled.article`
  display: flex;
  flex-flow: column wrap;
  align-items: center;

  ${breakpointsMedia({
    md: css`
      flex-wrap: wrap;
    `,
  })}
`;

export default function Projetos() {
  return (
    <WrapperProjetos>
      <SectionTitle />
      <CardsList />
      <ButtonContatoModal />
    </WrapperProjetos>
  );
}
