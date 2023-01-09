import React from 'react';
import { Sizes } from '../types';
import './BoxIndicator.css';

export interface BoxIndicatorProps
  extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
  className?: string;
  size?: Sizes;
  showProgress?: boolean;
  progress?: number;
}

export const BoxIndicator: React.FC<BoxIndicatorProps> = ({
  size = 'small',
  className,
  color = '#2a6776',
  showProgress = false,
  progress = 0,
  ...rest
}) => {
  return (
    <div className={`box__indicator ${!!className ? className : ''}`} {...rest}>
      <div className="box__indicator__row">
        <div
          className="box box-1"
          style={{
            backgroundColor: color,
            margin: 1,
            width: size === 'small' ? 10 : size === 'medium' ? 20 : 30,
            height: size === 'small' ? 10 : size === 'medium' ? 20 : 30,
          }}
        ></div>
        <div
          className="box box-2"
          style={{
            backgroundColor: color,
            margin: 1,
            width: size === 'small' ? 10 : size === 'medium' ? 20 : 30,
            height: size === 'small' ? 10 : size === 'medium' ? 20 : 30,
          }}
        ></div>
      </div>
      <div className="box__indicator__row">
        <div
          className="box box-3"
          style={{
            backgroundColor: color,
            margin: 1,
            width: size === 'small' ? 10 : size === 'medium' ? 20 : 30,
            height: size === 'small' ? 10 : size === 'medium' ? 20 : 30,
          }}
        ></div>
        <div
          className="box box-4"
          style={{
            backgroundColor: color,
            margin: 1,
            width: size === 'small' ? 10 : size === 'medium' ? 20 : 30,
            height: size === 'small' ? 10 : size === 'medium' ? 20 : 30,
          }}
        ></div>
      </div>
      {showProgress ? <p>{`${progress}%`}</p> : null}
    </div>
  );
};
