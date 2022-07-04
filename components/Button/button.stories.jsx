import { Button } from '../..';
import React from 'react';

 
export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
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

const Template = (args) => <Button {...args} />;

export const DefaultNoArrow = Template.bind({});
DefaultNoArrow.storyName = 'Default, primary, without arrow'
DefaultNoArrow.args = {
  children: `Button`,
  variant: 'primary',
  theme: 'default',
  size: 'sm',
};

export const DefaultWithArrow = Template.bind({});
DefaultWithArrow.storyName = 'Default, primary, with arrow'
DefaultWithArrow.args = {
  children: `Button`,
  variant: 'primary',
  theme: 'default',
  size: 'sm',
  arrow: true
};

export const GreenNoArrow = Template.bind({});
GreenNoArrow.storyName = 'Default, Nextflow, with arrow'
GreenNoArrow.args = {
  children: `Button`,
  variant: 'primary',
  theme: 'alternative',
  size: 'sm',
  arrow: true
};