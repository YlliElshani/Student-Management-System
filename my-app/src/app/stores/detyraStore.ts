import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { IDetyra } from "../models/detyra";
import {v4 as uuid} from 'uuid'

export default class DetyraStore {
    detyraRegistry = new Map<string, IDetyra>();
    selectedDetyra: IDetyra | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial= true;

    constructor() {
        makeAutoObservable(this)
    }

    get detyrat() {
        return Array.from(this.detyraRegistry.values());
    }

    loadDetyrat = async () => {
        try {
            const detyrat = await agent.Detyrat.list();
            detyrat.forEach(detyra=>{
                this.detyraRegistry.set(detyra.detyraId, detyra);
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

    selectDetyra = (detyraId: string) => {
        this.selectedDetyra = this.detyraRegistry.get(detyraId);
    }

    cancelSelectedDetyra = () => {
        this.selectedDetyra = undefined;
    }

    openForm = (detyraId?: string) => {
        detyraId ? this.selectDetyra(detyraId) : this.cancelSelectedDetyra();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createDetyra = async (detyra: IDetyra) => {
        this.loading = true;
        detyra.detyraId = uuid();
        try {
            await agent.Detyrat.create(detyra);
            runInAction(() => {
                this.detyraRegistry.set(detyra.detyraId, detyra);
                this.selectedDetyra = detyra;
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

    updateDetyra = async (detyra: IDetyra) => {
        this.loading = true;
        try {
            await agent.Detyrat.update(detyra);
            runInAction(() => {
                this.detyraRegistry.set(detyra.detyraId, detyra);
                this.selectedDetyra = detyra;
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

    deleteDetyra = async (detyraId: string) => {
        this.loading = true;
        try {
            await agent.Detyrat.delete(detyraId);
            runInAction(() => {
                this.detyraRegistry.delete(detyraId);
                if(this.selectedDetyra?.detyraId === detyraId) this.cancelSelectedDetyra();
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
