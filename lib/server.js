import config from "./config";
import io from "socket.io";

let server = {};
let app = io(config.scumWsPort);

app.on("connection", (socket) => {
  socket.emit("pong", { message: "pong!"});
});

export default server;
