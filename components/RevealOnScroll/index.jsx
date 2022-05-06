import PropTypes from 'prop-types';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import Reveal from '../Reveal';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

const defaultProps = {
    children: null,
    className: null,
};

function RevealOnScroll({ children, className }) {
    const [ref, visible] = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <div ref={ref}>
            <Reveal in={visible} className={className}>
                {children}
            </Reveal>
        </div>
    );
}

RevealOnScroll.propTypes = propTypes;
RevealOnScroll.defaultProps = defaultProps;

export default RevealOnScroll;
