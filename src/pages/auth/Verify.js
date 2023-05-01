import { Stack, Typography } from '@mui/material'
import React from 'react'
import VerifyForm from '../../sections/auth/VerifyForm';

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
      <Typography variant='h4'>Verify OTP</Typography>
      <Stack direction={"row"} spacing={0.5}>
            <Typography>Email with OTP is sent to @mgial.com</Typography>
      </Stack>
    </Stack>
    {/* verify form  */}
    <VerifyForm/>
  </>
);
}

export default Verify
