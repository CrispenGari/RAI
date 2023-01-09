import React from 'react';
import { Meta } from '@storybook/react';
import { QuarterCircularIndicator } from '../src';
import { QuaterCircularProps } from '../src/QuaterCircularIndicator/QuaterCircularIndicator';

const meta: Meta = {
  title: 'RAI/QuarterCircularIndicator',
  component: QuarterCircularIndicator,
  argTypes: {},
};

export default meta;

const Template = (args: QuaterCircularProps) => (
  <QuarterCircularIndicator {...args} />
);

export const Small = Template.bind({});
Small.args = {
  size: 'small',
} as QuaterCircularProps;

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
} as QuaterCircularProps;

export const Large = Template.bind({});
Large.args = {
  size: 'large',
} as QuaterCircularProps;
