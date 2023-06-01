import { renderHook } from "@testing-library/react";
import { contactsMock } from "../../factories/contacts/contactsFactory";
import useContacts from "./useContacts";

describe("Given a getContacts function", () => {
  describe("When called", () => {
    test("Then it should return a list with 3 contacts", async () => {
      const expectedResponse = contactsMock;
      const { result } = renderHook(() => useContacts());
      const { getContacts } = result.current;

      const response = await getContacts();

      expect(response).toStrictEqual(expectedResponse);
    });
  });
});
