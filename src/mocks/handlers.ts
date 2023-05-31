import { rest } from "msw";
import { userLoginDataMock, userTokenMock } from "./user/userMocks";
import { paths } from "../constants";
import { UserCredentials } from "../types";

const apiUrl = import.meta.env.VITE_API_URL;

interface Request {
  body: UserCredentials;
}

export const handlers = [
  rest.post(`${apiUrl}${paths.userLogin}`, (req: Request, res, ctx) => {
    const { body } = req;
    const { username, password } = body;

    if (
      username !== userLoginDataMock.username ||
      password !== userLoginDataMock.password
    ) {
      return res(
        ctx.status(401),
        ctx.json({
          error: "Wrong credentials",
        })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        token: userTokenMock,
      })
    );
  }),
];
