import React from 'react';
import PropTypes from '../../utils/PropTypes';

const propTypes = {
    className: PropTypes.string,
};

const defaultProps = {
    className: 'h-6 w-6',
};

const UserIcon = ({ className }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
    >
        <path
            d="M12 12.021C14.21 12.021 16 10.231 16 8.021C16 5.811 14.21 4.021 12 4.021C9.79 4.021 8 5.811 8 8.021C8 10.231 9.79 12.021 12 12.021ZM12 14.021C9.33 14.021 4 15.361 4 18.021V19.021C4 19.571 4.45 20.021 5 20.021H19C19.55 20.021 20 19.571 20 19.021V18.021C20 15.361 14.67 14.021 12 14.021Z"
            fill="currentColor"
        />
    </svg>
);

UserIcon.propTypes = propTypes;
UserIcon.defaultProps = defaultProps;

export default React.memo(UserIcon);
