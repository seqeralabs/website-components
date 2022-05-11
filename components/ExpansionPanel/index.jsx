import classnames from 'classnames';
import { motion, AnimatePresence } from 'framer-motion';
import React, { createContext, useState, useContext, useCallback } from 'react';
import { Box, CheckIcon, PlusIcon } from 'website-components';

import isSSR from '../../utils/isSSR';
import preventDefault from '../../utils/preventDefault';
import PropTypes from '../../utils/PropTypes';
import whenKey from '../../utils/whenKey';

const propTypes = {
    className: PropTypes.string,
    activeClassName: PropTypes.string,
    iconClassName: PropTypes.string,
    defaultExpanded: PropTypes.bool,
    children: PropTypes.node,
    marked: PropTypes.bool,
};

const defaultProps = {
    className: '',
    activeClassName: '',
    iconClassName: '',
    defaultExpanded: false,
    children: null,
    marked: false,
};

const ExpansionContext = createContext();

const ExpansionPanel = ({ children, defaultExpanded, marked, className, activeClassName, iconClassName }) => {
    const [expanded, setExpanded] = useState(defaultExpanded);
    const toggleExpanded = useCallback(() => setExpanded(!expanded), [expanded, setExpanded]);

    return (
        <div className={classnames('shadow rounded-md overflow-hidden', {
            [className]: !isSSR && !marked,
            [activeClassName]: !isSSR && marked,
        })}>
            <ExpansionContext.Provider value={{ expanded, toggleExpanded, marked, iconClassName }}>
                {children}
            </ExpansionContext.Provider>
        </div>
    );
};

ExpansionPanel.propTypes = propTypes;
ExpansionPanel.defaultProps = defaultProps;

const ExpansionPanelSummary = ({ children }) => {
    const { expanded, toggleExpanded, marked, iconClassName } = useContext(ExpansionContext);

    return (
        <div
            className="flex items-center cursor-pointer border-transparent focus:outline-none"
            onClick={toggleExpanded}
            onKeyDown={whenKey(' ', preventDefault(toggleExpanded))}
            role="tab"
            tabIndex="0"
        >
            <div className="flex-1 py-4 pl-6 pr-6">
                {children}
            </div>
            {marked && (
              <CheckIcon className={classnames(iconClassName, 'h-6 w-6 m-5')} />
            )}
            {!marked && (
              <button
                  type="button"
                  className={classnames(
                      'h-6 w-6 m-5 focus:outline-none transition-all',
                      {
                          'rotate-[-135deg]': expanded,
                      },
                  )}
              >
                  <PlusIcon className={classnames('h-6 w-6', iconClassName)} />
                  <span className="sr-only">
                      {expanded ? 'close' : 'open'}
                  </span>
              </button>
            )}
        </div>
    );
};

ExpansionPanelSummary.propTypes = {
    children: PropTypes.node,
};

ExpansionPanelSummary.defaultProps = {
    children: null,
};

const ExpansionPanelDetail = ({ children }) => {
    const { expanded } = useContext(ExpansionContext);

    return (
        <AnimatePresence initial={false}>
            { expanded && (
                <motion.div
                    transition={{
                        type: 'spring',
                        damping: 30,
                        stiffness: 200,
                    }}
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                        open: { opacity: 1, height: 'auto' },
                        collapsed: { opacity: 0, height: 0 },
                    }}
                >
                    <div role="tabpanel" className="px-6 pb-6 pt-4">{children}</div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

ExpansionPanelDetail.propTypes = {
    children: PropTypes.node,
};

ExpansionPanelDetail.defaultProps = {
    children: null,
};

const ExpansionPanelGroup = ({ children }) => (
    <div role="tablist">
        {React.Children.map(children, child => (
            <div className="mt-4 first:mt-0">
                {child}
            </div>
        ))}
    </div>
);

ExpansionPanelGroup.propTypes = {
    children: PropTypes.node,
};

ExpansionPanelGroup.defaultProps = {
    children: null,
};

ExpansionPanel.Summary = ExpansionPanelSummary;
ExpansionPanel.Detail = ExpansionPanelDetail;
ExpansionPanel.Group = ExpansionPanelGroup;

export default ExpansionPanel;
