import React from 'react';
import { Meta } from '@storybook/react';
import { RippleIndicator } from '../src';
import { RippleIndicatorProps } from '../src/RippleIndicator/RippleIndicator';

const meta: Meta = {
  title: 'RAI/RippleIndicator',
  component: RippleIndicator,
  argTypes: {},
};

export default meta;

const Template = (args: RippleIndicatorProps) => <RippleIndicator {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
} as RippleIndicatorProps;

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
} as RippleIndicatorProps;

export const Large = Template.bind({});
Large.args = {
  size: 'large',
} as RippleIndicatorProps;
