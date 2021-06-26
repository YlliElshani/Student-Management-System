import { createContext, useContext } from "react";
import CommonStore from "./commonStore";
import CompetitionStore from "./competitionStore";
import TripStore from "./tripStore";
import UserStore from "./userStore";

interface Store {
    tripStore: TripStore;
    competitionStore: CompetitionStore;
    userStore: UserStore;
    commonStore: CommonStore;
}

export const store: Store = {
    tripStore: new TripStore(),
    competitionStore: new CompetitionStore(),
    userStore: new UserStore(),
    commonStore: new CommonStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}