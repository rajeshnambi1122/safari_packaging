import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyle = "px-6 py-2.5 md:px-8 md:py-3 rounded-[35px] text-base md:text-lg font-serif inline-flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-[0px_6px_5px_0px_rgba(0,0,0,0.25)]";
  const variants = {
    primary: "bg-[var(--color-primary)] text-white border-0",
    secondary: "bg-white text-[var(--color-primary)] border-[3px] border-[var(--color-primary)]"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
