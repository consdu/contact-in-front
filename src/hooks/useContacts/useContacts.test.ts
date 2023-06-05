import { renderHook } from "@testing-library/react";
import { toast } from "react-toastify";
import { contactsMock } from "../../factories/contacts/contactsFactory";
import useContacts from "./useContacts";
import { wrapWithProviders } from "../../testUtils/testUtils";
import { vi } from "vitest";
import { feedbacks } from "../../constants";

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
});

describe("Given a deleteContact function", () => {
  describe("When called with an existing contact id", () => {
    const id = "test-id";

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
});
