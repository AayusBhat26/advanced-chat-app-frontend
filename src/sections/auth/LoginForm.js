import React, { useState } from "react";
import FormProvider from "../../components/hook-form/FormProvider";
import {
  Link as RouterLink 
} from "react-router-dom";
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
import { LoginUser } from "../../redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";
const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPasswordState, setShowPasswordState] = useState(false);
  // validation rules.
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is Required")
      .email("Enter A valid email address"),
    password: Yup.string().required("Password is Required"),
  });

  const defaultValues = {
    email: "demo@example.com",
    password: "demo1234",
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
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
      console.log(data);

      dispatch(LoginUser(data))
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
        <TextFieldAdv
          name="password"
          label="Password"
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
      </Stack>
      <Stack
        alignItems={"flex-end"}
        sx={{
          my: 2,
        }}
      >
        <Link component={RouterLink} variant="body2" color="inherit" underline="always" to="/auth/reset-password">
          Forget Password ?
        </Link>
      </Stack>
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
        Login
      </Button>
    </FormProvider>
  );
};

export default LoginForm;
