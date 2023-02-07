import React, { InputHTMLAttributes } from "react";

export interface BaseTextFielProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isPassword?: boolean;
}
const Textfield: React.FC<BaseTextFielProps> = ({
  isPassword,
  label,
  ...rest
}) => {
  return (
    <div className="block">
      <label className=" ml-3">{label}</label>
      <input
        className="mt-1 block w-full px-3 py-2 bg-white border border-transparent rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500"
        {...rest}
        type={isPassword ? "password" : rest.type}
      />
    </div>
  );
};

export default Textfield;
