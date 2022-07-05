import React from 'react';
import PropTypes from '../../utils/PropTypes';

const propTypes = {
    className: PropTypes.string,
};

const defaultProps = {
    className: 'h-6 w-6',
};

const AngleLeftIcon = ({ className }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
    >
        <path
            d="M15.91 17.5683L11.33 12.9883L15.91 8.39828L14.5 6.98828L8.5 12.9883L14.5 18.9883L15.91 17.5683Z"
            fill="currentColor"
        />
    </svg>
);

AngleLeftIcon.propTypes = propTypes;
AngleLeftIcon.defaultProps = defaultProps;

export default React.memo(AngleLeftIcon);
