import classnames from 'classnames';
import React from 'react';

const Marquee = ({ children, className }) => {
  return (
    <div className={classnames('bg-black text-white py-2', className)}>
      <div className="overflow-x-hidden whitespace-nowrap">
        <div className="inline-block relative animate-scroll mr-8">
          {children}
        </div>
        <div className="inline-block relative animate-scroll mr-8">
          {children}
        </div>
        <div className="inline-block relative animate-scroll mr-8">
          {children}
        </div>
        <div className="inline-block relative animate-scroll mr-8">
          {children}
        </div>
        <div className="inline-block relative animate-scroll mr-8">
          {children}
        </div>
        <div className="inline-block relative animate-scroll mr-8">
          {children}
        </div>
        <div className="inline-block relative animate-scroll mr-8">
          {children}
        </div>
        <div className="inline-block relative animate-scroll mr-8">
          {children}
        </div>
        <div className="inline-block relative animate-scroll mr-8">
          {children}
        </div>
        <div className="inline-block relative animate-scroll mr-8">
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
