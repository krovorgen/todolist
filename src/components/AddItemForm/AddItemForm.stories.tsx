import React from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { AddItemForm, AddItemFormProps } from './AddItemForm';

import './styles.module.scss';

export default {
  title: 'Components/AddItemForm',
  component: AddItemForm,
  argTypes: {},
} as Meta;

const Template: Story<AddItemFormProps> = (args) => <AddItemForm {...args} />;

const callback = action('Отправлен запрос на добавление');

export const defaultExample = Template.bind({});
defaultExample.args = {
  callback,
};
