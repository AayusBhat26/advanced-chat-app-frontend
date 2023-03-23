import React, { useCallback, useState } from "react";
import FormProvider from "../../components/hook-form/FormProvider";
import { Link as RouterLink } from "react-router-dom";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Alert,
  Button,
  IconButton,
  InputAdornment,
  Link,
  Stack,
} from "@mui/material";
import { TextFieldAdv } from "../../components/hook-form";
import { Eye, EyeClosed } from "phosphor-react";
const ProfileForm = () => {
  // validation rules
  const ProfileSchema = Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    about: Yup.string().required("About is Required").length(4, 6),
    avatarUrl: Yup.string().required("Avatar is Required").nullable(false)
  });

  const defaultValues = {
    name: "demo name",
    about: "About",
  };

  const methods = useForm({
    resolver: yupResolver(ProfileSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    setError,
    setValue,
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;
//   with tht help pf watch function we can have all the values from form.
  const values = watch();
  const handleDrop = useCallback((acceptedFiles)=>{
      const file = acceptedFiles[0];
      const newFile = Object.assign(file, {
            preview:URL.createObjectURL(file)
      })
      if(file){
            setValue("avatarUrl", newFile, {
                  shouldValidate:true
            })
      }
  }, [setValue])
  const onSubmit = async (data) => {
    try {
      // api call for submitting form
      console.log(data);
    } catch (error) {
      console.log(error);
      reset();
      setError("afterSubmit", {
        ...error,
        message: error.message,
      });
    }
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4} marginTop={6}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.message} </Alert>
        )}
        <TextFieldAdv
          name="name"
          label="Name"
          helperText={"* This name is visible to your contacts."}
        />
        <TextFieldAdv
          multiline
          rows={8}
          maxRows={5}
          name="about"
          label="About"
        />
        <Button color="primary" size="large" type="submit" variant="outlined"> Save</Button>
      </Stack>
    </FormProvider>
  );
};

export default ProfileForm;
