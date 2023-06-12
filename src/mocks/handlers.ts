import { rest } from "msw";
import { userTokenMock } from "./user/userMocks";
import { paths, responseErrors, responseMesssages } from "../constants";
import {
  contactMock,
  contactsMock,
} from "../factories/contacts/contactsFactory";

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

  rest.post(`${apiUrl}${paths.contacts}`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        contact: contactMock,
      })
    );
  }),

  rest.get(`${apiUrl}${paths.contacts}${paths.search}`, (req, res, ctx) => {
    const name = req.url.searchParams.get("name") as string;

    return res(
      ctx.status(200),
      ctx.json({
        contacts: contactsMock.filter(
          (contact) =>
            contact.name.includes(name) || contact.surname.includes(name)
        ),
      })
    );
  }),

  rest.get(`${apiUrl}${paths.contacts}/id/:contactId`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        contact: contactMock,
      })
    );
  }),

  rest.put(`${apiUrl}${paths.contacts}`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        messsage: responseMesssages.updateSuccessful,
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

  rest.get(`${apiUrl}${paths.contacts}`, (_req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({
        error: responseErrors.serverError,
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

  rest.post(`${apiUrl}${paths.contacts}`, (_req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({
        error: responseErrors.serverError,
      })
    );
  }),

  rest.get(`${apiUrl}${paths.contacts}${paths.search}`, (_req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({
        error: responseErrors.serverError,
      })
    );
  }),

  rest.get(`${apiUrl}${paths.contacts}/id/:contactId`, (_req, res, ctx) => {
    return res(
      ctx.status(404),
      ctx.json({
        error: responseErrors.contactNotFound,
      })
    );
  }),

  rest.put(`${apiUrl}${paths.contacts}`, (_req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({
        error: responseErrors.serverError,
      })
    );
  }),
];
