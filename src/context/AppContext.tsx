import { ReactNode, useReducer } from "react";
import { initialAppState } from "./initialAppState";
import { AppContext, reducer } from "./appContextUtils";

type Props = {
  children: ReactNode;
};

// Create a context provider
export const AppContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialAppState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
