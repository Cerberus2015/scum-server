// Container/abstraction over the message format exchanged to
// and from the scum-server, through the socket server.
//
// Exposes methods for reading the message, locating its destination,
// validating its format, etc.
export default class Message {
  constructor(message, socket = null) {
    this.socket = socket;
    this.message = message;
    this.action = message.action;

    this.parseAction(this.action);
  }

  // Apparently this is really the most straightforward way
  // to do this. Who woulda thunk it.
  hasData() {
    return JSON.stringify(this.message.data) !== "{}";
  }

  parseAction(action) {
    this.action = action || "";
    this.path = this.action.split(":");
  }
}
