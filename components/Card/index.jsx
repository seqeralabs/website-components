import classnames from 'classnames';
import { navigate } from 'gatsby';
import React from 'react';
import { Box, Link, LocationIcon } from '../..';

const Card = ({ children, slug, className }) => {
  return (
    <div onClick={() => { navigate(slug) }} className={classnames(className, 'cursor-pointer')}>
      {children}
    </div>
  );
};

const CardContent = ({ children, className }) => {
  return (
    <Box className={classnames(className, 'py-6 sm:py-8 px-4 sm:px-8')}>
      {children}
    </Box>
  );
};

const CardTags = ({ children, className }) => {
  return (
    <div className={classnames(className, 'hidden sm:block')} onClick={(event) => { event.stopPropagation() }}>
      {children}
    </div>
  );
};

const CardTitle = ({ children, slug }) => {
  return (
    <h3 className="typo-h4 mb-4">
      <Link to={slug} noBorder>
        {children}
      </Link>
    </h3>
  );
};

const CardDescription = ({ children }) => {
  return (
    <p className="typo-body">
      {children}
    </p>
  );
};

const CardCategory = ({ children, className }) => {
  return (
    <span className={classnames(className, 'font-semibold text-indigo-600 uppercase')}>
      {children}
    </span>
  );
};

const CardDateTime = ({ children, className }) => {
  return (
    <span className={classnames(className, 'font-semibold uppercase')}>
      {children}
    </span>
  );
};

const CardLocation = ({ children, className, iconClassName }) => {
  return (
    <div className={classnames(className, 'inline-flex items-center')}>
      <LocationIcon className={classnames(iconClassName, 'h-5 w-5 mr-1')} />
      <span className="typo-intro">
        {children}
      </span>
    </div>
  );
};

const CardTeam = ({ children, className }) => {
  return (
    <span className={classnames(className, 'typo-body')}>
      {children}
    </span>
  );
};

Card.Content = CardContent;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Category = CardCategory;
Card.Location = CardLocation;
Card.DateTime = CardDateTime;
Card.Tags = CardTags;
Card.Location = CardLocation;
Card.Team = CardTeam;

export default Card;
