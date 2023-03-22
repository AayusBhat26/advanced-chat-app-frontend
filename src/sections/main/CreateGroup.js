import React from 'react'
import { Box, Button, Dialog, DialogContent, DialogTitle, Slide, Stack, Typography} from '@mui/material'
// YUP import 
import FormProvider from "../../components/hook-form/FormProvider";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextFieldAdv } from '../../components/hook-form';
import AutoCompleteAdv from '../../components/hook-form/AutoCompleteAdv';
//dummy name 
const MEMBERS=["M1","M2", "M3" ]

// transition 
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



const CreateGroupForm = ({ handleClose }) => {
  const NewGroupSchema = Yup.object().shape({
    // name of the group
    // members of the group.
    title: Yup.string().required("Title is required"),
    members: Yup.array().min(
      1,
      "Can't create a group with less than one member"
    ),
  });
  const defaultValues = {
    title: "",
    members: [],
  };
  const methods = useForm({
    resolver: yupResolver(NewGroupSchema),
    defaultValues,
  });
  const {
    reset,
    watch,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful, isValid },
  } = methods;
  const onSubmit = async (data) => {
    // todo: try catch
    try {
      // api bazzi.
      console.log("data");
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <TextFieldAdv name="title" label="title" />
        <AutoCompleteAdv
          name="members"
          label="Members"
          multiple
          freesolo
          options={MEMBERS.map((singleOption) => singleOption)}
          ChipProps={{
            size: "string",
          }}
        />
        {/* button stack  */}
        <Stack spacing={2} direction={"row"}>
          <Box
            width={"100%"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button type="submit" variant="container" onClick={handleClose}>
              <Typography fontSize={"18px"} fontWeight={"1000"} color={"red"}>
                Cancel
              </Typography>
            </Button>
            <Button type="submit" variant="container">
              <Typography fontSize={"18px"} fontWeight={"1000"} color={"blueviolet"}>
                Create
              </Typography>
            </Button>
          </Box>
        </Stack>
      </Stack>
    </FormProvider>
  );
};


const CreateGroup = ({ open, handleClose }) => {
  return (
    <>
      <Dialog
        fullWidth
        maxWidth="xs"
        open={open}
        TransitionComponent={Transition}
        keepMounted
        sx={{
          p: 5,
        }}
      >
        {/* title */}
        <DialogTitle sx={{mb:3, mt:1}} textAlign={"center"}>Create New Group</DialogTitle>
        {/* body */}
        <DialogContent>
          {/* form for group creation */}
          <CreateGroupForm handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateGroup
