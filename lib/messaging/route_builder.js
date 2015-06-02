import deepmerge from "deepmerge";

// Helper used to draw routes. Supports nesting using helpers
// like #namespace, etc.
export default class RouteBuilder {
  constructor(prefix = null) {
    this.prefix = prefix;
    this.routes = {};
  }

  draw(handle) {
    handle.call({}, this);

    return this;
  }

  // Define routes inside a namespace:
  //
  // builder.namespace("socks", (socks) => {
  //   socks.route("remove", ...) #=> socks:remove
  //
  //   socks.namespace("red_socks", (redSocks) => {
  //     redSocks.route("trash", ...) #=> socks:red_socks:trash
  //   })
  // });
  namespace(name, handle) {
    if (name.length === 0) {
      throw "Empty namespace not allowed";
    }

    // Append this new namespace to any existing prefix, in order
    // to allow nesting namespaces:
    let prefix = this.prefix && [this.prefix, name].join(":") || name;

    let builder = new RouteBuilder(prefix);

    this.merge(builder.draw(handle).routes);
  }

  // Defines a route. This is the only acceptable method to
  // add new routes to this.routes.
  route(path, handler, options = {}) {
    // Append the prefix for this builder to the final route path:
    let prefixedPath = this.prefix && [this.prefix, path].join(":") || path;

    // Explode violently if this path already is defined:
    if (typeof this.routes[prefixedPath] !== "undefined") {
      throw "Route already defined " + prefixedPath;
    }

    this.routes[prefixedPath] = { handler: handler, options: options };
  }

  // Helper, merges a list of routes already in the correct format with
  // the routes already in this object.
  merge(extraRoutes) {
    this.routes = deepmerge(this.routes, extraRoutes);
  }
}
