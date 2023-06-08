import { vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { toast } from "react-toastify";
import {
  contactMock,
  contactsMock,
} from "../../factories/contacts/contactsFactory";
import useContacts from "./useContacts";
import { wrapWithProviders } from "../../testUtils/testUtils";
import { feedbacks } from "../../constants";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";

beforeEach(() => {
  vi.clearAllMocks();
});

const limit = 10;

describe("Given a getContacts function", () => {
  describe("When called", () => {
    test("Then it should return a list with 3 contacts", async () => {
      const expectedResponse = contactsMock;

      const { result } = renderHook(() => useContacts(), {
        wrapper: wrapWithProviders,
      });
      const { getContacts } = result.current;

      const response = await getContacts(limit);

      expect(response).toStrictEqual(expectedResponse);
    });
  });

  describe("When called and there is an error with the api", () => {
    test("Then it should call toast's error method with 'Error while getting contacts'", async () => {
      server.resetHandlers(...errorHandlers);
      toast.error = vi.fn();

      const { result } = renderHook(() => useContacts(), {
        wrapper: wrapWithProviders,
      });
      const { getContacts } = result.current;

      await getContacts(limit);

      expect(toast.error).toHaveBeenCalledWith(feedbacks.errorGettingContacts);
    });
  });
});

describe("Given a deleteContact function", () => {
  const id = "test-id";

  describe("When called with an existing contact id", () => {
    test("Then it should return status code 200", async () => {
      const expectedStatusCode = 200;

      const { result } = renderHook(() => useContacts(), {
        wrapper: wrapWithProviders,
      });
      const { deleteContact } = result.current;

      const statusCode = await deleteContact(id);

      expect(statusCode).toBe(expectedStatusCode);
    });

    test("Then it should call toast's success method with 'Contact deleted correctly'", async () => {
      toast.success = vi.fn();

      const { result } = renderHook(() => useContacts(), {
        wrapper: wrapWithProviders,
      });
      const { deleteContact } = result.current;

      await deleteContact(id);

      expect(toast.success).toHaveBeenCalledWith(feedbacks.deleteSuccesful);
    });
  });

  describe("When called with a non-existing contact id", () => {
    test("Then it should return status code 404", async () => {
      server.resetHandlers(...errorHandlers);
      const expectedStatusCode = 404;

      const { result } = renderHook(() => useContacts(), {
        wrapper: wrapWithProviders,
      });
      const { deleteContact } = result.current;

      const statusCode = await deleteContact(id);

      expect(statusCode).toBe(expectedStatusCode);
    });

    test("Then it should call toast's error method with 'Error while deleting contact'", async () => {
      server.resetHandlers(...errorHandlers);
      toast.error = vi.fn();

      const { result } = renderHook(() => useContacts(), {
        wrapper: wrapWithProviders,
      });
      const { deleteContact } = result.current;

      await deleteContact(id);

      expect(toast.error).toHaveBeenCalledWith(feedbacks.errorDeletingContact);
    });
  });
});

describe("Given a addContact function", () => {
  describe("When called with a contact", () => {
    test("Then it should return the contact added", async () => {
      const expectedContact = contactMock;

      const { result } = renderHook(() => useContacts(), {
        wrapper: wrapWithProviders,
      });
      const { addContact } = result.current;

      const newContact = await addContact(contactMock);

      expect(newContact).toStrictEqual(expectedContact);
    });
  });

  describe("When called with a contact and there is a database error", () => {
    test("Then it should call toast's error method with 'Error while adding contact'", async () => {
      server.resetHandlers(...errorHandlers);
      toast.error = vi.fn();

      const { result } = renderHook(() => useContacts(), {
        wrapper: wrapWithProviders,
      });
      const { addContact } = result.current;

      await addContact(contactMock);

      expect(toast.error).toHaveBeenCalledWith(feedbacks.errorAddingContact);
    });
  });
});

describe("Given a searchContact function", () => {
  describe("When called with 't'", () => {
    test("Then it should return the contacts that include 't' in either name or surname", async () => {
      const text = "t";
      const expectedContacts = contactsMock.filter(
        (contact) =>
          contact.name.includes(text) || contact.surname.includes(text)
      );

      const { result } = renderHook(() => useContacts(), {
        wrapper: wrapWithProviders,
      });
      const { searchContacts } = result.current;

      const contacts = await searchContacts(text);

      expect(contacts).toStrictEqual(expectedContacts);
    });
  });
});
