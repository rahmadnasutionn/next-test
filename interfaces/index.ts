import { MouseEventHandler } from "react";

export interface CustomButtonType {
  isDisabled?: boolean;
  buttonType?: 'button' | 'submit';
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>
}