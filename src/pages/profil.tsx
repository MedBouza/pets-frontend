import Button from "@/components/Button";
import FormTextField from "@/components/forms/FormTextFiels";
import PageWrapper from "@/containers/PageWrapper";
import { IUser } from "@/models/IUser";
import { updateUser } from "@/store/actions/userActions";
import { useAppDispatch, useAppSelector } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

const Profil = () => {
  const currentUser = useAppSelector((state) => state.user.currentUser);
  const formMethods = useForm<IUser>();
  const { handleSubmit } = formMethods;
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<IUser> = (data) => {
    dispatch(updateUser(data));
  };
  return (
    <PageWrapper>
      <FormProvider {...formMethods}>
        <div className="bg-transparent text-gray-600  max-w-lg mx-auto p-8 md:p-12 mt-8 mb-10 shadow-md rounded-md">
          <h1 className="w-full mx-40 font-bold text-3xl mb-14">Profil</h1>
          <Image
            alt="profil picture"
            src="/logo.png"
            className="rounded-full mx-48 w-auto mb-5"
            width={1000}
            height={1000}
          />

          <FormTextField
            name="firstname"
            label="First Name"
            defaultValue={currentUser?.firstname}
          />
          <FormTextField
            name="lastname"
            defaultValue={currentUser?.lastname}
            label="Last Name"
          />
          <FormTextField
            name="email"
            label="Email"
            defaultValue={currentUser?.email}
          />

          <Button button="Edit Profil" onClick={handleSubmit(onSubmit)} />

          <Link
            href="/addpet"
            className="bg-pink-200 rounded-sm w-full flex justify-center p-3 text-white uppercase font-bold hover:bg-pink-500"
          >
            Add Pet
          </Link>
        </div>
      </FormProvider>
    </PageWrapper>
  );
};
export default Profil;
