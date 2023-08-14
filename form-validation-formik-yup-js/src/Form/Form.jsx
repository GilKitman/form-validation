import { Button, Input } from "@mui/material";
import { useFormik, FormikProvider } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import * as zod from "zod";
import * as yup from "yup";
import { NestedComponent } from "./NestedComponent";

export const locations = ["Dublin", "Manchester", "USA", "Other"];

const schema = zod.object({
  firstname: zod.string().min(3),
  lastname: zod.string().min(2),
  location: zod.enum(locations),
});

const onSubmit = (formData) => alert(JSON.stringify(formData, null, 2));

export const Form = () => {
  const formik = useFormik({
    initialValues: { firstname: "", lastname: "", location: "Dublin" },
    validationSchema: toFormikValidationSchema(schema),
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
