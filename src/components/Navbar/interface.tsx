import { MouseEventHandler } from "react";

export interface NavbarPros {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  disabled?: boolean;
  className?: string;
};