import classnames from 'classnames';
import React from 'react';
import PropTypes from '../../utils/PropTypes';
import BulletIcon from '../icons/BulletIcon';
import CheckIcon from '../icons/CheckIcon';

// eslint-disable-next-line react/prop-types
const ListIcon = ({ type, className }) => {
    switch (type) {
        case 'bullet':
            return <BulletIcon className={className} />;
        default:
        case 'check':
            return <CheckIcon className={className} />;
    }
};

const List = ({ children, className, color, type }) => (
    <ul className={className}>
        {React.Children.map(children, item => (
            React.cloneElement(item, {
                color: item.props.color || color,
                type: item.props.type || type,
            })
        ))}
    </ul>
);

List.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    type: PropTypes.oneOf(['check', 'bullet']),
    color: PropTypes.oneOf(['indigo', 'green']),
};

List.defaultProps = {
    children: null,
    className: '',
    type: null,
    color: 'indigo',
};

const ListItem = ({ children, className, color, type }) => (
    <li className={classnames(className, 'flex mt-4 first:mt-0')}>
        <ListIcon
            type={type}
            className={classnames(
                'mr-2.5 mt-1 h-6 w-6',
                {
                    'text-indigo-600': color === 'indigo',
                    'text-green-600': color === 'green',
                },
            )}
        />
        <span className="flex-1">
            {children}
        </span>
    </li>
);

ListItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.oneOf(['indigo', 'green']),
    type: PropTypes.oneOf(['check', 'bullet']),
};

ListItem.defaultProps = {
    children: null,
    className: null,
    color: null,
    type: null,
};

List.Item = ListItem;

export default List;
