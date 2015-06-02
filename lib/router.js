import MessageRouter from "./messaging/message_router";

var router = new MessageRouter();

router.define((b) => {

  // users
  b.namespace("users", (users) => {
    // users:show
    users.route("show", "handler goes here");
  });

});

export default router;
