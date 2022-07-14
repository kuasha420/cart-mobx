import { Instance } from "mobx-state-tree";
import { createContext, ReactNode, useContext } from "react";
import RootStore from "./root-store";

const rootStore = RootStore.create();

const RootStoreContext = createContext<Instance<typeof RootStore> | null>(null);

export const RootStoreProvider = ({ children }: { children: ReactNode }) => {
  return (
    <RootStoreContext.Provider value={rootStore}>
      {children}
    </RootStoreContext.Provider>
  );
};

export const useRootStore = () => {
  const rootStore = useContext(RootStoreContext);
  if (rootStore === null) {
    throw new Error("useRootStore must be used within a RootStoreProvider");
  }
  return rootStore;
};
