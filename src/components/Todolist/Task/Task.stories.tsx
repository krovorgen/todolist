import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Provider } from 'react-redux';

import { Task, TaskProps } from './Task';
import store from '../../../redux/store';

import './styles.module.scss';

export default {
  title: 'Components/Task',
  component: Task,
  argTypes: {},
} as Meta;

const Template: Story<TaskProps> = (args) => (
  <Provider store={store}>
    <Task {...args} />{' '}
  </Provider>
);

export const checkedExample = Template.bind({});
checkedExample.args = {
  task: { id: '1', title: 'Hello world', checked: true },
};

export const uncheckedExample = Template.bind({});
uncheckedExample.args = {
  task: { id: '1', title: 'Hello world', checked: false },
};
