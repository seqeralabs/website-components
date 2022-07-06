import classnames from 'classnames';
import { navigate } from 'gatsby';
import React from 'react';
import PropTypes from '../../utils/PropTypes';

const Marquee = ({ children, className, to }) => {
  return (
    <div onClick={() => { to ? navigate(to) : null }} className={classnames('bg-black text-white py-2 cursor-pointer', className)}>
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
};

Marquee.defaultProps = {
  children: null,
  className: '',
};

export default Marquee;
