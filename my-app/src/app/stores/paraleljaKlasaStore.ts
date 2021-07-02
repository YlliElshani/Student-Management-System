import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { v4 as uuid } from 'uuid';
import { IParaleljaKlasa } from '../models/paraleljaKlasa';

export default class ParaleljaKlasaStore {
    paraleljaKlasaRegistry = new Map<string, IParaleljaKlasa>();
    selectedParaleljaKlasa: IParaleljaKlasa | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this)
    }

    get paraleletKlasetByEmri() {
        return Array.from(this.paraleljaKlasaRegistry.values());
    }

    loadParaleletKlaset = async () => {
        try {
            const paraleletKlaset = await agent.ParaleletKlaset.list();
            paraleletKlaset.forEach(paraleljaKlasa => {
                paraleljaKlasa.paraleljaKlasaId = paraleljaKlasa.paraleljaKlasaId.split('T')[0];
                this.paraleljaKlasaRegistry.set(paraleljaKlasa.paraleljaKlasaId, paraleljaKlasa);
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

    selectParaleljaKlasa = (id: string) => {
        this.selectedParaleljaKlasa = this.paraleljaKlasaRegistry.get(id);
    }

    cancelSelectedParaleljaKlasa = () => {
        this.selectedParaleljaKlasa = undefined;
    }

    openForm = (id?: string) => {
        id ? this.selectParaleljaKlasa(id) : this.cancelSelectedParaleljaKlasa();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createParaleljaKlasa = async (paraleljaKlasa: IParaleljaKlasa) => {
        this.loading = true;
        paraleljaKlasa.paraleljaKlasaId = uuid();
        try {
            await agent.ParaleletKlaset.create(paraleljaKlasa);
            runInAction(() => {
                this.paraleljaKlasaRegistry.set(paraleljaKlasa.paraleljaKlasaId , paraleljaKlasa);
                this.selectedParaleljaKlasa = paraleljaKlasa;
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

    updateParaleljaKlasa = async (paraleljaKlasa: IParaleljaKlasa) => {
        this.loading = true;
        try {
            await agent.ParaleletKlaset.update(paraleljaKlasa);
            runInAction(() => {
                this.paraleljaKlasaRegistry.set(paraleljaKlasa.paraleljaKlasaId, paraleljaKlasa);
                this.selectedParaleljaKlasa = paraleljaKlasa;
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

    deleteParaleljaKlasa = async (id: string) => {
        this.loading = true;
        try {
            await agent.ParaleletKlaset.delete(id);
            runInAction(() => {
                this.paraleljaKlasaRegistry.delete(id);
                if (this.selectedParaleljaKlasa?.paraleljaKlasaId === id) this.cancelSelectedParaleljaKlasa();
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