import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const CapaWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${breakpointsMedia({
    md: css`
      display: grid;
      grid-gap: 30px;
      justify-content: space-around;
      align-items: center;
      grid-template-columns: 1fr 1fr;
    `,
  })};
`;

CapaWrapper.Information = styled.div`
  order: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${breakpointsMedia({
    md: css`
      order: 1;
      margin-left: 50px;
    `,
  })};
`;

CapaWrapper.Image = styled.div`
  order: 1;
  ${breakpointsMedia({
    md: css`
      order: 2;
    `,
  })};
`;

export default CapaWrapper;
