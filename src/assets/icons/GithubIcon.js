import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
export default function GithubIcon({ color, colorContrast }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
        fill={color}
      />
      <path
        d="M15.9999 5.86871C10.4062 5.86871 5.86865 10.4062 5.86865 16C5.86865 20.4062 8.68115 24.15 12.6062 25.55C12.6249 25.5562 12.6937 25.5812 12.7124 25.5875C12.7687 25.6062 12.8312 25.6187 12.8937 25.6187C13.2249 25.6187 13.4874 25.35 13.4874 25.025C13.4874 25.0062 13.4874 24.9937 13.4874 24.975C13.4874 24.4375 13.4874 23.7562 13.4874 23.2125C12.8437 23.3437 11.8687 23.4687 11.3374 23.2125C10.6499 22.8812 10.2999 22.4562 9.96865 21.6187C9.55615 20.6 8.60615 20.3187 8.56865 20.1437C8.53115 19.9625 9.5749 19.6937 10.1124 20.3125C10.6499 20.9312 11.1937 22.1687 12.3499 22.05C12.9187 21.9937 13.2874 21.9 13.5187 21.8312C13.5624 21.4312 13.6937 20.9375 14.0249 20.5875C11.3062 20.1375 9.49365 18.675 9.49365 15.8062C9.49365 14.5 9.86865 13.4875 10.5312 12.7312C10.4187 12.1062 10.2312 10.6562 10.7312 10.15C10.7312 10.15 11.4374 9.71246 13.4624 11.1375C14.2187 10.9625 15.0562 10.875 15.9499 10.875C15.9687 10.875 15.9812 10.875 15.9999 10.875C16.0187 10.875 16.0312 10.875 16.0499 10.875C16.9499 10.8812 17.7874 10.9687 18.5374 11.1375C20.5624 9.71246 21.2687 10.15 21.2687 10.15C21.7687 10.6625 21.5812 12.1125 21.4687 12.7312C22.1312 13.4937 22.5062 14.5062 22.5062 15.8062C22.5062 18.675 20.6999 20.1375 17.9749 20.5875C18.4937 21.1312 18.5124 22.0125 18.5124 22.375C18.5124 22.7187 18.5124 25.0187 18.5124 25.0312C18.5124 25.3625 18.7812 25.625 19.1062 25.625C19.1562 25.625 19.1999 25.6187 19.2499 25.6062C19.2624 25.6062 19.2999 25.5937 19.3124 25.5875C23.2812 24.2125 26.1312 20.4437 26.1312 16.0062C26.1312 10.4 21.5937 5.86871 15.9999 5.86871Z"
        fill={colorContrast}
      />
    </svg>
  );
}

GithubIcon.propTypes = {
  color: PropTypes.string.isRequired,
  colorContrast: PropTypes.string.isRequired,
};

GithubIcon.defaultProps = {
};