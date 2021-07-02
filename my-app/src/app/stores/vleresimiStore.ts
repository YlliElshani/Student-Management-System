import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { v4 as uuid } from 'uuid';
import { IVleresimi } from "../models/vleresimi";

export default class VleresimiStore {
    vleresimiRegistry = new Map<string, IVleresimi>();
    selectedVleresimi: IVleresimi | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this)
    }

    get vleresimetByDate() {
        return Array.from(this.vleresimiRegistry.values());
    }

    loadVleresimet = async () => {
        try {
            const vleresimet = await agent.Vleresimet.list();
            vleresimet.forEach(vleresimi => {
                vleresimi.vleresimiId = vleresimi.vleresimiId.split('T')[0];
                this.vleresimiRegistry.set(vleresimi.vleresimiId, vleresimi);
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

    selectVleresimi = (id: string) => {
        this.selectedVleresimi = this.vleresimiRegistry.get(id);
    }

    cancelSelectedVleresimi = () => {
        this.selectedVleresimi = undefined;
    }

    openForm = (id?: string) => {
        id ? this.selectVleresimi(id) : this.cancelSelectedVleresimi();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createVleresimi = async (vleresimi: IVleresimi) => {
        this.loading = true;
        vleresimi.vleresimiId = uuid();
        try {
            await agent.Vleresimet.create(vleresimi);
            runInAction(() => {
                this.vleresimiRegistry.set(vleresimi.vleresimiId , vleresimi);
                this.selectedVleresimi = vleresimi;
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

    updateVleresimi = async (vleresimi: IVleresimi) => {
        this.loading = true;
        try {
            await agent.Vleresimet.update(vleresimi);
            runInAction(() => {
                this.vleresimiRegistry.set(vleresimi.vleresimiId, vleresimi);
                this.selectedVleresimi = vleresimi;
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

    deleteVleresimi = async (id: string) => {
        this.loading = true;
        try {
            await agent.Vleresimet.delete(id);
            runInAction(() => {
                this.vleresimiRegistry.delete(id);
                if (this.selectedVleresimi?.vleresimiId === id) this.cancelSelectedVleresimi();
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