import React from "react";

const Input: React.FC<React.HTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <input
      type="text"
      className="rounded-md border border-slate-300
          p-1
      focus:outline-none  focus:border-sky-500 font-light"
      {...props}
    />
  );
};

export default Input;
