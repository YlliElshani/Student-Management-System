import { createContext, useContext } from "react";
import CommonStore from "./commonStore";
import CompetitionStore from "./competitionStore";
import ModalStore from "./modalStore";
import TripStore from "./tripStore";
import UserStore from "./userStore";
import LendaStore from "./lendaStore"
import NotaStore from "./notaStore";
import QytetiStore from "./qytetiStore";
import PrezantimiStore from "./prezantimiStore";
import KlasaStore from "./klasaStore";
import VitiAkademikStore from "./vitiAkademikStore";


interface Store {
    tripStore: TripStore;
    competitionStore: CompetitionStore;
    userStore: UserStore;
    commonStore: CommonStore;
    lendaStore: LendaStore;
    notaStore: NotaStore;
    modalStore: ModalStore;
    qytetiStore: QytetiStore;
    prezantimiStore: PrezantimiStore;
    klasaStore: KlasaStore;
    vitiAkademikStore: VitiAkademikStore;
}

export const store: Store = {
    tripStore: new TripStore(),
    competitionStore: new CompetitionStore(),
    userStore: new UserStore(),
    commonStore: new CommonStore(),
    lendaStore: new LendaStore(),
    notaStore: new NotaStore(),
    modalStore: new ModalStore(),
    qytetiStore: new QytetiStore(),
    prezantimiStore: new PrezantimiStore(),
    klasaStore: new KlasaStore(),
    vitiAkademikStore: new VitiAkademikStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}