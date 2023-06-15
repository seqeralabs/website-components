import React from 'react';
import PropTypes from '../../utils/PropTypes';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: 'h-6 w-6',
};

const EmailIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    fill="none"
    className={className}
  >
    <path d="M20 25.6917L0 9.4834V35.2134H40V9.4834L20 25.6917Z" fill="#8390EF"/>
    <path d="M0.0249939 5.21338L20 21.4017L39.975 5.21338H0.0249939Z" fill="#4256E7"/>
  </svg>
);

EmailIcon.propTypes = propTypes;
EmailIcon.defaultProps = defaultProps;

export default React.memo(EmailIcon);
