import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { v4 as uuid } from 'uuid';
import { IVitiAkademik } from "../models/vitiAkademik";

export default class VitiAkademikStore {
    vitiAkademikRegistry = new Map<string, IVitiAkademik>();
    selectedVitiAkademik: IVitiAkademik | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this)
    }

    get vitetAkademikeByEmri() {
        return Array.from(this.vitiAkademikRegistry.values());
    }

    loadVitetAkadmike = async () => {
        try {
            const vitetAkademike = await agent.VitetAkademike.list();
            vitetAkademike.forEach(vitiAkademik => {
                vitiAkademik.vitiAkademikId = vitiAkademik.vitiAkademikId.split('T')[0];
                this.vitiAkademikRegistry.set(vitiAkademik.vitiAkademikId, vitiAkademik);
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

    selectVitiAkademik = (id: string) => {
        this.selectedVitiAkademik = this.vitiAkademikRegistry.get(id);
    }

    cancelSelectedVitiAkademik = () => {
        this.selectedVitiAkademik = undefined;
    }

    openForm = (id?: string) => {
        id ? this.selectVitiAkademik(id) : this.cancelSelectedVitiAkademik();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createVitiAkademik = async (vitiAkademik: IVitiAkademik) => {
        this.loading = true;
        vitiAkademik.vitiAkademikId = uuid();
        try {
            await agent.VitetAkademike.create(vitiAkademik);
            runInAction(() => {
                this.vitiAkademikRegistry.set(vitiAkademik.vitiAkademikId , vitiAkademik);
                this.selectedVitiAkademik = vitiAkademik;
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

    updateVitiAkademik = async (vitiAkademik: IVitiAkademik) => {
        this.loading = true;
        try {
            await agent.VitetAkademike.update(vitiAkademik);
            runInAction(() => {
                this.vitiAkademikRegistry.set(vitiAkademik.vitiAkademikId, vitiAkademik);
                this.selectedVitiAkademik = vitiAkademik;
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

    deleteVitiAkademik = async (id: string) => {
        this.loading = true;
        try {
            await agent.VitetAkademike.delete(id);
            runInAction(() => {
                this.vitiAkademikRegistry.delete(id);
                if (this.selectedVitiAkademik?.vitiAkademikId === id) this.cancelSelectedVitiAkademik();
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