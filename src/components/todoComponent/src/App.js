import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Home from "./pages/Home";
import Board from "./pages/Board";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CssBaseLine from "@mui/material/CssBaseline";
const App = () => {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseLine />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/app/todo/board" element={<Home />} />
        <Route path="/app/todo/boards/:boardId" element={<Board />}></Route>
      </Routes>
    </ThemeProvider>
    // <Route path='/app/todo' element={}>
    //  <Route path='/app/todo/boards' element={<Home />} />
    //  <Route path='/app/todo/boards/:boardId' element={<Board/>}></Route>
  );
};

export default App;
