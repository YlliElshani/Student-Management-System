import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { v4 as uuid } from 'uuid';
import { IPerioda } from '../models/perioda';

export default class PeriodaStore {
    periodaRegistry = new Map<string, IPerioda>();
    selectedPerioda: IPerioda | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this)
    }

    get periodatByEmri() {
        return Array.from(this.periodaRegistry.values());
    }

    loadPeriodat = async () => {
        try {
            const periodat = await agent.Periodat.list();
            periodat.forEach(perioda => {
                perioda.periodaId = perioda.periodaId.split('T')[0];  // Spliting ID ? 
                this.periodaRegistry.set(perioda.periodaId, perioda);
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

    selectPerioda = (id: string) => {
        this.selectedPerioda = this.periodaRegistry.get(id);
    }

    cancelSelectedPerioda = () => {
        this.selectedPerioda = undefined;
    }

    openForm = (id?: string) => {
        id ? this.selectPerioda(id) : this.cancelSelectedPerioda();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createPerioda = async (perioda: IPerioda) => {
        this.loading = true;
        perioda.periodaId = uuid();
        try {
            await agent.Periodat.create(perioda);
            runInAction(() => {
                this.periodaRegistry.set(perioda.periodaId , perioda);
                this.selectedPerioda = perioda;
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

    updatePerioda = async (perioda: IPerioda) => {
        this.loading = true;
        try {
            await agent.Periodat.update(perioda);
            runInAction(() => {
                this.periodaRegistry.set(perioda.periodaId, perioda);
                this.selectedPerioda = perioda;
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

    deletePerioda = async (id: string) => {
        this.loading = true;
        try {
            await agent.Periodat.delete(id);
            runInAction(() => {
                this.periodaRegistry.delete(id);
                if (this.selectedPerioda?.periodaId === id) this.cancelSelectedPerioda();
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

