import React from 'react';
import PropTypes from '../../utils/PropTypes';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: 'h-6 w-6',
};

const ChatIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    fill="none"
    className={className}
  >
    <path d="M14.8467 27.5064C14.8467 20.6448 21.2367 15.0614 29.09 15.0614C30.5667 15.0614 31.99 15.2598 33.33 15.6248C33.295 7.5681 25.395 1.75977 16.6667 1.75977C7.865 1.75977 0 7.6381 0 15.6798C0 18.5298 1.025 21.3314 2.84167 23.5048C2.92 26.0498 1.42333 29.7014 0.0733333 32.3598C3.68667 31.7081 8.82667 30.2631 11.155 28.8348C12.4933 29.1614 13.7817 29.3414 15.035 29.4398C14.9233 28.8081 14.8467 28.1648 14.8467 27.5064Z" fill="#8390EF"/>
    <path d="M18.18 27.5067C18.18 33.0167 24.3017 38.1634 32.6983 36.1184C34.2217 37.0534 37.5867 37.9984 39.9517 38.4267C39.0683 36.6867 38.09 34.295 38.1383 32.6284C39.3283 31.2067 40 29.3734 40 27.5067C40 22.2434 34.8517 18.395 29.09 18.395C23.3633 18.395 18.18 22.215 18.18 27.5067Z" fill="#4256E7"/>
  </svg>
);

ChatIcon.propTypes = propTypes;
ChatIcon.defaultProps = defaultProps;

export default React.memo(ChatIcon);
