
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
        viewBox="0 0 24 24"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M51.3333 0.833496H21C18.4333 0.833496 16.3333 2.9335 16.3333 5.50016V26.5002C16.3333 29.0902 18.4333 31.1668 21 31.1668H51.3333C53.9233 31.1668 56 29.0902 56 26.5002V5.50016C56 2.9335 53.9233 0.833496 51.3333 0.833496ZM51.3333 26.5002H21V9.39683L36.1667 17.1668L51.3333 9.39683V26.5002ZM36.1667 13.2235L21 5.50016H51.3333L36.1667 13.2235ZM11.6667 26.5002C11.6667 26.8968 11.7367 27.2702 11.7833 27.6668H2.33333C1.04533 27.6668 0 26.6168 0 25.3335C0 24.0502 1.04533 23.0002 2.33333 23.0002H11.6667V26.5002ZM7 4.3335H11.7833C11.7367 4.73016 11.6667 5.1035 11.6667 5.50016V9.00016H7C5.71667 9.00016 4.66667 7.95016 4.66667 6.66683C4.66667 5.3835 5.71667 4.3335 7 4.3335ZM2.33333 16.0002C2.33333 14.7168 3.38333 13.6668 4.66667 13.6668H11.6667V18.3335H4.66667C3.38333 18.3335 2.33333 17.2835 2.33333 16.0002Z"
            fill="currentColor"
        />
    </svg>
);

EmailIcon.propTypes = propTypes;
EmailIcon.defaultProps = defaultProps;

export default React.memo(EmailIcon);
