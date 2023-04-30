import React from "react";
import FormProvider from "../../components/hook-form/FormProvider";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Alert,
  Button,
  Stack,
} from "@mui/material";
import { TextFieldAdv } from "../../components/hook-form";
import { ForgotPassword } from "../../redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";

const ResetPasswordForm = () => {
  const dispatch = useDispatch();
  // validation rules.
  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is Required")
      .email("Enter A valid email address"),
  });

  const defaultValues = {
    email: "demo@example.com",
  };

  const methods = useForm({
    resolver: yupResolver(ResetPasswordSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data) => {
    try {
      // api call for submitting form
      dispatch(ForgotPassword(data))
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
      <Stack spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.message} </Alert>
        )}
        <TextFieldAdv name="email" label="Email Address" />
      <Button
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        sx={{
          bgcolor: "text.primary",
          color: (theme) =>
            theme.palette.mode === "light" ? "common.white" : "grey.900",
          "&hover": {
            bgcolor: "text.primary",
            color: (theme) =>
              theme.palette.mode === "light" ? "common.white" : "grey.900",
          },
        }}
      >
        Send Your Request
      </Button>
      </Stack>
    </FormProvider>
  );
};

export default ResetPasswordForm;
