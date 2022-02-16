/**
 * @description      :
 * @author           :
 * @group            :
 * @created          : 15/02/2022 - 10:22:56
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 15/02/2022
 * - Author          :
 * - Modification    :
 **/
import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TextField, Grid } from "@material-ui/core";

function FormInput({ name, label, required }) {
  const { control } = useFormContext();
  const isError = false;

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        render={({ field }) => <TextField {...field} label={label} required />}
        name={name}
        control={control}
        label={label}
        fullWidth
        required={required}
        error={isError}
      />
    </Grid>
  );
}

export default FormInput;
