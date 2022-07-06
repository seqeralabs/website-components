import React from 'react';
import PropTypes from '../../utils/PropTypes';

const propTypes = {
    className: PropTypes.string,
};

const defaultProps = {
    className: 'h-6 w-6',
};

const MenuIcon = ({ className }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"
            fill="currentColor"
        />
    </svg>
);

MenuIcon.propTypes = propTypes;
MenuIcon.defaultProps = defaultProps;

export default React.memo(MenuIcon);
