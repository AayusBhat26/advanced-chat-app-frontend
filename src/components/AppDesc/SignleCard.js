import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const SignleCard = () => {
  return (
    <Box>
      <Stack
        width={"30vw"}
        height={"50vh"}
        marginLeft={"10px"}
        marginTop={"8px"}
        sx={{
          // border: "1px solid black",
          borderRadius: "8px",
          padding: "12px",
          backgroundColor: "#6150c3",
          color: "white",
        }}
      >
        <Box>
          <Typography variant="h6" textAlign={"center"}>
            PROD
          </Typography>
          <Typography
            fontSize={"10px"}
            marginTop={"16px"}
            // marginLeft={"8px"}
          >
            A Producivity Web Application.
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default SignleCard
