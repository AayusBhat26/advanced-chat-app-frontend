import React, { useState } from "react";
import FormProvider from "../../components/hook-form/FormProvider";
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
import { RegisterUser } from "../../redux/slices/auth";
import {useDispatch} from "react-redux";
const RegisterForm = () => {

  // dispatch
  const dispatch = useDispatch();
  const [showPasswordState, setShowPasswordState] = useState(false);
  // validation rules.
  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .required("Email is Required")
      .email("Enter A valid email address"),
    password: Yup.string().required("Password is Required")
  });

  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "demo@example.com",
    password: "demo1234",
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    try {
      // api call for submitting form
      dispatch(RegisterUser(data))
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
        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
          spacing={2}
        >
          {/* full name stack */}
          <TextFieldAdv name="firstName" label="Firstname"></TextFieldAdv>
          <TextFieldAdv name="lastName" label="Lastname"></TextFieldAdv>
        </Stack>
        <TextFieldAdv name="email" label="Email"></TextFieldAdv>
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
        ></TextFieldAdv>
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
        Create Account
      </Button>
    </FormProvider>
  );
};

export default RegisterForm;
