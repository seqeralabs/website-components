
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
        viewBox="0 0 24 24"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 0C11.1667 0 0.666687 8.35333 0.666687 18.6667C0.783354 23.6833 3.14002 28.3967 7.08335 31.5C7.08335 32.9 6.10335 36.5633 0.666687 42C6.19669 41.7433 11.4934 39.6667 15.7634 36.1667C18.4234 36.9367 21.2234 37.3333 24 37.3333C36.8334 37.3333 47.3334 28.98 47.3334 18.6667C47.3334 8.35333 36.8334 0 24 0ZM24 32.6667C13.6867 32.6667 5.33335 26.39 5.33335 18.6667C5.33335 10.9433 13.6867 4.66667 24 4.66667C34.3134 4.66667 42.6667 10.9433 42.6667 18.6667C42.6667 26.39 34.3134 32.6667 24 32.6667Z"
            fill="currentColor"
        />
    </svg>
);

ChatIcon.propTypes = propTypes;
ChatIcon.defaultProps = defaultProps;

export default React.memo(ChatIcon);
