import { PathParams, rest } from "msw";

type RequestBody = {};
type Params = PathParams<"login">;
type Response = { login: string | readonly string[] };

// 👍
const goodHandler = rest.get<RequestBody, Params, Response>(
  "https://api.github.com/user/:login",
  (req, res, ctx) => {
    return res(ctx.json({ login: req.params.login }));
  }
);

// 👎 a resolver is expected
const badHandler = rest.get<RequestBody, Params, Response>(
  "https://api.github.com/user/:login",
  (req, res, ctx) => {}
);
