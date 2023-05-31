import { UseLocalStorageStructure } from "../../types";

const useLocalStorage = (): UseLocalStorageStructure => {
  const setLocalStorageItem = (key: string, value: string) => {
    localStorage.setItem(key, value);
  };

  const removeLocalStorageItem = (key: string) => {
    localStorage.removeItem(key);
  };

  const getLocalStorageItem = (key: string) => {
    return localStorage.getItem(key);
  };

  return {
    setLocalStorageItem,
    removeLocalStorageItem,
    getLocalStorageItem,
  };
};

export default useLocalStorage;
