import classnames from 'classnames';
import React from 'react';
import PropTypes from '../../utils/PropTypes';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

const defaultProps = {
    children: null,
    className: null,
};

const Box = ({ children, className }) => (
    <div className={classnames('bg-white shadow-xl overflow-hidden', className)}>
        {children}
    </div>
);

Box.propTypes = propTypes;
Box.defaultProps = defaultProps;

export default Box;
