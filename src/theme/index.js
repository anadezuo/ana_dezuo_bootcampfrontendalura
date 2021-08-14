import { colorsLight, colorsDark } from '../UI/colorsVariants';
import typographyVariants from '../UI/typographyVariants';
import breakpoints from '../UI/breakpoints';

const fontFamilyTitle = "'Sacramento', sans-serif";
const fontFamily = "'Roboto Condensed', sans-serif";
const fontFamilySmallException = "'Roboto', sans-serif";
const transition = '200ms ease-in-out';

const styles = {
  typographyVariants,
  breakpoints,
  fontFamily,
  fontFamilySmallException,
  fontFamilyTitle,
  transition,
};

export const ThemeLight = {
  colors: colorsLight,
  typeDark: false,
  ...styles,
};

export const ThemeDark = {
  colors: colorsDark,
  typeDark: true,
  ...styles,
};
