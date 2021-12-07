import React from 'react';
import { Meta, Story } from '@storybook/react';

import './style.module.scss';
import { Checkbox, SuperCheckboxPropsType } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {},
} as Meta;

const Template: Story<SuperCheckboxPropsType> = (args) => <Checkbox {...args} />;

export const defaultCheckbox = Template.bind({});
defaultCheckbox.args = {
  children: 'Click me!',
};
