import React from 'react';
import PropTypes from '../../utils/PropTypes';

const propTypes = {
    className: PropTypes.string,
};

const defaultProps = {
    className: null,
};

const PlusIcon = ({ className }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.8.9c.6 0 1 .4 1 1v9h9a1 1 0 010 2h-9v8.9a1 1 0 01-2 0v-9h-9a1 1 0 010-2h9v-9c0-.5.5-1 1-1z"
            fill="currentColor"
        />
    </svg>
);

PlusIcon.propTypes = propTypes;
PlusIcon.defaultProps = defaultProps;

export default React.memo(PlusIcon);
