import bunyan from "bunyan";

// Custom serializers for commonly-logged objects throughout scum,
// such as socket.io sockets, http requests, models, etc.
var serializers = {

  // socket.io sockets
  socket: (socket) => {
    return {
      id: socket.id,
      connected: socket.connected
    };
  },

  // express requests
  request: (req) => {
    return {
      ips: req.ips,
      params: req.params,
      path: req.path,
      xhr: req.xhr,
      id: req.id
    };
  },

  // io message
  message: (msg) => {
    return {
      action: msg.action,
      data: msg.data
    };
  }
};

var logger = bunyan.createLogger({
  name: "scum-api",
  serializers: serializers
});

export default logger;
