import React from 'react';
import { Meta, Story } from '@storybook/react';

import 'styles.module.scss';
import { Input, IInputProps, InputElementPropsType } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    sizes: {
      options: ['xs', 'sm', 'md'],
      control: { type: 'select' },
    },
    disabled: {
      description: 'Disabled styles',
      control: { type: 'boolean' },
    },
  },
} as Meta;

const Template: Story<IInputProps & InputElementPropsType> = (args) => <Input {...args} />;

export const defaultInput = Template.bind({});
defaultInput.args = {
  placeholder: 'Click me!',
};

export const errorInput = Template.bind({});
errorInput.args = {
  placeholder: 'Click me!',
  error: 'sadf',
};
