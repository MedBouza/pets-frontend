import Button from "@/components/Button";
import FileUpLoader from "@/components/FileUpload";
import FormTextField from "@/components/forms/FormTextFiels";
import PageWrapper from "@/containers/PageWrapper";
import { SignUpData } from "@/models/IUser";
import { signUp } from "@/store/actions/userActions";
import { useAppDispatch } from "@/store/store";
import Link from "next/link";
import Router from "next/router";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import React, { useEffect } from "react";

const SignUp = () => {
  const formMethods = useForm<SignUpData>();

  const { handleSubmit } = formMethods;
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<SignUpData> = (data) => {
    dispatch(signUp(data));
    Router.push("/");
  };

  return (
    <PageWrapper>
      <FormProvider {...formMethods}>
        <form>
          <div
            className="
            bg-transparent
            text-gray-600
            max-w-lg
            mx-auto
            p-8
            md:p-12
            mt-8
            mb-32
            rounded-lg
            shadow-md"
          >
            <h1 className="w-full mx-40 font-bold text-3xl mb-11">Sign Up</h1>
            <FormTextField
              name="firstname"
              placeholder="first name"
              label="First Name"
            />
            <FormTextField
              name="lastname"
              placeholder="last name"
              label="Last Name"
            />
            <FileUpLoader name="avatar" />
            <FormTextField name="email" placeholder="email" label="Email" />
            <FormTextField
              label="Password"
              name="password"
              placeholder="*****"
              isPassword={true}
            />
            <Button button="Sign Up" onClick={handleSubmit(onSubmit)} />
            <p className="flex justify-center">u have an account ?</p>
            <Link className="flex justify-center" href="/signIn">
              Sign in
            </Link>
          </div>
        </form>
      </FormProvider>
    </PageWrapper>
  );
};
export default SignUp;
