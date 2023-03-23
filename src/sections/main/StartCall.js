import { Dialog, DialogContent, DialogTitle, Slide, Stack } from '@mui/material'
import React from 'react'
import { Search, SearchIconWrapper, StyledInputBase } from '../../components/Search';
import { MagnifyingGlass } from 'phosphor-react';
import { CallElement } from '../../components/CallElement';
import { Members_List } from '../../data';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StartCall = ({open, handleClose}) => {
  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      sx={{
        p: 4,
      }}
      onClose={handleClose}
    >
      {/* title */}
      <DialogTitle sx={{ mb: 3, mt: 1 }} textAlign={"center"}>
        Start Call
      </DialogTitle>
      {/* body */}
      <DialogContent>
        <Stack sx={{ width: "100%" }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ "aria-label": "Search" }}
            />
          </Search>
        </Stack>
        {/* list of call. */}
        {/* todo: filter list on typing. */}
        {/* <CallElement online={true}/> */}
        {
            Members_List.map((singleMember)=>{
                  return (<CallElement {...singleMember}/>)
            })
        }
      </DialogContent>
    </Dialog>
  );
}

export default StartCall
