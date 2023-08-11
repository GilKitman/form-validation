import { Button, Input } from "@mui/material";
import * as zod from "Zod";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { NestedComponent } from "./NestedComponent";

export const locations = ["Dublin", "Manchester", "USA", "Other"];

const schema = zod.object({
  firstname: zod.string().min(3),
  lastname: zod.string().min(2),
  location: zod.enum(locations),
});

export const Form = () => {
  const form = useForm({
    defaultValues: { firstname: "", lastname: "", location: "Dublin" },
    reValidateMode: "onBlur",
    mode: "all",
    resolver: zodResolver(schema),
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = form;

  const onSubmit = (formData) => alert(JSON.stringify(formData, null, 2));

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: "16px",
            width: "256px",
          }}
        >
          <Controller
            control={control}
            name="firstname"
            render={({ field }) => (
              <Input {...field} error={!!errors.firstname} />
            )}
          />
          <Controller
            control={control}
            name="lastname"
            render={({ field }) => (
              <Input {...field} error={!!errors.lastname} />
            )}
          />

          <NestedComponent />
          <Button type="submit" disabled={!isValid}>
            Submit
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
