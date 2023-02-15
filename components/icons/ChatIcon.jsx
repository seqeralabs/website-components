
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
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 56 56"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28 7C15.1667 7 4.66669 15.3533 4.66669 25.6667C4.78335 30.6833 7.14002 35.3967 11.0834 38.5C11.0834 39.9 10.1034 43.5633 4.66669 49C10.1967 48.7433 15.4934 46.6667 19.7634 43.1667C22.4234 43.9367 25.2234 44.3333 28 44.3333C40.8334 44.3333 51.3334 35.98 51.3334 25.6667C51.3334 15.3533 40.8334 7 28 7ZM28 39.6667C17.6867 39.6667 9.33335 33.39 9.33335 25.6667C9.33335 17.9433 17.6867 11.6667 28 11.6667C38.3134 11.6667 46.6667 17.9433 46.6667 25.6667C46.6667 33.39 38.3134 39.6667 28 39.6667Z"
            fill="currentColor"
        />
    </svg>
);

ChatIcon.propTypes = propTypes;
ChatIcon.defaultProps = defaultProps;

export default React.memo(ChatIcon);
