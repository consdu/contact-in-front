import {
  emptyUserStateMock,
  loggedUserStateMock,
  userTokenDataMock,
} from "../../mocks/user/userMocks";
import { UserStateStructure } from "./types";
import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given a userReducer", () => {
  describe("When it receives an empty current state and a loginUser action with an user as payload", () => {
    test("Then it should return a new state with the logged user", () => {
      const currentUserState: UserStateStructure = emptyUserStateMock;
      const expectedUserState: UserStateStructure = loggedUserStateMock;

      const newUserState = userReducer(
        currentUserState,
        loginUserActionCreator(userTokenDataMock)
      );

      expect(newUserState).toStrictEqual(expectedUserState);
    });
  });
});
