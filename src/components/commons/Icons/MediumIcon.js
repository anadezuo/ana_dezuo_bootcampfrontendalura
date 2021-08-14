import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
export default function MediumIcon({ color, colorContrast }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.9999 29.7517C23.6753 29.7517 29.8975 23.5294 29.8975 15.8538C29.8975 8.17814 23.6753 1.95581 15.9999 1.95581C8.32446 1.95581 2.10229 8.17814 2.10229 15.8538C2.10229 23.5294 8.32446 29.7517 15.9999 29.7517Z"
        fill={colorContrast}
        stroke={color}
        strokeMiterlimit="10"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 16C32 7.16926 24.8309 0 16.0004 0C7.16907 0 0 7.16926 0 16C0 24.8307 7.16907 32 15.9996 32C24.8309 32 32 24.8307 32 16ZM17.6067 16C17.6067 19.9332 14.4397 23.1216 10.5338 23.1216C6.6278 23.1216 3.46082 19.9324 3.46082 16C3.46082 12.0676 6.62738 8.87839 10.5329 8.87839C14.4385 8.87839 17.6067 12.0672 17.6067 16ZM25.3655 16C25.3655 19.7025 23.7822 22.7049 21.8291 22.7049C19.8759 22.7049 18.2926 19.7025 18.2926 16C18.2926 12.2975 19.8759 9.29554 21.8291 9.29554C23.7822 9.29554 25.3655 12.2971 25.3655 16ZM28.5392 16C28.5392 19.3163 27.9824 22.0064 27.2953 22.0064C26.6082 22.0064 26.0518 19.3171 26.0518 16C26.0518 12.6829 26.6086 9.99399 27.2936 9.99399C27.9787 9.99399 28.5392 12.6829 28.5392 16Z"
        fill={color}
      />
    </svg>
  );
}

MediumIcon.propTypes = {
  color: PropTypes.string.isRequired,
  colorContrast: PropTypes.string.isRequired,
};

MediumIcon.defaultProps = {
};
