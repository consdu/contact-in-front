import { rest } from "msw";
import { userTokenMock } from "./user/userMocks";
import { paths } from "../constants";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  rest.post(`${apiUrl}${paths.userLogin}`, (_req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        token: userTokenMock,
      })
    )
  ),
];
