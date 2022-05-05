/* eslint-disable react/jsx-props-no-spreading */
import classnames from 'classnames';
import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import PropTypes from '../../utils/PropTypes';
import * as styles from './Link.module.css';

const propTypes = {
    className: PropTypes.string,
    activeClassName: PropTypes.string,
    resetClassName: PropTypes.string,
    children: PropTypes.node,
    noBorder: PropTypes.bool,
    partiallyActive: PropTypes.bool,
    sameTarget: PropTypes.bool,
    to: PropTypes.string.isRequired,
};

const defaultProps = {
    activeClassName: null,
    children: null,
    className: null,
    resetClassName: null,
    noBorder: false,
    sameTarget: false,
    partiallyActive: false,
};

const INTERNAL_LINK_PATTERN = /^\/(?!\/)/;
const FILE_LINK_PATTERN = /\.[0-9a-z]+$/i;

const Link = ({
    activeClassName,
    children,
    className,
    resetClassName,
    noBorder,
    partiallyActive,
    to,
    sameTarget,
    ...rest
}) => {
    const classNames = classnames([
        className,
        styles.link,
        {
            [styles.noBorder]: noBorder,
        },
    ]);

    if (!INTERNAL_LINK_PATTERN.test(to)) {
        if (sameTarget) {
            <GatsbyLink
                to={to}
                activeClassName={activeClassName}
                className={(resetClassName) ? resetClassName : classNames}
                partiallyActive={partiallyActive}
                {...rest}
            >
                {children}
            </GatsbyLink>
        } else {
            return (
                <a href={to} target="_blank" rel="noopener noreferrer" className={(resetClassName) ? resetClassName : classNames} {...rest}>
                    {children}
                </a>
            );
        }
    }

    if (FILE_LINK_PATTERN.test(to)) {
        return (
            <a href={to} className={(resetClassName) ? resetClassName : classNames} {...rest}>
                {children}
            </a>
        );
    }

    return (
        <GatsbyLink
            to={to}
            activeClassName={activeClassName}
            className={(resetClassName) ? resetClassName : classNames}
            partiallyActive={partiallyActive}
            {...rest}
        >
            {children}
        </GatsbyLink>
    );
};

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
