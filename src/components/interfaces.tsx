import { MouseEvent, MouseEventHandler } from 'react';

export enum TypeButton {
  button = 'button',
  submit = 'submit',
  reset = 'reset',
}

export interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  type: TypeButton;
  disabled?: boolean;
  className?: string;
}
