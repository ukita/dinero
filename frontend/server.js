/* eslint-disable */
const next = require("next");
const polka = require("polka");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = polka();

    server.get("/c/:token", (req, res) =>
      app.render(req, res, "/confirm-token", req.params)
    );

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(4444, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:4444");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
