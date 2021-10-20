const colorsTheme = {
  theme: {
    primary: {
      color: '#69D1D1',
    },
    secondary: {
      color: '#FFDFCC',
    },
    colorTransparency: {
      primary: {
        color: 'rgba(105, 209, 209, 0.3)',
      },
      secondary: {
        color: 'rgba(255, 223, 204, 0.3)',
      },
    },
  },
};

const colorsStatus = {
  error: {
    main: {
      color: '#dc3545',
      contrastText: '#fff',
    },
  },
  success: {
    main: {
      color: '#28a745',
      contrastText: '#fff',
    },
  },
};

export const colorsLight = {
  background: {
    main: {
      color: '#FFF',
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
  modal: {
    main: {
      color: 'rgba(0, 0, 0, 0.1)',
    },
  },
  colorTransparency: {
    main: {
      color: 'rgba(255, 255, 255, 0.8)',
    },
  },
  ...colorsTheme,
  ...colorsStatus,
};

export const colorsDark = {
  background: {
    main: {
      color: '#212121',
    },
    contrast: {
      color: '#FFF',
    },
  },
  primary: {
    main: {
      color: '#F2F2F2',
    },
    contrast: {
      color: '#212121',
    },
  },
  modal: {
    main: {
      color: 'rgba(255, 255, 255, 0.1)',
    },
  },
  colorTransparency: {
    main: {
      color: 'rgba(21, 21, 21, 0.8)',
    },
  },
  ...colorsTheme,
  ...colorsStatus,
};
