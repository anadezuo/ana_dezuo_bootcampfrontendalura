import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

AboutWrapper.Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  ${breakpointsMedia({
    md: css`
      display: flex;
      flex-direction: row;
      width: 100vw;
      height: 100vh;
    `,
  })}
`;

AboutWrapper.Contact = styled.div`
  background-color: ${({ theme }) => theme.colors.theme.secondary.color};
  width: 100vw;
  height: 100vh;
`;

AboutWrapper.Image = styled.div`
  z-index: 2;
  img {
    border-radius: 25%;
    margin: 10px;
    height: 115px;
    width: 115px;
    padding: 10px;
    border: 5px solid
      ${({ theme }) => theme.colors.theme.colorTransparency.primary.color};

    ${breakpointsMedia({
    md: css`
        margin: 100px;
        height: 270px;
        width: 270px;
        transform: translateX(-50px);
      `,
  })}
  }
`;

AboutWrapper.CubeUp = styled.div`
  z-index: 1;
  border: 3px solid
    ${({ theme }) => theme.colors.theme.colorTransparency.secondary.color};
  border-radius: 25%;
  padding: 10px;
  height: 50px;
  width: 50px;
  transform: translate(-60px, 40px);

  ${breakpointsMedia({
    md: css`
      padding: 10px;
      height: 100px;
      width: 100px;
      transform: translate(120px, -130px);
    `,
  })}
`;

AboutWrapper.CubeDown = styled.div`
  z-index: 1;
  border: 10px solid
    ${({ theme }) => theme.colors.theme.colorTransparency.secondary.color};
  border-radius: 25%;
  padding: 10px;
  height: 65px;
  width: 65px;
  transform: translate(60px, -50px);

  ${breakpointsMedia({
    md: css`
      padding: 10px;
      height: 120px;
      width: 120px;
      transform: translate(-210px, 130px);
    `,
  })}
`;

AboutWrapper.Text = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  width: auto;

  ${breakpointsMedia({
    md: css`
      width: 600px;
      transform: translateX(-110px);
    `,
  })}
`;

AboutWrapper.Icon = styled.div`
  display: flex;
  flex-direction: row;

  a {
    margin: 10px;
  }
`;

export default AboutWrapper;
