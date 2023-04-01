// import React from 'react'
// import {Box, Stack, Typography} from "@mui/material";
// import { useTheme } from "@mui/material/styles";
// const TodoIndex = () => {
//   const theme = useTheme();
//   return (
//     <>
//       <Stack
//       borderRadius={"10px"}
//         direction={"column"}
//         minHeight={"100vh"}
//         sx={{
//           width: "87vw",
//         }}
//         // padding={"5px"}
//         // border={"1px solid black"}
//       >
//         {/* heading */}
//         <Box
//           sx={{
//             width: "100%",
//             // textAlign:"center",
//             height: "10%",
//             // border: "1px solid black"
//           }}
//           display={"flex"}
//           justifyContent={"center"}
//           alignItems={"center"}
//           marginBottom={"10px"}
//         >
//           <Typography variant="h3" fontWeight={"300"} fontFamily={"cursive"}>
//             To-Do List - DND
//           </Typography>
//         </Box>
//         {/* // todos, completed and working on. */}

//         <Stack
//           height={"100%"}
//           direction={"row"}
//           width={"100%"}
//           marginLeft={"10px"}
//           // border={"1px solid black"}
//         >
//           {/* todos */}
//           <Stack
//             // color={"whitesmoke"}
//             direction={"column"}
//             width={"29vw"}
//             height={"100%"}
//             borderRadius={"10px"}
//             // border={"1px solid black"}
//             sx={{
//               backgroundColor:
//                 theme.palette.mode === "light"
//                   ? "#fff"
//                   : theme.palette.background.de,
//               boxShadow: `0 0 0 6px ${theme.palette.background.paper}`,
//             }}
//           >
//             {/* todo heading */}
//             <Box width={"100%"} padding={"5px"}>
//               <Typography width={"100%"} variant="h5" textAlign={"center"}>
//                 To-Dos
//               </Typography>
//             </Box>
//             {/* todos */}
//             <Stack direction={"column"} padding={'3px'}
//             width="100%" height="100%" 
//             sx={{
//               backgroundColor: `${theme.palette.background.paper}`
//             }}
//             >

//               <Box>
//                 <Typography variant='subtitle2'>First task</Typography>
//               </Box>
//             </Stack>
//           </Stack>

//           {/* in progress */}
//           <Stack
//             direction={"column"}
//             width={"29vw"}
//             height={"100%"}
//             borderRadius={"10px"}
//             // border={"1px solid black"}
//             sx={{
//               backgroundColor:
//                 theme.palette.mode === "light"
//                   ? "#fff"
//                   : theme.palette.background.de,
//               boxShadow: `0 0 0 6px ${theme.palette.background.paper}`,
//             }}
//           >
//             {/* todo heading */}
//             <Box width={"100%"} padding={"5px"}>
//               <Typography width={"100%"} variant="h5" textAlign={"center"}>
//                 In Progress
//               </Typography>
//             </Box>
//           </Stack>

//           {/* completed*/}
//           <Stack
//             direction={"column"}
//             width={"29vw"}
//             height={"100%"}
//             borderRadius={"10px"}
//             // border={"1px solid black"}
//             sx={{
//               backgroundColor:
//                 theme.palette.mode === "light"
//                   ? "white"
//                   : theme.palette.background.de,

//               boxShadow: `0 0 0 6px ${theme.palette.background.paper}`,
//             }}
//           >
//             {/* todo heading */}
//             <Box width={"100%"} padding={"5px"}>
//               <Typography width={"100%"} variant="h5" textAlign={"center"}>
//                 To-Dos
//               </Typography>
//             </Box>
//           </Stack>
//         </Stack>
//       </Stack>
//     </>
//   );
// }

// export default TodoIndex
import React from 'react'

const TodoIndex = () => {
  return (
    <div>
      todo list component.
    </div>
  )
}

export default TodoIndex;
