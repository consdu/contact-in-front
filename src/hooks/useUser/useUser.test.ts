import { renderHook } from "@testing-library/react";
import { userLoginDataMock, userTokenMock } from "../../mocks/user/userMocks";
import useUser from "./useUser";

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
]);
