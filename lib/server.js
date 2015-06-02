
import socketio from "socket.io";
import express from "express";
import uuid from "node-uuid";

import config from "./config";
import logger from "./logger";

import router from "./router";

// == Express.js setup

var app = express();

app.use(express.static("public"));

// Wrap all requests with a request id, and send them to the logger
app.use((req, res, next) => {
  req.id = uuid.v4();
  res.set("X-Request-Id", req.id);

  logger.info({request: req}, "express start %s", req.method);
  next();
});

var server = app.listen(config.port, () => {
  var host = server.address().address;
  var port = server.address().port;

  logger.info("scum-api listening on %s:%s", host, port);
  logger.info("starting in %s mode", config.env);
});


// == Socket.io setup

var io = socketio(server);

io.on("connection", (socket) => {
  socket.on("message", (messageData) => {
    logger.info({ socket: socket }, "io message");

    router.dispatch(socket, messageData);
  });
});
