import tooty from "tooty";

var router = tooty.build((r) => {

  // users
  r.namespace("users", (users) => {
    // users:show
    users.route("show", "handler goes here");
  });

});

export default router;
