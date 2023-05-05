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

const List = ({ children, className, iconClassName, type, as }) => {
  const Component = as || 'ul';

  return (
    <Component className={classnames(className, {
       'list-decimal': type === 'ordered',
    })}>
      {React.Children.map(children, item => (
        item.type && React.cloneElement(item, {
          type: item.props.type || type,
          iconClassName: item.props.iconClassName || iconClassName,
        })
      ))}
    </Component>
  );
};

List.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node,
  className: PropTypes.string,
  iconClassName: PropTypes.string,
  type: PropTypes.oneOf(['check', 'bullet', 'ordered']),
};

List.defaultProps = {
  as: null,
  children: null,
  className: '',
  iconClassName: 'text-indigo-600',
  type: null,
};

const ListItem = ({ children, className, iconClassName, type }) => (
  <li className={classnames(
      className,
      'mt-4 first:mt-0',
      {
          'flex': type !== 'ordered',
      }
  )}
  >
    {type !== 'ordered' && (
      <ListIcon
        type={type}
        className={classnames(
          iconClassName,
          'mt-1 mr-2.5 h-6 w-6',
        )}
      />
    )}
    <span className={classnames(type !== 'ordered' ? 'flex-1' : '')}>
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
