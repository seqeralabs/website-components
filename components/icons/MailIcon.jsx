import React from 'react';
import PropTypes from '../../utils/PropTypes';

const propTypes = {
    className: PropTypes.string,
};

const defaultProps = {
    className: 'h-6 w-6',
};

const MailIcon = ({ className }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40 40"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M31 40H9c-5 0-9-4-9-9V9c0-5 4-9 9-9h22c5 0 9 4 9 9v22c0 5-4 9-9 9zM6.1 12.5 6 13v14l.1.5 7.5-7.5-7.5-7.5zm18 9.8a5.8 5.8 0 0 1-8.2 0l-.9-.9-7.5 7.5.5.1h24l.5-.1-7.5-7.5-.9.9zm-1.4-1.4 9.8-9.8-.5-.1H8l-.5.1 9.8 9.8a3.8 3.8 0 0 0 5.4 0zm11.2-8.4L26.4 20l7.5 7.5.1-.5V13l-.1-.5z"
            fill="currentColor"
        />
    </svg>
);

MailIcon.propTypes = propTypes;
MailIcon.defaultProps = defaultProps;

export default React.memo(MailIcon);
