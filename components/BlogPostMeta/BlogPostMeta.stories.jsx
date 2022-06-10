import { BlogPostMeta } from '../..';
import React from 'react';

 
export default {
  title: 'Components/BlogPostMeta',
  component: BlogPostMeta,
  args: {
    children: 'BlogPostMeta',
    noShadow: false,
    submit: false,
    arrow: false,
  },
  argTypes: {
    children: { control: 'text'},
    to: { control: 'text' },
    theme:  { options: ['default', 'alternative'] },
    variant: { options: ['reset', 'primary', 'secondary', 'accent'] },
    size: { options: ['reset', 'sm', 'md', 'lg'] },
    noShadow: { type: 'boolean' },
    submit: { control: 'boolean' },
    to: { control: 'text' },
    arrow: { control: 'boolean' }
  },
};

const Template = (args) => <BlogPostMeta {...args} />;

const authors = [
    {
        name: 'Evan',
        image: {
            childImageSharp: {
                fixed: true
            }
        }
    },
    {
        name: 'Graham',
        image: {
            childImageSharp: {
                fixed: true
            }
        }
    }
]

export const BlogPostOneAuthor = Template.bind({});
BlogPostOneAuthor.storyName = 'BlogPostMeta (1 author)'
BlogPostOneAuthor.args = {
  post: {
    authors: authors.slice(1),
    date: '2022/06/10'
  }
};

export const BlogPostTwoAuthors = Template.bind({});
BlogPostTwoAuthors.storyName = 'BlogPostMeta (2 authors)'
BlogPostTwoAuthors.args = {
  post: {
    authors,
    date: '2022/06/10'
  }
};