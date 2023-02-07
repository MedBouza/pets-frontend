import { SignInData } from "@/models/IUser";
import Link from "next/link";
import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
type Buttonprops = {
  button: string;
  onClick: () => {};
};

const Button: FC<Buttonprops> = ({ button, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-pink-200 rounded-sm w-full p-3 mt-1 mb-1 text-white uppercase font-bold hover:bg-pink-500"
      >
        {button}
      </button>
    </div>
  );
};

export default Button;
