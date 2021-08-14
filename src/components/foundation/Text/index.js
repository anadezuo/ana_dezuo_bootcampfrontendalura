import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import propToStyle from '../../../theme/utils/propToStyle';
import TextStyleVariantsMap from '../../../UI/TextStyleVariantsMap';

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
  ${(props) => hasColor(props)};
  ${(props) => hasFontFamily(props)};
`;

export default function Text({
  tag, variant, children, ...props
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </TextBase>
  );
}

// TODO: como deixar os dois argumentos no propTypes
Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string || PropTypes.objectOf,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph' || {},
};
