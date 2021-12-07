import React from 'react';
import { Meta, Story } from '@storybook/react';

import './style.module.scss';
import { EditableSpan, IEditableSpanPropsType } from './EditableSpan';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/EditableSpan',
  component: EditableSpan,
  argTypes: {},
} as Meta;

const Template: Story<IEditableSpanPropsType> = (args) => <EditableSpan {...args} />;

const callback = action('Новое значение: ');

export const defaultEditableSpan = Template.bind({});
defaultEditableSpan.args = {
  newEditableValue: callback,
  title: 'Double click',
};
