import React from 'react';

export enum ButtonMode {
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  danger = 'danger',
  warning = 'warning',
  info = 'info',
  light = 'light',
  dark = 'dark',
  link = 'link',
}

export interface IButtonProps {
  className?: string;
  mode?: ButtonMode;
  label?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ className, mode, label, onClick }: IButtonProps): JSX.Element => {
  return (
    <button className={[`btn`, mode ? `btn-${mode}` : '', className].join(' ')} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
