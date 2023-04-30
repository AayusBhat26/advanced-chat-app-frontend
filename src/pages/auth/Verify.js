import { Stack, Typography } from '@mui/material'
import React from 'react'

const Verify = () => {
return (
  <>
    <Stack
      spacing={"15px"}
      sx={{
        mt: 6,
        mb: 5,
        position: "relative",
      }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography>Verify OTP</Typography>
      <Stack>
            <Typography>Email with OTP is sent to @mgial.com</Typography>
      </Stack>
    </Stack>
  </>
);
}

export default Verify
