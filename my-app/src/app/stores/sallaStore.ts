import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { v4 as uuid } from 'uuid';
import { ISalla } from "../models/salla";

export default class SallaStore {
    sallaRegistry = new Map<string, ISalla>();
    selectedSalla: ISalla | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this)
    }

    get sallatByDate() {
        return Array.from(this.sallaRegistry.values()).sort((a, b) => 
            Date.parse(a.dataRezervimit) - Date.parse(b.dataRezervimit));
    }

    loadSallat = async () => {
        try {
            const sallat = await agent.Sallat.list();
            sallat.forEach(salla => {
                salla.dataRezervimit = salla.dataRezervimit.split('T')[0];
                this.sallaRegistry.set(salla.sallaId, salla);
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

    selectSalla = (id: string) => {
        this.selectedSalla = this.sallaRegistry.get(id);
    }

    cancelSelectedSalla = () => {
        this.selectedSalla = undefined;
    }

    openForm = (id?: string) => {
        id ? this.selectSalla(id) : this.cancelSelectedSalla();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createSalla = async (salla: ISalla) => {
        this.loading = true;
        salla.sallaId = uuid();
        try {
            await agent.Sallat.create(salla);
            runInAction(() => {
                this.sallaRegistry.set(salla.sallaId, salla);
                this.selectedSalla = salla;
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

    updateSalla = async (salla: ISalla) => {
        this.loading = true;
        try {
            await agent.Sallat.update(salla);
            runInAction(() => {
                this.sallaRegistry.set(salla.sallaId, salla);
                this.selectedSalla = salla;
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

    deleteSalla = async (id: string) => {
        this.loading = true;
        try {
            await agent.Sallat.delete(id);
            runInAction(() => {
                this.sallaRegistry.delete(id);
                if (this.selectedSalla?.sallaId === id) this.cancelSelectedSalla();
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