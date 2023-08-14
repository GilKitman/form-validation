import { MenuItem, Select } from "@mui/material";
import { useField } from "formik";
import { locations } from "./Form";

export const NestedComponent = ({ name }) => {
  const [field, meta] = useField({ name });
  const { onChange, ...restField } = field;

  return (
    <Select
      {...restField}
      onChange={(event) => {
        alert(
          "We can perform some logic on the event, and then pass it to the form's onChange callback"
        );
        onChange(event);
      }}
      error={!!meta.error}
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
