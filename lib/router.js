import MessageRouter from "./messaging/message_router";

let router = new MessageRouter();

router.define((builder) => {
  builder.namespace("users", (users) => {
    users.route("show", "handler goes here");
  });
});

export default router;
