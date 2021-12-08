import React from 'react';
import { Meta, Story } from '@storybook/react';

import { App } from './App';
import { ReduxStoreProviderDecorator } from './stories';

import './styles.module.scss';

export default {
  title: 'Components/App',
  component: App,
  argTypes: {},
  decorators: [ReduxStoreProviderDecorator],
} as Meta;

const Template: Story = (args) => <App {...args} />;

export const defaultApp = Template.bind({});
defaultApp.args = {};
