import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import propToStyle from '../../../theme/utils/propToStyle';
import TextStyleVariantsMap from '../../../UI/TextStyleVariantsMap';
import Link from '../../commons/Link';

function hasColor(props) {
  if (props.color !== undefined) {
    return css`
      color: ${() => get(props.theme, `colors.${props.color}.color`)};
    `;
  }
  return '';
}

function hasFontFamily(props) {
  if (props.fontFamily !== undefined) {
    return css`
      font-family: ${() => get(props.theme, props.fontFamily)};
    `;
  }
  return '';
}

const TextBase = styled.span`
  ${(props) => TextStyleVariantsMap(props.variant)};
  ${propToStyle('textAlign')};
  ${propToStyle('margin')};
  ${propToStyle('marginTop')};
  ${propToStyle('marginBottom')};
  ${propToStyle('marginRight')};
  ${propToStyle('marginLeft')};
  ${(props) => hasColor(props)};
  ${(props) => hasFontFamily(props)};
`;

export default function Text({
  tag, variant, children, href, ...props
}) {
  return (
    <TextBase
      as={href ? Link : tag}
      href={href}
      variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
  children: PropTypes.node,
  href: PropTypes.string,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph',
  children: null,
  href: '',
};
