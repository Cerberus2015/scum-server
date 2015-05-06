import Comfy from "comfy";

let config = Comfy.build((c) => {
  // Use comfy to build configuration object, for example:
  //
  // will look for process.env.SCUM_PORT and expose config.scumPort
  c.optional("scum_port", 5000);

  // Learn more about comfy at
  // https://github.com/filp/comfy
});

export default config;
