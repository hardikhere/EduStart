import React from "react";

const Chip: React.FC<React.ButtonHTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div
      className={`pl-2 text-sm pr-2 bg-pink-100 text-slate-500 rounded-full ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Chip;
