import io from "socket.io-client";
let socket;
const connectSocket = (user)=>{
  socket = io("http://localhost:5000", {
    query: `user_id=${user}`,
  });
}

export {socket, connectSocket};