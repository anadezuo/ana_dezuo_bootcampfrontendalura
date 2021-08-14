import { css } from 'styled-components';
import get from 'lodash/get';
import breakpointsMedia from '../theme/utils/breakpointsMedia';

export default function TextStyleVariantsMap(propFont) {
  /* propFont -> {xs: "paragraphXS", md: "paragraph"} */

  return (props) => {
    if (typeof propFont === 'string') {
      return css`
        font-size: ${() => get(props.theme, `typographyVariants.${propFont}.fontSize`)};
        font-weight: ${() => get(props.theme, `typographyVariants.${propFont}.fontWeight`)};
        line-height: ${() => get(props.theme, `typographyVariants.${propFont}.lineHeight`)};
      `;
    }

    if (typeof propFont === 'object') {
      return breakpointsMedia({
        xs: {
          fontSize: () => get(props.theme, `typographyVariants.${propFont.xs}.fontSize`),
          fontWeight: () => get(props.theme, `typographyVariants.${propFont.xs}.fontWeight`),
          lineHeight: () => get(props.theme, `typographyVariants.${propFont.xs}.lineHeight`),
        },
        sm: {
          fontSize: () => get(props.theme, `typographyVariants.${propFont.sm}.fontSize`),
          fontWeight: () => get(props.theme, `typographyVariants.${propFont.sm}.fontWeight`),
          lineHeight: () => get(props.theme, `typographyVariants.${propFont.sm}.lineHeight`),
        },
        md: {
          fontSize: () => get(props.theme, `typographyVariants.${propFont.md}.fontSize`),
          fontWeight: () => get(props.theme, `typographyVariants.${propFont.md}.fontWeight`),
          lineHeight: () => get(props.theme, `typographyVariants.${propFont.md}.lineHeight`),
        },
        lg: {
          fontSize: () => get(props.theme, `typographyVariants.${propFont.lg}.fontSize`),
          fontWeight: () => get(props.theme, `typographyVariants.${propFont.lg}.fontWeight`),
          lineHeight: () => get(props.theme, `typographyVariants.${propFont.lg}.lineHeight`),
        },
        xl: {
          fontSize: () => get(props.theme, `typographyVariants.${propFont.xl}.fontSize`),
          fontWeight: () => get(props.theme, `typographyVariants.${propFont.xl}.fontWeight`),
          lineHeight: () => get(props.theme, `typographyVariants.${propFont.xl}.lineHeight`),
        },
      });
    }

    return '';
  };
}
