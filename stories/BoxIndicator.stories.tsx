import React from 'react';
import { Meta } from '@storybook/react';
import { BoxIndicator } from '../src';
import { BoxIndicatorProps } from '../src/BoxIndicator/BoxIndicator';

const meta: Meta = {
  title: 'RAI/BoxIndicator',
  component: BoxIndicator,
  argTypes: {},
};

export default meta;

const Template = (args: BoxIndicatorProps) => <BoxIndicator {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
} as BoxIndicatorProps;

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
} as BoxIndicatorProps;

export const Large = Template.bind({});
Large.args = {
  size: 'large',
} as BoxIndicatorProps;
