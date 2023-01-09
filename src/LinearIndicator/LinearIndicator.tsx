import React from 'react';
import './LinearIndicator.css';
export interface LinearIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
  className?: string;
  indeterminate?: boolean;
  showProgress?: boolean;
  progress?: number;
}

export const LinearIndicator: React.FC<LinearIndicatorProps> = ({
  color = '#2a6776',
  className,
  indeterminate = true,
  showProgress = true,
  progress = 0,
  ...rest
}) => {
  return (
    <div className="linear__indicator__container">
      <div
        className={`linear__indicator ${
          indeterminate ? 'linear__indicator__indeterminate' : ''
        } ${!!className ? className : ''}`}
        {...rest}
      >
        <div
          style={{
            backgroundColor: color,
            width: indeterminate ? '30%' : `${progress}%`,
            height: 5,
            borderRadius: 5,
          }}
        />
      </div>
      {!indeterminate && showProgress ? <p>{`${progress}%`}</p> : null}
    </div>
  );
};
