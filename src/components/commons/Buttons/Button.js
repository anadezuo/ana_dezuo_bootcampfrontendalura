import styled, { css } from 'styled-components';
import get from 'lodash/get';
import TextStyleVariantsMap from '../../../UI/TextStyleVariantsMap';
import propToStyle from '../../../theme/utils/propToStyle';

const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;

  background-color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
  color: ${(props) => get(props.theme, `colors.${props.color}.color`)};
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};

  ${TextStyleVariantsMap({ xs: 'smallestException' })};

  ${propToStyle('margin')};
  ${propToStyle('marginTop')};
  ${propToStyle('display')};
  ${propToStyle('padding')};
  
  &:disabled {
    cursor: not-allowed;
    opacity: .2;
  }

  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `};

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

export default Button;
