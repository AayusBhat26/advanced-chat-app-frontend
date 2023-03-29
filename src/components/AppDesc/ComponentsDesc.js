import React from 'react'
import {
      Box, Stack
} from "@mui/material"
import { Components_Desc } from '../../data'
import SingleComponentDesc from './SingleComponentDesc';

const ComponentsDesc = () => {
  return (
    <Stack direction={"column"}>
      {/* messages and voice call desc */}
      <Stack
        fontSize={"10px"}
        // width={"100%"}
        padding={"4px"}
        direction={"row"}
        sx={{
          width: "100%",
          height: "25vh",
        }}
      >
        {Components_Desc.slice(0, 2).map((singleComponentDesc) => {
          return (
            <SingleComponentDesc
              key={singleComponentDesc.id}
              title={singleComponentDesc.title}
              link={singleComponentDesc.link}
              image={singleComponentDesc.image}
            />
          );
        })}
      </Stack>
      {/*  */}
      <Stack
        fontSize={"10px"}
        // width={"100%"}
        padding={"4px"}
        direction={"row"}
        sx={{
          width: "100%",
          height: "25vh",
        }}
      >
        {Components_Desc.slice(2, 4).map((singleComponentDesc) => {
          return (
            <SingleComponentDesc
              key={singleComponentDesc.id}
              title={singleComponentDesc.title}
              link={singleComponentDesc.link}
              image={singleComponentDesc.image}
            />
          );
        })}
      </Stack>
    </Stack>
  );
}

export default ComponentsDesc
