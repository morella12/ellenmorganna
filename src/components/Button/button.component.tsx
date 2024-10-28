import './style.scss';
import React from 'react';
import { ButtonProps, TypeButton } from './interfaces';

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  type = TypeButton.button,
  disabled = false,
  className = ''
}) => {
    return (
      <button
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={`button ${className}`}
      >
        {children}
      </button>
    );
  };