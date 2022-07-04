import classnames from 'classnames';
import React from 'react';
import { ArrowRightIcon, Link } from '../..';

import PropTypes from '../../utils/PropTypes';
import warning from '../../utils/warning';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    theme: PropTypes.oneOf(['default', 'alternative']),
    variant: PropTypes.oneOf(['reset', 'primary', 'secondary', 'accent']),
    size: PropTypes.oneOf(['reset', 'sm', 'md', 'lg']),
    noShadow: PropTypes.bool,
    submit: PropTypes.bool,
    onClick: PropTypes.func,
    to: PropTypes.string,
    arrow: PropTypes.bool,
};

const defaultProps = {
    children: null,
    className: null,
    theme: 'default',
    variant: 'reset',
    size: 'reset',
    noShadow: false,
    submit: false,
    onClick: null,
    to: null,
    arrow: false,
};

const Button = ({
    children,
    className,
    onClick,
    submit,
    noShadow,
    theme,
    variant,
    size,
    to,
    arrow,
    ...rest
}) => {
    const buttonClassName = classnames(
        className,
        'group font-body font-medium leading-none inline-flex items-center justify-center antialiased border-0 select-none transition-all duration-200',
        {
            'shadow': !noShadow,
            'bg-transparent': variant === 'reset',
            'btn-primary': theme === 'default' && variant === 'primary',
            'btn-secondary': theme === 'default' && variant === 'secondary',
            'btn-accent': theme === 'default' && variant === 'accent',
            'btn-primary-alt': theme === 'alternative' && variant === 'primary',
            'btn-secondary-alt': theme === 'alternative' && variant === 'secondary',
            'btn-accent-alt': theme === 'alternative' && variant === 'accent',
            'px-0 py-0': size === 'reset',
            'px-4 py-2 rounded-full text-sm font-normal': size === 'sm',
            'px-8 py-4 rounded-full text-base': size === 'md',
            'px-8 py-6 rounded-full text-lg': size === 'lg',
            'relative': arrow,
            'hover:pr-10': arrow && size === 'sm',
            'hover:pr-14': arrow && size === 'md',
        },
    );

    const iconClassNames = classnames(
        'absolute opacity-0 group-hover:opacity-100 block top-1/2 right-4 transition-opacity duration-100',
        {
            'h-4 w-4 -mt-2': size === 'sm',
            'h-6 w-6 -mt-3': size === 'md',
        }
    );

    warning(
        !(submit && onClick),
        'You provide onClick to a submit button. Please remove onClick handler or submit attribute',
    );

    if (submit) {
        return (
            <button type="submit" className={buttonClassName}>
                {children}
                {arrow && (
                    <ArrowRightIcon className={iconClassNames} />
                )}
            </button>
        );
    }

    if (to) {
        return (
            <Link to={to} noBorder resetClassName={buttonClassName} {...rest}>
                {children}
                {arrow && (
                    <ArrowRightIcon className={iconClassNames} />
                )}
            </Link>
        );
    }

    return (
        <button type="button" onClick={onClick} className={buttonClassName}>
            {children}
            {arrow && (
                <ArrowRightIcon className={iconClassNames} />
            )}
        </button>
    );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
