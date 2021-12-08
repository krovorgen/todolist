import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Task, TaskProps } from './Task';
import { ReduxStoreProviderDecorator } from '../../../stories';

import './styles.module.scss';

export default {
  title: 'Components/Task',
  component: Task,
  argTypes: {},
  decorators: [ReduxStoreProviderDecorator],
} as Meta;

const Template: Story<TaskProps> = (args) => <Task {...args} />;

export const checkedExample = Template.bind({});
checkedExample.args = {
  task: {
    id: '100b2cc0-57f3-11ec-8bfd-dfd1e574a13a',
    title: 'First task',
    checked: false,
  },
  todolistId: '0bb455c0-57f3-11ec-8bfd-dfd1e574e13a',
};

export const uncheckedExample = Template.bind({});
uncheckedExample.args = {
  task: {
    id: '12f07260-57f3-11ec-8bfd-dfd1e574ed3a',
    title: 'Second task',
    checked: true,
  },
  todolistId: '0bb455c0-57f3-11ec-8bfd-dfd1e574e13a',
};
