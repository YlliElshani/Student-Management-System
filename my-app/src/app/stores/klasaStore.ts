import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { v4 as uuid } from 'uuid';
import { IKlasa } from '../models/klasa';

export default class KlasaStore {
    klasaRegistry = new Map<string, IKlasa>();
    selectedKlasa: IKlasa | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this)
    }

    get klasetByEmri() {
        return Array.from(this.klasaRegistry.values());
    }

    loadKlaset = async () => {
        try {
            const klaset = await agent.Klaset.list();
            klaset.forEach(klasa => {
                klasa.klasaId = klasa.klasaId.split('T')[0];
                this.klasaRegistry.set(klasa.klasaId, klasa);
            })
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    selectKlasa = (id: string) => {
        this.selectedKlasa = this.klasaRegistry.get(id);
    }

    cancelSelectedKlasa = () => {
        this.selectedKlasa = undefined;
    }

    openForm = (id?: string) => {
        id ? this.selectKlasa(id) : this.cancelSelectedKlasa();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createKlasa = async (klasa: IKlasa) => {
        this.loading = true;
        klasa.klasaId = uuid();
        try {
            await agent.Klaset.create(klasa);
            runInAction(() => {
                this.klasaRegistry.set(klasa.klasaId , klasa);
                this.selectedKlasa = klasa;
                this.editMode = false;
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    updateKlasa = async (klasa: IKlasa) => {
        this.loading = true;
        try {
            await agent.Klaset.update(klasa);
            runInAction(() => {
                this.klasaRegistry.set(klasa.klasaId, klasa);
                this.selectedKlasa = klasa;
                this.editMode = false;
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    deleteKlasa = async (id: string) => {
        this.loading = true;
        try {
            await agent.Klaset.delete(id);
            runInAction(() => {
                this.klasaRegistry.delete(id);
                if (this.selectedKlasa?.klasaId === id) this.cancelSelectedKlasa();
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }
} 