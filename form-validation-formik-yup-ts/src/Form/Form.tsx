import { Button, Input } from "@mui/material";
import { useFormik, FormikProvider } from "formik";
import * as yup from "yup";
import { NestedComponent } from "./NestedComponent";

export const locations = ["Dublin", "Manchester", "USA", "Other"] as const;

const schema = yup.object({
  firstname: yup.string().min(3),
  lastname: yup.string().min(2),
  location: yup.string().oneOf(locations),
});

export type FormValues = {
  firstname: string;
  lastname: string;
  location: "Dublin" | "Manchester" | "USA" | "Other";
};

const onSubmit = (formData: FormValues) =>
  alert(JSON.stringify(formData, null, 2));

export const Form = () => {
  const formik = useFormik<FormValues>({
    initialValues: { firstname: "", lastname: "", location: "Dublin" },
    validationSchema: schema,
    onSubmit,
    validateOnChange: true,
    validateOnBlur: true,
  });

  const { handleBlur, handleChange, handleSubmit, errors, values, isValid } =
    formik;

  return (
    <FormikProvider value={formik}>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: "16px",
            width: "256px",
          }}
        >
          <Input
            name="firstname"
            error={!!errors.firstname}
            placeholder="First Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstname}
          />
          <Input
            name="lastname"
            error={!!errors.lastname}
            placeholder="Last Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastname}
          />
          <NestedComponent name={"location"} />
          <Button type="submit" disabled={!isValid}>
            Submit
          </Button>
        </div>
      </form>
    </FormikProvider>
  );
};
