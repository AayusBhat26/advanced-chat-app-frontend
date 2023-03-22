import PropTypes from "prop-types";
// form
import { useFormContext, Controller } from "react-hook-form";
import {  Autocomplete, TextField,  } from "@mui/material";
AutoCompleteAdv.prototype = {
  name: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.node,
};
function AutoCompleteAdv({ name, label,helperText, ...other }) {
  const { control, setValue } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          {...field}
          fullWidth
          value={
            typeof field.value === "number" && field.value === 0
              ? ""
              : field.value
          }
          onChange={(event, newValue) =>
            setValue(name, newValue, {
              shouldValidate: true,
            })
          }
          error={!!error}
          {...other}
          renderInput={(params) => (
            <TextField
              label={label}
              error={!!error}
              helperText={error ? error.message : helperText}
              {...params}
            />
          )}
        />
      )}
    />
  );
}
export default AutoCompleteAdv;
