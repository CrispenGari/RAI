import React from 'react';
import { Meta } from '@storybook/react';
import { DoubleCircularIndicator } from '../src';
import { DoubleCircularIndicatorProps } from '../src/DoubleCircularIndicator/DoubleCircularIndicator';

const meta: Meta = {
  title: 'RAI/DoubleCircularIndicator',
  component: DoubleCircularIndicator,
  argTypes: {},
};

export default meta;

const Template = (args: DoubleCircularIndicatorProps) => (
  <DoubleCircularIndicator {...args} />
);

export const Small = Template.bind({});
Small.args = {
  size: 'small',
} as DoubleCircularIndicatorProps;

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
} as DoubleCircularIndicatorProps;

export const Large = Template.bind({});
Large.args = {
  size: 'large',
} as DoubleCircularIndicatorProps;
