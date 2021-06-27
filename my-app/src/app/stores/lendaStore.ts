import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { v4 as uuid } from 'uuid';
import { ILenda } from '../models/lenda';

export default class LendaStore {
    lendaRegistry = new Map<string, ILenda>();
    selectedLenda: ILenda | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this)
    }

    get lendetByEmri() {
        return Array.from(this.lendaRegistry.values());
    }

    loadLendet = async () => {
        try {
            const lendet = await agent.Lendet.list();
            lendet.forEach(lenda => {
                lenda.lendaId = lenda.lendaId.split('T')[0];
                this.lendaRegistry.set(lenda.lendaId, lenda);
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

    selectLenda = (id: string) => {
        this.selectedLenda = this.lendaRegistry.get(id);
    }

    cancelSelectedLenda = () => {
        this.selectedLenda = undefined;
    }

    openForm = (id?: string) => {
        id ? this.selectLenda(id) : this.cancelSelectedLenda();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createLenda = async (lenda: ILenda) => {
        this.loading = true;
        lenda.lendaId = uuid();
        try {
            await agent.Lendet.create(lenda);
            runInAction(() => {
                this.lendaRegistry.set(lenda.lendaId , lenda);
                this.selectedLenda = lenda;
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

    updateLenda = async (lenda: ILenda) => {
        this.loading = true;
        try {
            await agent.Lendet.update(lenda);
            runInAction(() => {
                this.lendaRegistry.set(lenda.lendaId, lenda);
                this.selectedLenda = lenda;
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

    deleteLenda = async (id: string) => {
        this.loading = true;
        try {
            await agent.Lendet.delete(id);
            runInAction(() => {
                this.lendaRegistry.delete(id);
                if (this.selectedLenda?.lendaId === id) this.cancelSelectedLenda();
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