import Comfy from "comfy";
import Dotenv from "dotenv";

let nodeEnv = process.env.NODE_ENV || "development";
let envFilePath = (nodeEnv === "development" ? ".env" : ".env." + nodeEnv);

Dotenv.config({ path: envFilePath });
Dotenv.load();

let config = Comfy.build((c) => {
  // Use comfy to build configuration object, for example:
  //
  // will look for process.env.SCUM_WS_PORT and expose config.scumWsPort
  c.optional("scum_ws_port", 8000);

  // Learn more about comfy at
  // https://github.com/filp/comfy
});

export default config;
