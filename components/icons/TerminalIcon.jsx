import React from 'react';
import PropTypes from '../../utils/PropTypes';

const propTypes = {
    className: PropTypes.string,
};

const defaultProps = {
    className: 'h-6 w-6',
};

const TerminalIcon = ({ className }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
    >
        <path
            d="m21 4c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-16.5.5h15v15h-15zm2.818 5.865 2.635 1.622-2.641 1.645c-.207.146-.318.378-.318.613 0 .601.682.966 1.182.613l3.511-2.257c.199-.141.318-.369.318-.614 0-.244-.119-.472-.318-.613l-3.505-2.235c-.498-.35-1.182.009-1.182.612 0 .236.111.468.318.614zm9.678 3.873c0-.414-.336-.75-.75-.75h-3.5c-.413 0-.75.336-.75.75s.337.75.75.75h3.5c.414 0 .75-.336.75-.75z"
            fill="currentColor"
        />
    </svg>
);

TerminalIcon.propTypes = propTypes;
TerminalIcon.defaultProps = defaultProps;

export default React.memo(TerminalIcon);
