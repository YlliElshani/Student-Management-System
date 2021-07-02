import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { v4 as uuid } from 'uuid';
import { INderrimi } from '../models/nderrimi';

export default class NderrimiStore {
    nderrimiRegistry = new Map<string, INderrimi>();
    selectedNderrimi: INderrimi | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this)
    }

    get nderrimiByEmri() {
        return Array.from(this.nderrimiRegistry.values());
    }

    loadNderrimet = async () => {
        try {
            const nderrimet = await agent.Nderrimet.list();
            nderrimet.forEach(nderrimi => {
                nderrimi.nderrimiId = nderrimi.nderrimiId.split('T')[0];
                this.nderrimiRegistry.set(nderrimi.nderrimiId, nderrimi);
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

    selectNderrimi = (id: string) => {
        this.selectedNderrimi = this.nderrimiRegistry.get(id);
    }

    cancelSelectedNderrimi= () => {
        this.selectedNderrimi = undefined;
    }

    openForm = (id?: string) => {
        id ? this.selectNderrimi(id) : this.cancelSelectedNderrimi();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createNderrimi = async (nderrimi: INderrimi) => {
        this.loading = true;
        nderrimi.nderrimiId = uuid();
        try {
            await agent.Nderrimet.create(nderrimi);
            runInAction(() => {
                this.nderrimiRegistry.set(nderrimi.nderrimiId , nderrimi);
                this.selectedNderrimi = nderrimi;
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

    updateNderrimi = async (nderrimi: INderrimi) => {
        this.loading = true;
        try {
            await agent.Nderrimet.update(nderrimi);
            runInAction(() => {
                this.nderrimiRegistry.set(nderrimi.nderrimiId, nderrimi);
                this.selectedNderrimi = nderrimi;
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

    deleteNderrimi = async (id: string) => {
        this.loading = true;
        try {
            await agent.Nderrimet.delete(id);
            runInAction(() => {
                this.nderrimiRegistry.delete(id);
                if (this.selectedNderrimi?.nderrimiId === id) this.cancelSelectedNderrimi();
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