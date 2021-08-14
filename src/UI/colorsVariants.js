const colorsTheme = {
  theme: {
    main: {
      color: '#fbc02d',
    },
    contrast: {
      color: '#000',
    },
  },
};

export const colorsLight = {
  background: {
    main: {
      color: '#fff',
    },
    contrast: {
      color: '#212121',
    },
  },
  primary: {
    main: {
      color: '#212121',
    },
    contrast: {
      color: '#F2F2F2',
    },
  },
  secondary: {
    main: {
      color: '#424242',
    },
  },
  ...colorsTheme,
};

export const colorsDark = {
  background: {
    main: {
      color: '#212121',
    },
    contrast: {
      color: '#000',
    },
  },
  primary: {
    main: {
      color: '#F2F2F2',
    },
    contrast: {
      color: '#F2F2F2',
    },
  },
  secondary: {
    main: {
      color: '#F2F2F2',
    },
  },
  ...colorsTheme,
};
