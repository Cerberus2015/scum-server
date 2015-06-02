import assert from "assert";
import Message from "../../lib/messaging/message";

describe("Message", () => {

  describe("#path", () => {
    var message = new Message({
      action: "test:action",
      data: {}
    });

    it("lists the segments of the path in a list", () => {
      assert.deepEqual(message.path, ["test", "action"]);
    });
  });



  describe("#hasData", () => {
    var messageWithData = new Message({
      action: "test:action",
      data: {
        ping: "pong!"
      }
    });

    var messageWithoutData = new Message({
      action: "test:action",
      data: {}
    });

    it("returns true if the message has any data", () => {
      assert(messageWithData.hasData());
    });

    it("returns false if the message has no data", () => {
      assert(!(messageWithoutData.hasData()));
    });
  });

});
