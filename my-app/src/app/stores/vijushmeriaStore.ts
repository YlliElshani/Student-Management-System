import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { v4 as uuid } from 'uuid';
import { IVijushmeria } from '../models/vijushmeria';

export default class VijushmeriaStore {
    vijushmeriaRegistry = new Map<string, IVijushmeria>();
    selectedVijushmeria: IVijushmeria | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this)
    }

    get vijushmeritByPjesmarrja() {
        return Array.from(this.vijushmeriaRegistry.values());
    }

    loadVijushmerit = async () => {
        try {
            const vijushmerit = await agent.Vijushmerit.list();
            vijushmerit.forEach(vijushmeria => {
                vijushmeria.vijushmeriaId = vijushmeria.vijushmeriaId.split('T')[0];
                this.vijushmeriaRegistry.set(vijushmeria.vijushmeriaId, vijushmeria);
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

    selectVijushmeria = (id: string) => {
        this.selectedVijushmeria = this.vijushmeriaRegistry.get(id);
    }

    cancelSelectedVijushmeria = () => {
        this.selectedVijushmeria = undefined;
    }

    openForm = (id?: string) => {
        id ? this.selectVijushmeria(id) : this.cancelSelectedVijushmeria();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createVijushmeria = async (vijushmeria: IVijushmeria) => {
        this.loading = true;
        vijushmeria.vijushmeriaId = uuid();
        try {
            await agent.Vijushmerit.create(vijushmeria);
            runInAction(() => {
                this.vijushmeriaRegistry.set(vijushmeria.vijushmeriaId , vijushmeria);
                this.selectedVijushmeria = vijushmeria;
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

    updateVijushmeria = async (vijushmeria: IVijushmeria) => {
        this.loading = true;
        try {
            await agent.Vijushmerit.update(vijushmeria);
            runInAction(() => {
                this.vijushmeriaRegistry.set(vijushmeria.vijushmeriaId, vijushmeria);
                this.selectedVijushmeria = vijushmeria;
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

    deleteVijushmeria = async (id: string) => {
        this.loading = true;
        try {
            await agent.Vijushmerit.delete(id);
            runInAction(() => {
                this.vijushmeriaRegistry.delete(id);
                if (this.selectedVijushmeria?.vijushmeriaId === id) this.cancelSelectedVijushmeria();
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
