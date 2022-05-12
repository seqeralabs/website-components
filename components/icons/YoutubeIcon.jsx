import React from 'react';
import PropTypes from '../../utils/PropTypes';

const propTypes = {
    className: PropTypes.string,
};

const defaultProps = {
    className: null,
};

const YoutubeIcon = ({ className }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 21 21"
    >
        <polygon fill="#fff" points="7.5 15.5 15.5 10.5 7.5 5.5 7.5 15.5"/>
        <path fill="currentColor" stroke="#fff" strokeMiterlimit="10" d="M10.52.52a10,10,0,1,1-10,10,10,10,0,0,1,10-10" transform="translate(-0.02 -0.02)"/>
    </svg>
);

YoutubeIcon.propTypes = propTypes;
YoutubeIcon.defaultProps = defaultProps;

export default React.memo(YoutubeIcon);
