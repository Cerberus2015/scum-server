import Comfy from "comfy";
import Dotenv from "dotenv";

var nodeEnv = process.env.NODE_ENV || "development";
var envFilePath = (nodeEnv === "development" ? ".env" : ".env." + nodeEnv);

Dotenv.config({ path: envFilePath });
Dotenv.load();

var config = Comfy.build((c) => {
  // Use comfy to build configuration object, for example:
  //
  // will look for process.env.PORT and expose config.port
  c.optional("port", 8000);

  // Learn more about comfy at
  // https://github.com/filp/comfy

  c.optional("rack_env", "development", { alias: "env" });
});

export default config;
