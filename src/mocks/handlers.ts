import { rest } from "msw";
import { userTokenMock } from "./user/userMocks";
import { paths, responseErrors, responseMesssages } from "../constants";
import { contactsMock } from "../factories/contacts/contactsFactory";

const apiUrl = import.meta.env.VITE_API_URL;

export const handlers = [
  rest.post(`${apiUrl}${paths.userLogin}`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        token: userTokenMock,
      })
    );
  }),

  rest.get(`${apiUrl}${paths.contacts}`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        contacts: contactsMock,
      })
    );
  }),

  rest.delete(`${apiUrl}${paths.contacts}/:contactId`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: responseMesssages.deleteSuccessful,
      })
    );
  }),
];

export const errorHandlers = [
  rest.post(`${apiUrl}${paths.userLogin}`, (_req, res, ctx) => {
    return res(
      ctx.status(401),
      ctx.json({
        error: responseErrors.wrongCredentials,
      })
    );
  }),

  rest.delete(`${apiUrl}${paths.contacts}/:contactId`, (_req, res, ctx) => {
    return res(
      ctx.status(404),
      ctx.json({
        error: responseErrors.contactNotFound,
      })
    );
  }),
];
