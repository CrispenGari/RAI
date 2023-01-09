import React from 'react';
import { Meta } from '@storybook/react';
import { CircularDotIndicator } from '../src';
import { CircularDotIndicatorProps } from '../src/CircularDotIndicator/CircularDotIndicator';

const meta: Meta = {
  title: 'RAI/CircularDotIndicator',
  component: CircularDotIndicator,
  argTypes: {},
};

export default meta;

const Template = (args: CircularDotIndicatorProps) => (
  <CircularDotIndicator {...args} />
);

export const Small = Template.bind({});
Small.args = {
  size: 'small',
} as CircularDotIndicatorProps;

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
} as CircularDotIndicatorProps;

export const Large = Template.bind({});
Large.args = {
  size: 'large',
} as CircularDotIndicatorProps;
