import styled from 'styled-components';

const CapaWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

CapaWrapper.Icons = styled.div`
  display: flex;
  flex-direction: row;
  
  a {
    margin: 8px;
  }
`;

export default CapaWrapper;
