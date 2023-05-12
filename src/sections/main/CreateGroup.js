import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Input,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
// YUP import
import FormProvider from "../../components/hook-form/FormProvider";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextFieldAdv } from "../../components/hook-form";
import AutoCompleteAdv from "../../components/hook-form/AutoCompleteAdv";
import { ChatState } from "../../Context/ChatProvider";
import { useSelector } from "react-redux";
import axios from "../../utils/axios";

//dummy name
const MEMBERS = ["M1", "M2", "M3"];

// transition
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CreateGroupForm = ({ handleClose }) => {
  const [groupChatName, setGroupChatName] = useState();
  const [selectedUsers, setSelectedUsers] = useState();
  const [search, setSearch] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const { chats, setChats } = ChatState();
  const token = useSelector((state) => state.auth.token);
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
    // handleSubmit,
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
  const handleSearch = async (query) => {
    setSearch(query);
    if (!query) {
      return;
    }
    try {
      setLoading(true);

      //searching for friends to add in group.
      const { data } = await axios.get(
        `/user/get-users-search?search=${search}`,
        {
          headers: { 
            "Content-Type" : "application/json",
            Authorization: `Bearer ${token}` },
        }
      );
      console.log(data);
      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = () => {};
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      {/* <Stack spacing={3}>
        <TextFieldAdv name="title" label="Search Users" />
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
       */}
      <Stack spacing={10}>
        <Input
          placeholder="Group Name"
          type="text"
          onChange={(e) => setGroupChatName(e.target.value)}
        />
        <Input
          placeholder="Add Users"
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </Stack>
      {/* render selected users. */}
      {/* render friends  */}
      <Stack marginTop={3} direction={"row"} marginLeft={"25%"}>
        <Button type="submit" variant="container">
          <Typography
            fontSize={"18px"}
            fontWeight={"1000"}
            color={"blueviolet"}
          >
            Cancel
          </Typography>
        </Button>
        <Button type="submit" variant="container" onClick={handleSubmit}>
          <Typography
            fontSize={"18px"}
            fontWeight={"1000"}
            color={"blueviolet"}
          >
            Create
          </Typography>
        </Button>
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
        <DialogTitle sx={{ mb: 3, mt: 1 }} textAlign={"center"}>
          Create New Group
        </DialogTitle>
        {/* body */}
        <DialogContent>
          {/* form for group creation */}
          <CreateGroupForm handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateGroup;
