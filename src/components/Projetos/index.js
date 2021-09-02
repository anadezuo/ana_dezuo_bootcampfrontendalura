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
      margin: 35px 0;
    `,
    md: css`
      flex-wrap: wrap;
      margin: 45px 0;
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
