import React from 'react';
import './button.css';
import { COLORS } from '../../styles/colors';

/**
 * Primary UI component for user interaction
 */
export const PageButton = ({children, ...props}: any) => {

  return (
    <button
      type="button"
      className="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
      {...props}
    >
      {children}
    </button>
  )
};
