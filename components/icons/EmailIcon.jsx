
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
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 56 56"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M51.3333 12.8335H21C18.4333 12.8335 16.3333 14.9335 16.3333 17.5002V38.5002C16.3333 41.0902 18.4333 43.1668 21 43.1668H51.3333C53.9233 43.1668 56 41.0902 56 38.5002V17.5002C56 14.9335 53.9233 12.8335 51.3333 12.8335ZM51.3333 38.5002H21V21.3968L36.1667 29.1668L51.3333 21.3968V38.5002ZM36.1667 25.2235L21 17.5002H51.3333L36.1667 25.2235ZM11.6667 38.5002C11.6667 38.8968 11.7367 39.2702 11.7833 39.6668H2.33333C1.04533 39.6668 0 38.6168 0 37.3335C0 36.0502 1.04533 35.0002 2.33333 35.0002H11.6667V38.5002ZM7 16.3335H11.7833C11.7367 16.7302 11.6667 17.1035 11.6667 17.5002V21.0002H7C5.71667 21.0002 4.66667 19.9502 4.66667 18.6668C4.66667 17.3835 5.71667 16.3335 7 16.3335ZM2.33333 28.0002C2.33333 26.7168 3.38333 25.6668 4.66667 25.6668H11.6667V30.3335H4.66667C3.38333 30.3335 2.33333 29.2835 2.33333 28.0002Z"
            fill="currentColor"
        />
    </svg>
);

EmailIcon.propTypes = propTypes;
EmailIcon.defaultProps = defaultProps;

export default React.memo(EmailIcon);
