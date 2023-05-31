import { renderHook } from "@testing-library/react";
import useLocalStorage from "./useLocalStorage";

beforeEach(() => {
  localStorage.clear();
});

const key = "token";
const value = "test-token";

describe("Given a setLocalStorageItem function", () => {
  describe("When invoked with key: token and value: test-token", () => {
    test("Then it should add the key and value pair to local storage", () => {
      const { result } = renderHook(() => useLocalStorage());
      const { setLocalStorageItem } = result.current;
      setLocalStorageItem(key, value);

      expect(localStorage.getItem(key)).toBe(value);
    });
  });
});

describe("Given a removeLocalStorageItem function", () => {
  describe("When invoked with key: token", () => {
    test("Then it should key and value from the local storage", () => {
      const { result } = renderHook(() => useLocalStorage());
      const { setLocalStorageItem, removeLocalStorageItem } = result.current;
      setLocalStorageItem(key, value);
      removeLocalStorageItem(key);

      expect(localStorage.getItem(key)).toBe(null);
    });
  });
});

describe("Given a getLocalStorageItem function", () => {
  describe("When invoked with a key", () => {
    test("Then it should return the value of that key", () => {
      const { result } = renderHook(() => useLocalStorage());
      const { setLocalStorageItem, getLocalStorageItem } = result.current;
      setLocalStorageItem(key, value);

      const expectedValue = getLocalStorageItem(key);

      expect(expectedValue).toBe(value);
    });
  });
});
