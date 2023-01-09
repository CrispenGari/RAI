import React from 'react';
import { Meta } from '@storybook/react';
import { LinearIndicator } from '../src';
import { LinearIndicatorProps } from '../src/LinearIndicator/LinearIndicator';

const meta: Meta = {
  title: 'RAI/LinearIndicator',
  component: LinearIndicator,
  argTypes: {},
};

export default meta;

const Template = (args: LinearIndicatorProps) => <LinearIndicator {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
} as LinearIndicatorProps;

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
} as LinearIndicatorProps;

export const Large = Template.bind({});
Large.args = {
  size: 'large',
} as LinearIndicatorProps;
