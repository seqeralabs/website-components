import React from 'react';
import PropTypes from '../../utils/PropTypes';

const propTypes = {
    className: PropTypes.string,
};

const defaultProps = {
    className: null,
};

const ArrowRightIcon = ({ className }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
            fill="currentColor"
        />
    </svg>
);

ArrowRightIcon.propTypes = propTypes;
ArrowRightIcon.defaultProps = defaultProps;

export default React.memo(ArrowRightIcon);
