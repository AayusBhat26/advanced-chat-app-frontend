import { useTheme } from '@emotion/react'
import { Box, IconButton, Tooltip, Typography } from '@mui/material'
import { ArrowLeft, ArrowRight, Stack } from 'phosphor-react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { UpdateSidebarType } from '../redux/slices/app'
// import { ToggleSidebar, UpdateSidebarType } from "../../redux/slices/app";

const SharedMessages = () => {
      const theme = useTheme();
      const dispatch = useDispatch();
  return (
    //    <Box></Box>
    <div>hi</div>
  );
}

export default SharedMessages
