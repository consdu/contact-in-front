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

export interface ContactStructure {
  id: string;
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
  user: string;
}

export interface ContactsStateStructure {
  contactsData: ContactStructure[];
}
