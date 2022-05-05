import React from 'react';
import PropTypes from '../../utils/PropTypes';

const propTypes = {
    className: PropTypes.string,
};

const defaultProps = {
    className: null,
};

const BulletIcon = ({ className }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
    >
        <circle cx="12" cy="12" r="4" fill="currentColor" />
    </svg>
);

BulletIcon.propTypes = propTypes;
BulletIcon.defaultProps = defaultProps;

export default React.memo(BulletIcon);
