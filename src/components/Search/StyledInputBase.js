import { styled } from "@mui/material/styles";
import { InputBase } from "@mui/material";
// inputbase allows us to write in input component and that blinking cursor

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
  },
}));
export default StyledInputBase;
