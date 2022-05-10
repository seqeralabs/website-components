import classnames from 'classnames';
import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import PropTypes from '../../utils/PropTypes';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    revealClassName: PropTypes.string,
    onView: PropTypes.func,
    index: PropTypes.number,
    disable: PropTypes.bool,
};

const defaultProps = {
    children: null,
    className: null,
    revealClassName: null,
    onView: null,
    index: 0,
    disable: false,
};

const RevealOnView = ({ children, className, revealClassName, root, onView, index, disable }) => {
  const [ref, visible] = useInView({
    threshold: 0.1,
    rootMargin: '100px',
    trackVisibility: true,
    delay: 100,
    rootMargin: '-200px 0px 0px 0px',
    skip: disable,
  });

  useEffect(() => {
    if (visible) {
      onView(index)
    }
  }, [ref, visible])

  return (
    <div
      ref={ref}
      className={classnames(
        'transition-all duration-1000',
        {
          'opacity-0': !visible && !disable,
          'opacity-1': visible,
        }
      )}
    >
      {children}
    </div>
  );
}

RevealOnView.propTypes = propTypes;
RevealOnView.defaultProps = defaultProps;

export default RevealOnView;
