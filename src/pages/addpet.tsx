import Button from "@/components/Button";
import FormTextField from "@/components/forms/FormTextFiels";
import PageWrapper from "@/containers/PageWrapper";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

type PetData = {
  name: string;
  age: number;
};
const Addpet = () => {
  const formMethods = useForm<PetData>({ defaultValues: { name: "" } });
  const {
    handleSubmit,

    formState: { errors },
  } = formMethods;
  const onSubmit: SubmitHandler<PetData> = (data) => console.log(data);

  return (
    <PageWrapper>
      <FormProvider {...formMethods}>
        <div className="bg-transparent  max-w-lg mx-auto p-8 md:p-12 mt-8 mb-72 rounded-md shadow-md">
          <h1 className="flex justify-center text-2xl mb-8">Add ur pet</h1>
          <FormTextField name="Pet Name" placeholder="Pet Name" />
          <FormTextField name="Age" placeholder="xxx mois" />
          <Button button="Add Pet" onClick={handleSubmit(onSubmit)} />
        </div>
      </FormProvider>
    </PageWrapper>
  );
};

export default Addpet;
