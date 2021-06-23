import { createContext, useContext } from "react";
import CompetitionStore from "./competitionStore";
import TripStore from "./tripStore";

interface Store {
    tripStore: TripStore
    competitionStore: CompetitionStore
}

export const store: Store = {
    tripStore: new TripStore(),
    competitionStore: new CompetitionStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}