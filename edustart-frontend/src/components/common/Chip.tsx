import React from "react";

const Chip: React.FC<React.ButtonHTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div className={`pl-2 text-sm pr-2 rounded-full ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Chip;
