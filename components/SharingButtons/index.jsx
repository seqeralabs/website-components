import classnames from 'classnames';
import React from 'react';
import { Link, LinkedInIcon, MailIcon, TwitterIcon } from '../..';

import PropTypes from '../../utils/PropTypes';

const SharingButtons = ({ slug, title, text, className }) => {
  return (
    <div className={classnames('flex items-center', className)}>
      <Link
        to={`https://twitter.com/intent/tweet?url=https://seqera.io${slug}&text=${text}`}
        noBorder
      >
        <TwitterIcon className="h-8 w-8" />
      </Link>
      <Link
        to={`https://www.linkedin.com/shareArticle?mini=true&url=https://seqera.io${slug}&title=${title}&summary=${text}&source=`}
        noBorder
        className="ml-6"
      >
        <LinkedInIcon className="h-8 w-8" />
      </Link>
      <Link
        to={`mailto:?subject=${title}&body=Hi, I just read this interesting article on Seqera Labs: Phil Ewels outlines his journey, from his beginnings in the Babraham Institute, his time at SciLifeLab, to working full-time with Nextflow. https://seqera.io${slug}.`}
        noBorder
        className="ml-6"
      >
        <MailIcon className="h-8 w-8" />
      </Link>
    </div>
  );
};

SharingButtons.propTypes = {
  className: PropTypes.string,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
};

SharingButtons.defaultProps = {
  className: '',
  title: '',
  text: '',
};

export default SharingButtons;
