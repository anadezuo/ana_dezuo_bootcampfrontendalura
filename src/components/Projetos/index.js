import React from 'react';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../theme/utils/breakpointsMedia';
import SectionTitle from '../SectionTitle';
import CardsList from '../Cards/CardsList';
import ButtonFormContactWrapper from '../wrappers/ButtonFormContactWrapper';

const WrapperProjetos = styled.article`
  display: flex;
  flex-flow: column wrap;
  align-items: center;

  ${breakpointsMedia({
    xs: css`
      margin-top: 60px;
    `,
    md: css`
      flex-wrap: wrap;
      margin-top: 80px;
    `,
  })}
`;

export default function Projetos() {
  return (
    <WrapperProjetos>
      <SectionTitle />
      <CardsList />
      <ButtonFormContactWrapper />
    </WrapperProjetos>
  );
}
