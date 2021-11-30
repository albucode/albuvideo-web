import { setupServer } from "msw/node";
import { rest } from "msw";

import { baseUrl } from "../config";

export const handlers = [
  rest.post(`${baseUrl}/users/sign_in`, (req, res, ctx) => {
    return res(
      ctx.json({ error: "You need to sign in or sign up before continuing." })
    );
  }),
];

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...handlers);
