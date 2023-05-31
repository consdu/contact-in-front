import { useCallback } from "react";
import jwt_decode from "jwt-decode";
import { UserTokenStructure } from "../../types";

const useToken = () => {
  const getTokenData = useCallback((token: string): UserTokenStructure => {
    const decodedTokenData: { sub: string; name: string } = jwt_decode(token);
    const userSessionData = {
      id: decodedTokenData.sub,
      name: decodedTokenData.name,
      token,
    };

    return userSessionData;
  }, []);

  return {
    getTokenData,
  };
};

export default useToken;
