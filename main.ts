import { rest } from "msw";

const goodHandler = rest.get(
  "https://api.github.com/user/:login",
  (req, res, ctx) => {
    return res(ctx.json({ login: req.params.login }));
  }
);

const badHandler = rest.get(
  "https://api.github.com/user/:login",
  (req, res, ctx) => {}
);
