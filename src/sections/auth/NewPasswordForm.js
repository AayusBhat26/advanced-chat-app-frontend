import React, { useState } from "react";
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
const NewPasswordForm = () => {
  const [showPasswordState, setShowPasswordState] = useState(false);
  // validation rules.
  const NewPasswordSchema = Yup.object().shape({
    newPassword: Yup.string().min(6, "Password must be at least 6 characters").required("Password is Required").length(6, 32),
    confirmPassword: Yup.string().required("Confirm Password is Required").length(6).oneOf([Yup.ref("newPassword"), null], 'Password must match'),
  });

  const defaultValues = {
    newPassword:"",
    confirmPassword:'',
  };

  const methods = useForm({
    resolver: yupResolver(NewPasswordSchema),
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
        <TextFieldAdv
          name="newPassword"
          label="New Password"
          type={showPasswordState ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton
                  onClick={() => {
                    setShowPasswordState(!showPasswordState);
                  }}
                >
                  {showPasswordState ? <Eye /> : <EyeClosed />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextFieldAdv
          name="confirmPassword"
          label="Confirm Password"
          type={showPasswordState ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton
                  onClick={() => {
                    setShowPasswordState(!showPasswordState);
                  }}
                >
                  {showPasswordState ? <Eye /> : <EyeClosed />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
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
        Save.
      </Button>
      </Stack>
    </FormProvider>
  );
};

export default NewPasswordForm;
