import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { v4 as uuid } from 'uuid';
import { IPrezantimi } from "../models/prezantimi";

export default class PrezantimiStore {
    prezantimiRegistry = new Map<string, IPrezantimi>();
    selectedPrezantimi: IPrezantimi | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this)
    }

    get prezantimetByDate() {
        return Array.from(this.prezantimiRegistry.values());
    }

    loadPrezantimet = async () => {
        try {
            const prezantimet = await agent.Prezantimet.list();
            prezantimet.forEach(prezantimi => {
                prezantimi.data = prezantimi.data.split('')[0];
                this.prezantimiRegistry.set(prezantimi.prezantimiId, prezantimi);
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

    selectPrezantimi = (id: string) => {
        this.selectedPrezantimi = this.prezantimiRegistry.get(id);
    }

    cancelSelectedPrezantimi = () => {
        this.selectedPrezantimi = undefined;
    }

    openForm = (id?: string) => {
        id ? this.selectPrezantimi(id) : this.cancelSelectedPrezantimi();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createPrezantimi = async (prezantimi: IPrezantimi) => {
        this.loading = true;
        prezantimi.prezantimiId = uuid();
        try {
            await agent.Prezantimet.create(prezantimi);
            runInAction(() => {
                this.prezantimiRegistry.set(prezantimi.prezantimiId, prezantimi);
                this.selectedPrezantimi = prezantimi;
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

    updatePrezantimi = async (prezantimi: IPrezantimi) => {
        this.loading = true;
        try {
            await agent.Prezantimet.update(prezantimi);
            runInAction(() => {
                this.prezantimiRegistry.set(prezantimi.prezantimiId, prezantimi);
                this.selectedPrezantimi = prezantimi;
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

    deletePrezantimi = async (id: string) => {
        this.loading = true;
        try {
            await agent.Prezantimet.delete(id);
            runInAction(() => {
                this.prezantimiRegistry.delete(id);
                if (this.selectedPrezantimi?.prezantimiId === id) this.cancelSelectedPrezantimi();
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