import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { v4 as uuid } from 'uuid';
import { IOrari } from '../models/orari';

export default class OrariStore {
    orariRegistry = new Map<string, IOrari>();
    selectedOrari: IOrari | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this)
    }

    get oraretByEmri() {
        return Array.from(this.orariRegistry.values());
    }

    loadOraret = async () => {
        try {
            const oraret = await agent.Oraret.list();
            oraret.forEach(orari => {
                orari.orariId = orari.orariId.split('T')[0];
                this.orariRegistry.set(orari.orariId, orari);
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

    selectOrari = (id: string) => {
        this.selectedOrari = this.orariRegistry.get(id);
    }

    cancelSelectedOrari = () => {
        this.selectedOrari = undefined;
    }

    openForm = (id?: string) => {
        id ? this.selectOrari(id) : this.cancelSelectedOrari();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createOrari = async (orari: IOrari) => {
        this.loading = true;
        orari.orariId = uuid();
        try {
            await agent.Oraret.create(orari);
            runInAction(() => {
                this.orariRegistry.set(orari.orariId , orari);
                this.selectedOrari = orari;
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

    updateOrari = async (orari: IOrari) => {
        this.loading = true;
        try {
            await agent.Oraret.update(orari);
            runInAction(() => {
                this.orariRegistry.set(orari.orariId, orari);
                this.selectedOrari = orari;
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

    deleteOrari = async (id: string) => {
        this.loading = true;
        try {
            await agent.Oraret.delete(id);
            runInAction(() => {
                this.orariRegistry.delete(id);
                if (this.selectedOrari?.orariId === id) this.cancelSelectedOrari();
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