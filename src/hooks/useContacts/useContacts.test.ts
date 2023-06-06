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

describe("Given a getContacts function", () => {
  describe("When called", () => {
    test("Then it should return a list with 3 contacts", async () => {
      const expectedResponse = contactsMock;

      const { result } = renderHook(() => useContacts(), {
        wrapper: wrapWithProviders,
      });
      const { getContacts } = result.current;

      const response = await getContacts();

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

      await getContacts();

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
});
