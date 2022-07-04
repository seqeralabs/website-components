import { Button } from '../..';
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

 
export default {
  title: 'Components/Button',
  args: {
    
  },
  argTypes: {
    
  },
  decorators: [withDesign]  
};

const Template = (args) => (
    <div className='flex flex-col gap-3'>
      <div className="flex gap-3">
        <Button variant="primary" theme="default" size="md">Button</Button>
        <Button variant="primary" theme="default" size="md" arrow="true" id="primary-hovered">Button</Button>
        <Button variant="primary" theme="alternative" size="md">Button</Button>
        <Button variant="primary" theme="alternative" size="md" arrow="true" id="alt-hovered">Button</Button>
      </div>
      <div className="flex gap-3">
        <Button variant="secondary" theme="default" size="md">Button</Button>
        <Button variant="secondary" theme="default" size="md" id="secondary-hovered">Button</Button>
        <Button variant="secondary" theme="alternative" size="md">Button</Button>
        <Button variant="secondary" theme="alternative" size="md" id="alt-hovered">Button</Button>
      </div>
      <div className="flex gap-3">
        <Button variant="primary" theme="default" size="sm">Button</Button>
        <Button variant="primary" theme="default" size="sm" arrow="true" id="primary-hovered">Button</Button>
        <Button variant="primary" theme="alternative" size="sm">Button</Button>
        <Button variant="primary" theme="alternative" size="sm" arrow="true" id="alt-hovered">Button</Button>
      </div>
      <div className="flex gap-3">
        <Button variant="secondary" theme="default" size="sm">Button</Button>
        <Button variant="secondary" theme="default" size="sm" id="secondary-hovered">Button</Button>
        <Button variant="secondary" theme="alternative" size="sm">Button</Button>
        <Button variant="secondary" theme="alternative" size="sm" id="alt-hovered">Button</Button>
      </div>
    </div>
  );
  export const Summary = Template.bind({});
  Summary.parameters = {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/NUJ1no9YcNJBsdfBuQRqnj/?node-id=222%3A67',
    },
  };