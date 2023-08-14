import { useFormContext, useController } from "react-hook-form";
import { MenuItem, Select } from "@mui/material";
import { FormValues, locations } from "./Form";

export const NestedComponent = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormValues>();

  const {
    field: { onChange, ...restField },
  } = useController({
    control,
    name: "location",
  });
  return (
    <Select
      {...restField}
      onChange={(event) => {
        alert(
          "We can perform some logic on the event, and then pass it to the form's onChange callback"
        );
        onChange(event);
      }}
      error={!!errors.location}
    >
      {locations.map((location) => {
        return (
          <MenuItem key={location} value={location}>
            {location}
          </MenuItem>
        );
      })}
      <MenuItem key={"Gil"} value={"Gil"}>
        {"Gil"}
      </MenuItem>
    </Select>
  );
};
