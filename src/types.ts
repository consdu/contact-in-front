export interface UserCredentials {
  username: string;
  password: string;
}

export interface UserTokenStructure {
  name: string;
  id: string;
  token: string;
}

export interface UserStateStructure extends UserTokenStructure {
  isLogged: boolean;
}

export interface UseLocalStorageStructure {
  setLocalStorageItem: (key: string, value: string) => void;
  removeLocalStorageItem: (key: string) => void;
  getLocalStorageItem: (key: string) => string | null;
}
