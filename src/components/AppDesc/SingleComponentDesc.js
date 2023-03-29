import { Box, Button, Link, Typography } from "@mui/material";
import React from "react";

const SingleComponentDesc = ({ title, link, image }) => {
  return (
    <Box
      width={"100%"}
      height={"100%"}
      sx={{
        marginLeft: "10px",
        border: "1px solid black",
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      {/* {title}{link}  */}
      {/* image */}
      <Box width={"100%"}>
        {/* <img src={"../../../public/images/image-1"} alt="image" /> */}
      </Box>
      {/* content */}
      <Box width={"100%"} marginBottom={"10px"} marginLeft={"10px"}>
        <Typography textAlign={"center"} variant="h5">
          {title}
        </Typography>
        {/* <Typography fontSize={"12px"}>{link}</Typography> */}
      </Box>
      {/* about the app. */}
      <Box>
        <Typography variant="caption">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa deserunt
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: "30%",
        }}
      >
        <Button
          sx={{
            width: "100%",
          }}
        >
          <Typography textAlign={"center"}>test</Typography>
          <Link />
        </Button>
      </Box>
    </Box>
  );
};

export default SingleComponentDesc;
