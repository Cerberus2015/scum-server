import logger from "../logger";

import RouteBuilder from "./route_builder";
import Message from "./message";

class MessageRouter {
  constructor() {
    this.builder = new RouteBuilder();
  }

  define(handle) {
    this.builder.draw(handle);

    logger.info({ routes: this.builder.routes }, "message router defined");
  }

  dispatch(socket, messageData) {
    let message = new Message(messageData);

    logger.info({ socket: socket, message: message }, "message router routing");

    // Dispatch happens here.
  }
}

export default MessageRouter;
