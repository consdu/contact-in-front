import { renderHook } from "@testing-library/react";
import { toast } from "react-toastify";
import { vi } from "vitest";
import { feedbacks, responseErrors } from "@/constants";
import {
  contactMock,
  contactsMock,
} from "@/factories/contacts/contactsFactory";
import { errorHandlers } from "@/mocks/handlers";
import { server } from "@/mocks/server";
import { wrapWithProviders } from "@/testUtils/testUtils";
import useContacts from "./useContacts";

beforeEach(() => {
  vi.clearAllMocks();
});

const limit = 10;
const id = "test-id";

describe("Given a getContacts function", () => {
  describe("When called with a limit of 10", () => {
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

  describe("When called with a limit of 10 and there is an error with the api", () => {
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

  describe("When called with with a limit of 0", () => {
    test("Then it should return undefined", async () => {
      const { result } = renderHook(() => useContacts(), {
        wrapper: wrapWithProviders,
      });
      const { getContacts } = result.current;

      const response = await getContacts(0);

      expect(response).toBeUndefined();
    });
  });
});

describe("Given a deleteContact function", () => {
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
  const text = "t";

  describe("When called with 't'", () => {
    test("Then it should return the contacts that include 't' in either name or surname", async () => {
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

  describe("When called with 't' and there is a server error", () => {
    test("Then it should call toast's error method with 'Server internal error'", async () => {
      server.resetHandlers(...errorHandlers);

      const message = responseErrors.serverError;
      toast.error = vi.fn();

      const { result } = renderHook(() => useContacts(), {
        wrapper: wrapWithProviders,
      });
      const { searchContacts } = result.current;

      await searchContacts(text);

      expect(toast.error).toHaveBeenCalledWith(message);
    });
  });
});

describe("Given a getContact function", () => {
  describe("When called with an existing id", () => {
    test("Then it should return a contact", async () => {
      const expectedResponse = contactMock;

      const { result } = renderHook(() => useContacts(), {
        wrapper: wrapWithProviders,
      });
      const { getContact } = result.current;

      const response = await getContact(id);

      expect(response).toStrictEqual(expectedResponse);
    });
  });

  describe("When called with a non-existing contact id", () => {
    test("Then it should return status code 404", async () => {
      server.resetHandlers(...errorHandlers);
      const expectedStatusCode = 404;

      const { result } = renderHook(() => useContacts(), {
        wrapper: wrapWithProviders,
      });
      const { getContact } = result.current;

      const statusCode = await getContact(id);

      expect(statusCode).toBe(expectedStatusCode);
    });
  });
});

describe("Given a updateContact function", () => {
  describe("When called with a contact", () => {
    test("Then it should return the contact updated", async () => {
      const expectedStatus = 200;

      const { result } = renderHook(() => useContacts(), {
        wrapper: wrapWithProviders,
      });
      const { updateContact } = result.current;

      const responseStatus = await updateContact(contactMock);

      expect(responseStatus).toStrictEqual(expectedStatus);
    });
  });

  describe("When called with a contact and there is a database error", () => {
    test("Then it should call toast's error method with 'Error while updating contact'", async () => {
      server.resetHandlers(...errorHandlers);
      toast.error = vi.fn();

      const { result } = renderHook(() => useContacts(), {
        wrapper: wrapWithProviders,
      });
      const { updateContact } = result.current;

      await updateContact(contactMock);

      expect(toast.error).toHaveBeenCalledWith(feedbacks.errorUpdatingContact);
    });
  });
});
