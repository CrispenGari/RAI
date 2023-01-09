import React from 'react';
import { Meta } from '@storybook/react';
import { CircularIndicator } from '../src';
import { CircularIndicatorProps } from '../src/CircularIndicator/CircularIndicator';

const meta: Meta = {
  title: 'RAI/CircularIndicator',
  component: CircularIndicator,
  argTypes: {},
};

export default meta;

const Template = (args: CircularIndicatorProps) => (
  <CircularIndicator {...args} />
);

export const Small = Template.bind({});
Small.args = {
  size: 'small',
} as CircularIndicatorProps;

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
} as CircularIndicatorProps;

export const Large = Template.bind({});
Large.args = {
  size: 'large',
} as CircularIndicatorProps;
