class Message {

  constructor(message, socket=null) {
    this.socket = socket;
    this.message = message;
    this.data = message.data || {};

    this.parseAction(this.action);
  }

  parseAction(action) {
    this.action = action || "";
    this.actionPath = this.action.split(":");
  }
}

export default Message;
