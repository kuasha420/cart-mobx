import { applySnapshot, Instance, onSnapshot } from "mobx-state-tree";
import { createContext, ReactNode, useContext, useEffect } from "react";
import RootStore from "./root-store";
import localforage from "localforage";

const rootStore = RootStore.create();

onSnapshot(rootStore, (snapshot) => {
  console.log("new snapshot", snapshot);
  localforage.setItem("rootStore", snapshot);
});

const RootStoreContext = createContext<Instance<typeof RootStore> | null>(null);

export const RootStoreProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    (async () => {
      const data = await localforage.getItem("rootStore");
      if (data) {
        try {
          applySnapshot(rootStore, data);
        } catch (error) {
          console.error(error);
        }
      }
    })();
  }, []);

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
