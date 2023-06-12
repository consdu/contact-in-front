export interface UserCredentials {
  username: string;
  password: string;
}

export interface UserTokenPayloadStructure {
  name: string;
  id: string;
}
export interface UserActionPayloadStructure extends UserTokenPayloadStructure {
  token: string;
}

export interface UserStateStructure extends UserActionPayloadStructure {
  isLogged: boolean;
}

export interface UseLocalStorageStructure {
  setLocalStorageItem: (key: string, value: string) => void;
  removeLocalStorageItem: (key: string) => void;
  getLocalStorageItem: (key: string) => string | null;
}

export interface ContactStructure {
  id?: string;
  name: string;
  surname: string;
  avatar: string;
  phoneNumber: {
    mobile: string;
    landline?: string;
  };
  address: string;
  email: string;
  birthday: string;
  socials: {
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
  user?: string;
}

export interface ContactsStateStructure {
  contactsData: ContactStructure[];
  limit: number;
  totalCount: number;
  selectedContact?: ContactStructure;
}

export interface UiStateStructure {
  isLoading: boolean;
}
