import { UserStateStructure, UserTokenStructure } from "../../store/user/types";
import { UserCredentials } from "../../types";

export const userLoginDataMock: UserCredentials = {
  username: "admin",
  password: "admin",
};

export const userTokenMock =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDZmNmE5ZGExYjhhMTZiNDVlYWJmNDQiLCJuYW1lIjoiQWRtaW4iLCJpYXQiOjE2ODU0NDE5NzcsImV4cCI6MTY4NjA0Njc3N30.OKyDa1zjLR1_WNi-lZ9A7dL6DEAyK7KQ5EladkumYWE";

export const userTokenDataMock: UserTokenStructure = {
  id: "1",
  name: "user",
  token: userTokenMock,
};

export const emptyUserStateMock: UserStateStructure = {
  id: "",
  name: "",
  token: "",
  isLogged: false,
};

export const loggedUserStateMock: UserStateStructure = {
  ...userTokenDataMock,
  isLogged: true,
};
