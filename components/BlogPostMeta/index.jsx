import classnames from 'classnames';
import Image from 'gatsby-image';
import React from 'react';

import PropTypes from '../../utils/PropTypes';

const BlogPostMeta = ({ post, className }) => {
  return post && (
    <div className={
      classnames(
        className,
        'flex items-center',
      )}
    >
      <div className="flex items-center mr-4">
        {post.authors.map((author) => (
          <Image
            alt={author.name}
            fixed={author.image.childImageSharp.fixed}
            className="rounded-full h-8 w-8 -ml-1 first:ml-0"
            key={author.name}
          />
        ))}
      </div>
      <span className="text-indigo-600">
        {post.authors[0].name}
        {post.authors[1] && (
          <>
            {` & ${post.authors[1].name}`}
          </>
        )}
      </span>
      {post.date && (
        <span className="text-gray-400 border-l border-gray-200 ml-2 pl-2">
          {post.date}
        </span>
      )}
    </div>
  );
};

BlogPostMeta.propTypes = {
  post: PropTypes.object.isRequired,
};

export default BlogPostMeta;
