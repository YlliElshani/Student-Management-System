import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { v4 as uuid } from 'uuid';
import { Provimi } from "../models/provimi";

export default class ProvimiStore {
    provimiRegistry = new Map<string, Provimi>();
    selectedProvimi: Provimi | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this)
    }

    get provimet() {
        return Array.from(this.provimiRegistry.values());
    }

    loadProvimet = async () => {
        try {
            const provimet = await agent.Provimet.list();
            provimet.forEach(provimi => {
                this.provimiRegistry.set(provimi.id, provimi);
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

    selectProvimi = (id: string) => {
        this.selectedProvimi = this.provimiRegistry.get(id);
    }

    cancelSelectedProvimi = () => {
        this.selectedProvimi = undefined;
    }

    openForm = (id?: string) => {
        id ? this.selectProvimi(id) : this.cancelSelectedProvimi();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createProvimi = async (provimi: Provimi) => {
        this.loading = true;
        provimi.id = uuid();
        try {
            await agent.Provimet.create(provimi);
            runInAction(() => {
                this.provimiRegistry.set(provimi.id, provimi);
                this.selectedProvimi = provimi;
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

    updateProvimi = async (provimi: Provimi) => {
        this.loading = true;
        try {
            await agent.Provimet.update(provimi);
            runInAction(() => {
                this.provimiRegistry.set(provimi.id, provimi);
                this.selectedProvimi = provimi;
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

    deleteProvimi = async (id: string) => {
        this.loading = true;
        try {
            await agent.Provimet.delete(id);
            runInAction(() => {
                this.provimiRegistry.delete(id);
                if (this.selectedProvimi?.id === id) this.cancelSelectedProvimi();
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