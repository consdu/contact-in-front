import {
  UserActionPayloadStructure,
  UserStateStructure,
  UserTokenPayloadStructure,
  UserCredentials,
} from "@/types";

export const userIdMock = "646f6a9da1b8a16b45eabf44";

export const correctCredentialsMock: UserCredentials = {
  username: "admin",
  password: "admin",
};

export const incorrectCredentialsMock: UserCredentials = {
  username: "wrong username",
  password: "wrong password",
};

export const userTokenMock =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDZmNmE5ZGExYjhhMTZiNDVlYWJmNDQiLCJuYW1lIjoiQWRtaW4iLCJpYXQiOjE2ODU0NDE5Nzd9.hwpg_Rtg1F96NevhAB21CkWF5FHs04lQnYec7orlZNo";

export const userTokenPayloadMock: UserTokenPayloadStructure = {
  id: userIdMock,
  name: "Admin",
};

export const userActionPayloadMock: UserActionPayloadStructure = {
  ...userTokenPayloadMock,
  token: userTokenMock,
};

export const emptyUserStateMock: UserStateStructure = {
  id: "",
  name: "",
  token: "",
  isLogged: false,
};

export const loggedUserStateMock: UserStateStructure = {
  ...userTokenPayloadMock,
  token: userTokenMock,
  isLogged: true,
};
