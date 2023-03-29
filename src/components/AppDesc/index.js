import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import SignleCard from "./SignleCard";
import { faker } from "@faker-js/faker";
import "./index.css"
import ComponentsDesc from "./ComponentsDesc";
const index = () => {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} maxWidth={"100vw"} width={"84vw"}>

          {/* header */}
      <Stack >
        <Box>
          <Stack
            padding={2}
          >
            <Stack direction={"column"} padding={3}>
              <Typography fontSize={"20px"} fontWeight={"1000"}>
                Hello, {faker.name.firstName()}
              </Typography>
              <Typography fontSize={"12px"}>
                {faker.music.songName()}
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      {/* cards */}
      <Stack  direction={"row"}>
        {/* single card */}
            <SignleCard/>
            <Stack direction={"row"}>
              {/*  */}
                  <ComponentsDesc/>
            </Stack>
      </Stack>
    </Stack>
  );
};

export default index;
