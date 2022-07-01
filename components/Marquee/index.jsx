import React from 'react';

const Marquee = ({ children }) => {
  return (
    <div className="bg-black text-white py-2">
      <div className="overflow-x-hidden whitespace-nowrap">
        <div className="inline-block relative animate-scroll">
          {children}
        </div>
        {' '}
        <div className="inline-block relative animate-scroll">
          {children}
        </div>
        {' '}
        <div className="inline-block relative animate-scroll">
          {children}
        </div>
        {' '}
        <div className="inline-block relative animate-scroll">
          {children}
        </div>
        {' '}
        <div className="inline-block relative animate-scroll">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
