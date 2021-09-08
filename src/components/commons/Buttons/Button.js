import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Link from '../Link';
import TextStyleVariantsMap from '../../../UI/TextStyleVariantsMap';
import propToStyle from '../../../theme/utils/propToStyle';

const ButtonBase = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  text-decoration: none;

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
    opacity: 0.2;
  }

  ${({ fullWidth }) => fullWidth
    && css`
      width: 100%;
    `};

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

export default function Button({ href, children, ...props }) {
  const tag = href ? Link : 'button';

  return (
    <ButtonBase
      as={tag}
      href={href}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </ButtonBase>
  );
}

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  href: undefined,
};
