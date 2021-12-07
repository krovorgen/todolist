import React from 'react';
import { Meta, Story } from '@storybook/react';

import '../../../scss/index.scss';
import { Button, IButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    sizes: {
      options: ['xs', 'sm', 'md'],
      control: { type: 'select' },
    },
    variant: {
      description: 'button--outline or nothing',
      options: ['default', 'iconOnly'],
      control: { type: 'select' },
    },
    disabled: {
      description: 'Disabled styles',
      control: { type: 'boolean' },
    },
  },
} as Meta;

const Template: Story<IButtonProps> = (args) => <Button {...args} />;

export const defaultButton = Template.bind({});
defaultButton.args = {
  children: 'Click me!',
};
