import { colorsLight, colorsDark } from '../UI/colorsVariants';
import typographyVariants from '../UI/typographyVariants';
import breakpoints from '../UI/breakpoints';

const fontFamilyException = "'Sacramento', sans-serif";
const fontFamily = "'Roboto Condensed', sans-serif";
const fontFamilySmallException = "'Roboto', sans-serif";
const transition = '200ms ease-in-out';
const borderRadius = '5px';

const styles = {
  typographyVariants,
  breakpoints,
  fontFamily,
  fontFamilySmallException,
  fontFamilyException,
  transition,
  borderRadius,
};

export const ThemeLight = {
  colors: colorsLight,
  isDark: false,
  ...styles,
};

export const ThemeDark = {
  colors: colorsDark,
  isDark: true,
  ...styles,
};
