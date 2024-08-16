import { MouseEvent } from 'react';

export enum TypeButton {
  button = 'button',
  submit = 'submit',
  reset = 'reset',
}

export interface ButtonProps {
  onClick:  (event: MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  type: TypeButton;
  disabled?: boolean;
  className?: string;
}
