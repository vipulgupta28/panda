import React from 'react';

interface ButtonProps {
  primary?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  primary = true, 
  children, 
  onClick, 
  className = '' 
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105
        ${primary 
          ? 'bg-gradient-to-r from-gray-900 to-black text-white shadow-lg hover:shadow-xl' 
          : 'bg-white text-black border-2 border-black hover:bg-gray-100'}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;