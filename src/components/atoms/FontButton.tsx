import React from 'react'

interface FontButtonProps {
  backgroundColor?: string;
  textColor: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const FontButton = ({
  backgroundColor,
  textColor,
  size,
  label,
  ...props
}: FontButtonProps) => {

  const textsize = size === 'small' ? 'text-sm' : 'medium' ? 'text-base' : 'text-lg'

  return (
    <button
      type="button"
      className={`font-medium ${textsize} ${textColor}`}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
