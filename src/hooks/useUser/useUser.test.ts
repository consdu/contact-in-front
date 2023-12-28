import { renderHook } from "@testing-library/react";
import { toast } from "react-toastify";
import { vi } from "vitest";
import { feedbacks } from "../../constants";
import { errorHandlers } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import {
  incorrectCredentialsMock,
  correctCredentialsMock,
  userTokenMock,
} from "../../mocks/user/userMocks";
import { wrapWithProviders } from "../../testUtils/testUtils";
import useUser from "./useUser";

describe("Given a getUserToken function", () => [
  describe("When called with username 'admin' and password 'admin'", () => {
    test("Then it should return a user token", async () => {
      const expectedToken = userTokenMock;
      const userCredentials = correctCredentialsMock;

      const { result } = renderHook(() => useUser(), {
        wrapper: wrapWithProviders,
      });
      const { getUserToken } = result.current;
      const token = await getUserToken(userCredentials);

      expect(token).toStrictEqual(expectedToken);
    });
  }),

  describe("When called with invalid username and password", () => {
    test("Then it should call the toast's error method with 'Wrong credentials'", async () => {
      server.resetHandlers(...errorHandlers);
      toast.error = vi.fn();

      const userCredentials = incorrectCredentialsMock;

      const { result } = renderHook(() => useUser(), {
        wrapper: wrapWithProviders,
      });
      const { getUserToken } = result.current;
      await getUserToken(userCredentials);

      expect(toast.error).toBeCalledWith(feedbacks.wrongCredentials);
    });
  }),
]);
