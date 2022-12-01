import React from 'react';
import PropTypes from '../../utils/PropTypes';

const propTypes = {
    className: PropTypes.string,
};

const defaultProps = {
    className: 'h-6 w-6',
};

const HistoryIcon = ({ className }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
    >
        <path
            d="M13.5 8.021H12V13.021L16.28 15.561L17 14.351L13.5 12.271V8.021ZM13 3.021C10.6131 3.021 8.32387 3.96921 6.63604 5.65703C4.94821 7.34486 4 9.63405 4 12.021H1L4.96 16.051L9 12.021H6C6 10.1645 6.7375 8.384 8.05025 7.07125C9.36301 5.75849 11.1435 5.021 13 5.021C14.8565 5.021 16.637 5.75849 17.9497 7.07125C19.2625 8.384 20 10.1645 20 12.021C20 13.8775 19.2625 15.658 17.9497 16.9707C16.637 18.2835 14.8565 19.021 13 19.021C11.07 19.021 9.32 18.231 8.06 16.961L6.64 18.381C8.27 20.021 10.5 21.021 13 21.021C15.3869 21.021 17.6761 20.0728 19.364 18.385C21.0518 16.6971 22 14.4079 22 12.021C22 9.63405 21.0518 7.34486 19.364 5.65703C17.6761 3.96921 15.3869 3.021 13 3.021Z"
            fill="currentColor"
        />
    </svg>
);

HistoryIcon.propTypes = propTypes;
HistoryIcon.defaultProps = defaultProps;

export default React.memo(HistoryIcon);
