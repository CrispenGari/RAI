import React from 'react';
import { Sizes } from '../types';
import './CircularDotIndicator.css';
export interface CircularDotIndicatorProps
  extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
  className?: string;
  size?: Sizes;
}
export const CircularDotIndicator: React.FC<CircularDotIndicatorProps> = ({
  color = '#2a6776',
  className,
  size = 'small',
  ...rest
}) => {
  return (
    <div
      className={`circular__dot__indicator ${!!className ? className : ''}`}
      style={{
        width: size === 'small' ? 20 : size === 'medium' ? 30 : 40,
        height: size === 'small' ? 20 : size === 'medium' ? 30 : 40,
        borderWidth: size === 'small' ? 3 : size === 'medium' ? 5 : 7,
        position: 'relative',
      }}
      {...rest}
    >
      <div
        className="circular__dot__indicator__dot"
        style={{
          backgroundColor: !!color ? color : '#2a6776',
          width: size === 'small' ? 5 : size === 'medium' ? 7 : 9,
          height: size === 'small' ? 5 : size === 'medium' ? 7 : 9,
          position: 'absolute',
          borderRadius: '50%',
          top: size === 'small' ? 0 - 5 : size === 'medium' ? 0 - 7 : 0 - 9,
        }}
      />
    </div>
  );
};
