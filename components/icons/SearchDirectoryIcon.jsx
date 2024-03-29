import React from 'react';
import PropTypes from '../../utils/PropTypes';

const propTypes = {
    className: PropTypes.string,
};

const defaultProps = {
    className: 'h-6 w-6',
};

const SearchDirectoryIcon = ({ className }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
    >
        <path
            d="M1.979 8l-.979-6h6.972c1.265 1.583 1.327 2 3.306 2h11.722l-.96 4h-2.04l.469-2h-9.191c-2.326 0-3.166-.612-4.278-2h-3.694l.694 4h-2.021zm22.021 2l-2 12h-20l-2-12h6.278l2.308-3 3.9 3h1.97l-1.429-1.097 1.465-1.903 3.9 3h5.608zm-2.331 2h-19.338l1.385 8h16.568l1.385-8z"
            fill="currentColor"
        />
    </svg>
);

SearchDirectoryIcon.propTypes = propTypes;
SearchDirectoryIcon.defaultProps = defaultProps;

export default React.memo(SearchDirectoryIcon);
