import React from 'react';
import PropTypes from '../../utils/PropTypes';

const propTypes = {
    className: PropTypes.string,
};

const defaultProps = {
    className: 'h-6 w-6',
};

const AngleDownIcon = ({ className }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
    >
        <path
            d="M16.58 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.58 8.59Z"
            fill="currentColor"
        />
    </svg>
);

AngleDownIcon.propTypes = propTypes;
AngleDownIcon.defaultProps = defaultProps;

export default React.memo(AngleDownIcon);
