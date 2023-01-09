import React from 'react';
import { Sizes } from '../types';
import './DoubleCircularIndicator.css';

export interface DoubleCircularIndicatorProps
  extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
  className?: string;
  size?: Sizes;
}
export const DoubleCircularIndicator: React.FC<DoubleCircularIndicatorProps> = ({
  color = '#2a6776',
  className,
  size = 'small',
  ...rest
}) => {
  return (
    <div
      className={`double__circular__indicator ${!!className ? className : ''}`}
      style={{
        borderBottomColor: !!color ? color : '#2a6776',
        borderTopColor: !!color ? color : '#2a6776',
        width: size === 'small' ? 20 : size === 'medium' ? 30 : 40,
        height: size === 'small' ? 20 : size === 'medium' ? 30 : 40,
        borderWidth: size === 'small' ? 3 : size === 'medium' ? 5 : 7,
      }}
      {...rest}
    ></div>
  );
};
