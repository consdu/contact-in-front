import { shownLoadingStateMock } from "../../mocks/ui/uiStateMocks";
import { hiddenLoadingStateMock } from "../../mocks/ui/uiStateMocks";
import { UiStateStructure } from "../../types";
import { showLoadingActionCreator, uiReducer } from "./uiSlice";

describe("Given a uiReducer", () => {
  describe("When it receives an initial state and a showLoading action", () => {
    test("Then it should return a new state with isLoading to true", () => {
      const currentUiState: UiStateStructure = hiddenLoadingStateMock;

      const expectedUiState: UiStateStructure = shownLoadingStateMock;

      const newState = uiReducer(currentUiState, showLoadingActionCreator());

      expect(newState).toStrictEqual(expectedUiState);
    });
  });
});
