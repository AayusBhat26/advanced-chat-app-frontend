import React, { useState } from "react";
import { Box } from "@mui/material";
const item = {
      id: "asduiashfijsdfsdefbnsdfjsdfjs", 
      name:"Task 1"
}
const main = () => {
  const [state, setState] = useState({
    ToDo: {
      title: "ToDo",
      items: [],
    },
    "Working On": {
      title: "Working On",
      items: [],
    },
    Postponed: {
      title: "Postponed",
      items: [],
    },
    Completed: {
      title: "Completed",
      items: [],
    },
  });
  return <Box></Box>;
};

export default main;
