import React, { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import Textfield, { BaseTextFielProps } from "../Textfield";

interface FormInputProps extends BaseTextFielProps {
  name: string;
}
const FormTextField: FC<FormInputProps> = ({ label, name, ...rest }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange } }) => (
        <Textfield value={value} onChange={onChange} label={label} {...rest} />
      )}
    />
  );
};

export default FormTextField;
