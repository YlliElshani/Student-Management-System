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
import DetyraStore from "./detyraStore";
import TrajnimStore from "./trajnimstore";
import ArsyejaStore from "./arsyejaStore";
import NjoftimeStore from "./njoftimeStore";
import KerkesNdihmeStore from "./kerkesNdihmeStore";
import VleresimiStore from "./vleresimiStore";
import VijushmeriaStore from "./vijushmeriaStore";
import pMesimorStore from "./pMesimorStore";
import ParaleljaaStore from "./paraleljaaStore";
import ParaleljaKlasaStore from "./paraleljaKlasaStore";
import NderrimiStore from "./nderrimiStore";


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
    detyraStore: DetyraStore;
    trajnimStore: TrajnimStore;
    arsyejaStore: ArsyejaStore;
    njoftimeStore:NjoftimeStore;
    kerkesNdihmeStore:KerkesNdihmeStore;
    vleresimiStore: VleresimiStore;
    vijushmeriaStore:VijushmeriaStore;
    pMesimorStore: pMesimorStore;
    paraleljaaStore: ParaleljaaStore;
    paraleljaKlasaStore: ParaleljaKlasaStore;
    nderrimiStore: NderrimiStore;
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
    vitiAkademikStore: new VitiAkademikStore(),
    arsyejaStore: new ArsyejaStore(),
    njoftimeStore:new NjoftimeStore(),
    kerkesNdihmeStore:new KerkesNdihmeStore(),
    detyraStore: new DetyraStore(),
    trajnimStore: new TrajnimStore(),
    vleresimiStore: new VleresimiStore(),
    vijushmeriaStore: new VijushmeriaStore(),
    
    pMesimorStore:new pMesimorStore(),
    paraleljaaStore: new ParaleljaaStore(),
    paraleljaKlasaStore: new ParaleljaKlasaStore(),
    nderrimiStore: new NderrimiStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}