import styled from 'styled-components';
import propToStyle from '../../../../theme/utils/propToStyle';

const Box = styled.div`
  ${propToStyle('flex')};
  ${propToStyle('display')};
  ${propToStyle('flexDirection')};
  ${propToStyle('justifyContent')};
  ${propToStyle('flexWrap')};
  ${propToStyle('backgroundColor')};
  ${propToStyle('backgroundImage')};
  ${propToStyle('backgroundRepeat')};
  ${propToStyle('backgroundPosition')};
  ${propToStyle('width')};
  ${propToStyle('height')};
  ${propToStyle('alignItems')};
  ${propToStyle('margin')};
  ${propToStyle('marginTop')};
  ${propToStyle('marginLeft')};
  ${propToStyle('marginRight')};
  ${propToStyle('marginBottom')};
  `;

export default Box;
