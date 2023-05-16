import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Input,
  Slide,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { faker } from "@faker-js/faker";

// YUP import
import FormProvider from "../../components/hook-form/FormProvider";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextFieldAdv } from "../../components/hook-form";
import AutoCompleteAdv from "../../components/hook-form/AutoCompleteAdv";
import { ChatState } from "../../Context/ChatProvider";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../utils/axios";
import { UserMinus, UserPlus } from "phosphor-react";
//dummy name
const MEMBERS = ["M1", "M2", "M3"];
const userList = () => {
  return <Box></Box>;
};
// transition
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// user badge

const CreateGroupForm = ({ handleClose }) => {
  const [groupChatName, setGroupChatName] = useState();
  const [selectedUsers, setSelectedUsers] = useState([]);
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
  const dispatch = useDispatch();
  const defaultValues = {
    title: "",
    members: [],
  };
  // const methods = useForm({
  //   resolver: yupResolver(NewGroupSchema),
  //   defaultValues,
  // });
  // const onSubmit = async (data) => {
  //   // todo: try catch
  //   try {
  //     // api bazzi.
  //     console.log("data");
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };
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
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data);
      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async () => {
    if(!groupChatName || !selectedUsers){
      return 
    }
    console.log(token);
    try {
      const { data } = await axios.post(
        "/chatapi/group",
        {
          name: groupChatName,
          users: JSON.stringify(selectedUsers.map(u=>u._id)),
        },
         {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
        
      );
      setChats([data,...chats])
      // return
    } catch (error) {
      console.log(error.message);
      console.log("error creating chat");
    }
  };
  const handleGroup = (userToAdd) => {
    if (selectedUsers.includes(userToAdd)) {
      console.log(selectedUsers);
      return;
    }
    setSelectedUsers([...selectedUsers, userToAdd]);
    console.log(selectedUsers);
  };
  const handleDelete = (deleteUser) => {
    setSelectedUsers(selectedUsers.filter(sel=>sel._id!==deleteUser._id))
  };
  const userBadge = ({ user, handleFunction }) => {
    return (
      <Box>
        {user.firstName}
        <UserMinus size={20} />
      </Box>
    );
  };
  return (
    <FormProvider >
      <Stack spacing={5}>
        <Input
          placeholder="Group Name"
          type="text"
          onChange={(e) => setGroupChatName(e.target.value)}
        />
        <Stack direction={"row"} spacing={"10px"}>
          {selectedUsers.map((u) => {
            return (
              <Tooltip title="Click to remove" >
                <Box height={"50%"} width={"25%"} onClick={()=>{
                  handleDelete(u)
                }}>
                  <Stack
                    sx={{
                      cursor: "pointer",
                      backgroundColor: "#E0E0E0",
                      padding: "5px",
                      color: "black",
                      fontWeight: "1000",
                      borderRadius: "10px",
                      // marginLeft:"-5px",
                      textAlign: "center",
                    }}
                  >
                    {u.firstName}
                  </Stack>
                </Box>
              </Tooltip>
            );
          })}
        </Stack>
        <Input
          placeholder="Add Users"
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </Stack>
      {/* render selected users. */}

      {/* render friends  */}
      {loading ? (
        <Box width={"100%"} textAlign={"center"} marginTop={"10px"}>
          Loading
        </Box>
      ) : (
        searchResult.data?.slice(0, 4).map((user) => {
          return (
            <>
              <Stack
                width={"100%"}
                direction={"row"}
                marginTop={"10px"}
                sx={{
                  // backgroundColor: "#373737",
                  padding: "5px",
                  borderRadius: "10px",
                }}
              >
                {/* left side stack */}
                <Box width={"25%"}>
                  <Stack direction={"column"}>
                    <Avatar
                      src={faker.image.avatar()}
                      alt={faker.name.firstName}
                    />
                    <Typography marginLeft={"15px"} marginTop={"15px"}>
                      {user.level}
                    </Typography>
                  </Stack>
                </Box>
                {/* right side stack */}
                <Box width={"65%"}>
                  <Stack direction={"column"} width={"100%"}>
                    <Stack direction={"row"} width={"100%"}>
                      <Typography letterSpacing={"0.5px"}>
                        {user.firstName}
                      </Typography>
                      <Typography marginLeft={"10px"}>
                        {user.lastName}
                      </Typography>
                    </Stack>
                    <Typography marginTop={"5px"}>{user.email}</Typography>
                  </Stack>
                </Box>
                {/* plus */}
                <Box width={"10%"} marginTop={"15px"}>
                  {/* <Button >
                    <UserPlus size={22}/>
                  </Button> */}
                  <IconButton>
                    <Button onClick={() => handleGroup(user)}>Add</Button>
                  </IconButton>
                </Box>
                {/* <userBadge user={user} handleFunction={handleDelete}/> */}
              </Stack>
            </>
          );
        })
      )}
      <Typography color={"gray"} fontSize={"12px"} marginTop={"10px"}>
        *Note: Only friends could be search
      </Typography>
      <Stack marginTop={3} direction={"row"} marginLeft={"25%"}>
        <Button type="submit" variant="container" onClick={handleClose}>
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
