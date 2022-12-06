import React from 'react';
import PropTypes from '../../utils/PropTypes';

const propTypes = {
    className: PropTypes.string,
};

const defaultProps = {
    className: 'h-6 w-6',
};

const GitterIcon = ({ className }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 177.2 177.2"
    >
        <g xmlns="http://www.w3.org/2000/svg">
            <rect x="43.6" y="0.3" width="13.1" height="96.7" fill="currentColor" />
            <rect x="122.5" y="22.5" width="13.1" height="74.5" fill="currentColor" />
            <rect x="69.8" y="22.5" width="13.1" height="127.2" fill="currentColor" />
            <rect x="96.4" y="22.5" width="13.1" height="127.2" fill="currentColor" />
        </g>
    </svg>
);

GitterIcon.propTypes = propTypes;
GitterIcon.defaultProps = defaultProps;

export default React.memo(GitterIcon);
