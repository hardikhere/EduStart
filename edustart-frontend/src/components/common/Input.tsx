import React from "react";
interface IInput
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  textArea?: boolean;
}

const Input: React.FC<IInput> = (props) => {
  if (props.textArea) {
    return (
      <textarea
        type="text"
        cols={3}
        className="rounded-md border border-slate-300
          p-1
      focus:outline-none  focus:border-sky-500 font-light"
        {...props}
      />
    );
  }
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
