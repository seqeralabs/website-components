import { Button } from '../..';
import React from 'react';
 
export default {
  title: 'Components/Button',
  component: Button,
  args: {
    noShadow: false,
    submit: false,
    arrow: false,
  },
  argTypes: {
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

const Template = (args) => <Button {...args} />;

export const Submit = Template.bind({});
Submit.args = {
  children: `Submit`,
  variant: 'primary',
  theme: 'default',
  className: 'm-lg',
  size: 'sm',
  submit: true
};
