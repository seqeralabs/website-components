import React from 'react';
import PropTypes from '../../utils/PropTypes';

const propTypes = {
    className: PropTypes.string,
};

const defaultProps = {
    className: null,
};

const CheckIcon = ({ className }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 14.17L2.83 10l-1.41 1.41L7 17 19 5l-1.41-1.42L7 14.17z"
            fill="currentColor"
        />
    </svg>
);

CheckIcon.propTypes = propTypes;
CheckIcon.defaultProps = defaultProps;

export default React.memo(CheckIcon);
