import { createContext, useContext } from "react";
import {
  AppFlipType,
  AppState,
  SelectedLanguage,
  SelectedPage,
} from "../types/appType";
import { TextsType } from "../types/languageTypes";
import { match } from "ts-pattern";

// Define action types
type Action =
  | { type: "setLanguage"; payload: SelectedLanguage }
  | { type: "setTexts"; payload: TextsType }
  | { type: "setSelectedPage"; payload: SelectedPage }
  | { type: "setFlipApp"; payload: AppFlipType };

// Create the reducer function
export const reducer = (state: AppState, action: Action): AppState =>
  match<Action, AppState>(action)
    .with({ type: "setLanguage" }, (action) => ({
      ...state,
      language: action.payload,
    }))
    .with({ type: "setTexts" }, (action) => ({
      ...state,
      texts: action.payload,
    }))
    .with({ type: "setSelectedPage" }, (action) => ({
      ...state,
      selectedPage: action.payload,
    }))
    .with({ type: "setFlipApp" }, (action) => ({
      ...state,
      appFlipped: action.payload,
    }))
    // .with(P._, () => state)
    .exhaustive();

// Create the context
export const AppContext = createContext<
  { state: AppState; dispatch: React.Dispatch<Action> } | undefined
>(undefined);

// Create a custom hook for accessing the context
export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
}
