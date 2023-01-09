import React from 'react';
import { Sizes } from '../types';
import './QuaterCircularIndicator.css';
export interface QuaterCircularProps
  extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
  className?: string;
  size?: Sizes;
}
export const QuarterCircularIndicator: React.FC<QuaterCircularProps> = ({
  color = '#2a6776',
  className,
  size = 'small',
  ...rest
}) => {
  return (
    <div
      className={`quarter__circular__indicator ${!!className ? className : ''}`}
      style={{
        borderColor: !!color ? color : '#2a6776',
        width: size === 'small' ? 20 : size === 'medium' ? 30 : 40,
        height: size === 'small' ? 20 : size === 'medium' ? 30 : 40,
        borderWidth: size === 'small' ? 3 : size === 'medium' ? 5 : 7,
        borderTopColor: '#f5f5f5',
      }}
      {...rest}
    ></div>
  );
};
