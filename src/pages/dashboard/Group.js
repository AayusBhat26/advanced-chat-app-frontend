import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const Group = () => {
  return (
    <>
      <Stack
        direction={"row"}
        sx={{
          width: "100%",
        }}
      >
        {/* left */}
        <Box
          sx={{
            height: "100vh",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? "#F8FAF2"
                : theme.palette.background,
            width: 320,
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          }}
        >
          <Stack
            padding={3}
            spacing={2}
            sx={{
              maxHeight: "100vh",
            }}
          >
            <Stack direction={"column"}>
              <Typography variant='h5'>Groups</Typography>
            </Stack>
            <Stack sx={{width:"100%"}}>
                  
            </Stack>
          </Stack>
        </Box>

        {/* right */}
      </Stack>
    </>
  );
}

export default Group
