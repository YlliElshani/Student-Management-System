import { createContext, useContext } from "react";
import CommonStore from "./commonStore";
import CompetitionStore from "./competitionStore";
import ModalStore from "./modalStore";
import TripStore from "./tripStore";
import UserStore from "./userStore";
import LendaStore from "./lendaStore"


interface Store {
    tripStore: TripStore;
    competitionStore: CompetitionStore;
    userStore: UserStore;
    commonStore: CommonStore;
    modalStore: ModalStore;
    lendaStore: LendaStore
}

export const store: Store = {
    tripStore: new TripStore(),
    competitionStore: new CompetitionStore(),
    userStore: new UserStore(),
    commonStore: new CommonStore(),
    modalStore: new ModalStore(),
    lendaStore: new LendaStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}