import classnames from 'classnames';
import React from 'react';
import PropTypes from '../../util/PropTypes';
import BulletIcon from '../icons/BulletIcon';
import CheckIcon from '../icons/CheckIcon';

// eslint-disable-next-line react/prop-types
const ListIcon = ({ type, className }) => {
    switch (type) {
        case 'bullet':
            return <BulletIcon className={className} />;
        case 'check':
            return <CheckIcon className={className} />;
        default:
            return <></>;
    }
};

const List = ({ children, className, iconClassName, type }) => (
    <ul className={classnames(className, {
         'list-decimal': type === 'ordered',
    })}>
        {React.Children.map(children, item => (
            React.cloneElement(item, {
                type: item.props.type || type,
                iconClassName: item.props.iconClassName || iconClassName,
            })
        ))}
    </ul>
);

List.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    iconClassName: PropTypes.string,
    type: PropTypes.oneOf(['check', 'bullet', 'ordered']),
};

List.defaultProps = {
    children: null,
    className: '',
    iconClassName: 'text-indigo-600',
    type: null,
};

const ListItem = ({ children, className, iconClassName, type }) => (
    <li className={classnames(className, 'flex mt-4 first:mt-0')}>
        {type !== 'ordered' && (
            <ListIcon
                type={type}
                className={classnames(
                    iconClassName,
                    'mr-2.5 mt-1 h-6 w-6',
                )}
            />
        )}
        <span className="flex-1">
            {children}
        </span>
    </li>
);

ListItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    iconClassName: PropTypes.string,
    type: PropTypes.oneOf(['check', 'bullet', 'ordered']),
};

ListItem.defaultProps = {
    children: null,
    className: null,
    iconClassName: null,
    type: null,
};

List.Item = ListItem;

export default List;
