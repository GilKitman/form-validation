import { useFormContext, useController } from "react-hook-form";
import { MenuItem, Select } from "@mui/material";
import { FormValues, locations } from "./Form";

export const NestedComponent = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormValues>();

  const { field } = useController({
    control,
    name: "location",
  });
  return (
    <Select {...field} error={!!errors.location}>
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
