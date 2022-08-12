import React from 'react';
import PropTypes from '../../utils/PropTypes';

const propTypes = {
    className: PropTypes.string,
};

const defaultProps = {
    className: 'h-6 w-6',
};

const StarIcon = ({ className }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.00005 11.6797L10.7667 13.3531C11.2734 13.6597 11.8934 13.2064 11.76 12.6331L11.0267 9.48639L13.4734 7.36639C13.92 6.97972 13.68 6.24639 13.0934 6.19972L9.87338 5.92639L8.61338 2.95305C8.38671 2.41305 7.61338 2.41305 7.38671 2.95305L6.12671 5.91972L2.90672 6.19306C2.32005 6.23972 2.08005 6.97306 2.52672 7.35972L4.97338 9.47972L4.24005 12.6264C4.10671 13.1997 4.72671 13.6531 5.23338 13.3464L8.00005 11.6797Z"
            fill="currentColor"
        />
    </svg>
);

StarIcon.propTypes = propTypes;
StarIcon.defaultProps = defaultProps;

export default React.memo(StarIcon);
