import { Options } from "graphql-yoga";

import server from "./graphql";
import config from "./config";

const opts: Options = {
  endpoint: "/graphql",
  subscriptions: "/graphql",
  playground: config.prod ? false : "/graphql"
};

if (!config.isNow) {
  opts.cors = {
    credentials: true,
    origin: ["http://localhost:4444"]
  };
}

const httpServer = server.createHttpServer(opts);

if (!config.isNow) {
  httpServer.listen(
    4000,
    (): void => console.log(`Server is running on http://localhost:4000`)
  );
}

export default server.express;
