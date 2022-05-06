import React, { useRef } from 'react';
import PropTypes from '../../utils/PropTypes';

const ScrollSnap = ({ children }) => {
  const slider = useRef();
  const slides = React.Children.toArray(children);

  const slideTo = (index) => {
    slider.current.scrollLeft = slider.current.offsetWidth * index;
  };

  return (
    <>
      <div className="flex flex-nowrap overflow-x-auto snap-type-x-mandatory scroll-behavior-smooth hide-scrollbar" ref={slider}>
        {slides.map((slide, index) => (
          <div key={`slide-${index}`} className="min-w-full snap-align-start">
            {slide}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap flex-row -mx-1 sm:-mx-2">
        {slides.map((slide, index) => (
          <div key={`thumb-${index}`} className="px-1 sm:px-2 w-1/4 lg:w-auto flex-auto mt-4 cursor-pointer" onClick={() => { slideTo(index) }}>
            {slide}
          </div>
        ))}
      </div>
    </>
  );
};

ScrollSnap.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScrollSnap;
