import { IMAGE_BASE_URI } from "@/constants/config";
import Image from "next/image";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type FileUpLoaderProps = {
  name: string;
};
const FileUpLoader: React.FC<FileUpLoaderProps> = ({ name }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange } }) => (
        <>
          <div className="mb-2 flex justify-between items-center">
            <div>
              <span className="block mb-2">Choose profile photo</span>
              {value && (
                <img alt="image" width={100} height={100} src={value}></img>
              )}
              <input
                className="block text-sm mb-2 text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                type="file"
                name={name}
                onChange={onChange}
                multiple={false}
                accept="image/jpg, image/png, image/jpeg"
              />
            </div>
          </div>
          <p
            className={`text-red-500 text-xs italic mb-2 ${
              errors[name] ? "visible" : "invisible"
            }`}
          >
            {errors[name] && (errors[name]?.message as unknown as string)}
          </p>
        </>
      )}
    />
  );
};

export default FileUpLoader;
