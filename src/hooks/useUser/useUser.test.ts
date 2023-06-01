import { renderHook } from "@testing-library/react";
import { toast } from "react-toastify";
import { vi } from "vitest";
import {
  incorrectLoginDataMock,
  userLoginDataMock,
  userTokenMock,
} from "../../mocks/user/userMocks";
import useUser from "./useUser";
import { feedbacks } from "../../constants";

describe("Given a getUserToken function", () => [
  describe("When called with username 'admin' and password 'admin'", () => {
    test("Then it should return a user token", async () => {
      const expectedToken = userTokenMock;
      const userCredentials = userLoginDataMock;

      const { result } = renderHook(() => useUser());
      const { getUserToken } = result.current;
      const token = await getUserToken(userCredentials);

      expect(token).toStrictEqual(expectedToken);
    });
  }),

  describe("When called with invalid username and password", () => {
    test("Then it should call the toast's error method with 'Wrong credentials'", async () => {
      toast.error = vi.fn();

      const userCredentials = incorrectLoginDataMock;

      const { result } = renderHook(() => useUser());
      const { getUserToken } = result.current;
      await getUserToken(userCredentials);

      expect(toast.error).toBeCalledWith(feedbacks.wrongCredentials);
    });
  }),
]);
