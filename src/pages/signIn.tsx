import Button from "@/components/Button";
import FormTextField from "@/components/forms/FormTextFiels";
import PageWrapper from "@/containers/PageWrapper";
import { SignInData } from "@/models/IUser";
import { login } from "@/store/actions/userActions";
import { useAppDispatch } from "@/store/store";
import Link from "next/link";
import Router from "next/router";
import { useEffect } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

const SignIn = () => {
  const formMethods = useForm<SignInData>();
  const { handleSubmit } = formMethods;
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<SignInData> = (data) => {
    dispatch(login(data));
    Router.push("/");
  };

  return (
    <PageWrapper>
      <FormProvider {...formMethods}>
        <form>
          <div className=" bg-transparent text-gray-600  max-w-lg mx-auto p-8 md:p-12 mt-8 mb-48 rounded-lg shadow-md">
            <h1 className="w-full mx-40 font-bold text-3xl  mb-16">Sign In</h1>
            <FormTextField
              label="Email"
              name="email"
              placeholder="email@example.com"
            />
            <FormTextField
              label="Password"
              name="password"
              placeholder="*****"
              isPassword={true}
            />
            <Button
              href=""
              onClick={handleSubmit(onSubmit)}
              button={"Sign In"}
            />
            <p className="pt-2 flex justify-center">u haven't account ?</p>
            <Link className="flex justify-center " href="/signUp">
              Sign Up
            </Link>
          </div>
        </form>
      </FormProvider>
    </PageWrapper>
  );
};
export default SignIn;
