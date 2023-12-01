import React from "react";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`pl-2 pr-2 h-full max-h-20 rounded-md text-slate-100 
        flex justify-center items-center gap-1 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
