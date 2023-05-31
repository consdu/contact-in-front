import { UserStateStructure, UserTokenStructure } from "../../types";
import { UserCredentials } from "../../types";

export const userLoginDataMock: UserCredentials = {
  username: "admin",
  password: "admin",
};

export const userTokenMock =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDZmNmE5ZGExYjhhMTZiNDVlYWJmNDQiLCJuYW1lIjoiQWRtaW4iLCJpYXQiOjE2ODU0NDE5Nzd9.hwpg_Rtg1F96NevhAB21CkWF5FHs04lQnYec7orlZNo";

export const userTokenDataMock: UserTokenStructure = {
  id: "646f6a9da1b8a16b45eabf44",
  name: "Admin",
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
