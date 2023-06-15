import classnames from 'classnames';
import { navigate } from 'gatsby';
import React from 'react';
import PropTypes from '../../utils/PropTypes';

const Marquee = ({ children, className, to, type }) => {
  return (
    <div
      onClick={() => { to ? navigate(to) : null }}
      className={classnames(
        className,
        'py-2 cursor-pointer',
        {
          'bg-black text-white': type === 'primary',
          'bg-gradient-accent text-white': type === 'accent',
        }
      )}
    >
      <div className="overflow-x-hidden whitespace-nowrap">
        <div className="inline-block relative animate-scroll transform-gpu mr-8">
          {children}
        </div>
        <div className="inline-block relative animate-scroll transform-gpu mr-8">
          {children}
        </div>
        <div className="inline-block relative animate-scroll transform-gpu mr-8">
          {children}
        </div>
        <div className="inline-block relative animate-scroll transform-gpu mr-8">
          {children}
        </div>
        <div className="inline-block relative animate-scroll transform-gpu mr-8">
          {children}
        </div>
        <div className="inline-block relative animate-scroll transform-gpu mr-8">
          {children}
        </div>
        <div className="inline-block relative animate-scroll transform-gpu mr-8">
          {children}
        </div>
        <div className="inline-block relative animate-scroll transform-gpu mr-8">
          {children}
        </div>
        <div className="inline-block relative animate-scroll transform-gpu mr-8">
          {children}
        </div>
        <div className="inline-block relative animate-scroll transform-gpu mr-8">
          {children}
        </div>
      </div>
    </div>
  );
};

Marquee.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  to: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'accent', 'reset']),
};

Marquee.defaultProps = {
  children: null,
  className: '',
  to: '',
  type: 'primary',
};

export default Marquee;
