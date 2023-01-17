import React from 'react';
import './button.css';
import { COLORS } from '../../styles/colors';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  label: string;
  size?: string;
  labelColor? : string;
  tailStyle? : string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  backgroundColor,
  label,
  labelColor,
  tailStyle,
  ...props
}: ButtonProps) => {

  let tailstyle = ``;

  if(primary){
    backgroundColor = `${COLORS.accentColor}`
    tailstyle = `p-3 text-neutral-50 rounded-md font-semibold bg-blue-600 text-lg`
  }else{
    tailstyle = `${tailStyle} text-lg`;
  }

  return (
    <button
      type="button"
      className={tailstyle}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
