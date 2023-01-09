import React from 'react';
import { Sizes } from '../types';
import './RippleIndicator.css';
export interface RippleIndicatorProps
  extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
  className?: string;
  size?: Sizes;
}

export const RippleIndicator: React.FC<RippleIndicatorProps> = ({
  color = '#2a6776',
  className,
  size = 'small',
  ...rest
}) => {
  return (
    <div
      className={`ripple__indicator ${!!className ? className : ''}`}
      style={{
        width: size === 'small' ? 20 : size === 'medium' ? 30 : 40,
        height: size === 'small' ? 20 : size === 'medium' ? 30 : 40,
        backgroundColor: color,
      }}
      {...rest}
    />
  );
};
