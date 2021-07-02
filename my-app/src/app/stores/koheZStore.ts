import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { v4 as uuid } from 'uuid';
import { IKoheZ } from "../models/kOres";

export default class KoheZStore {
    koheZRegistry = new Map<string, IKoheZ>();
    selectedkoheZ: IKoheZ | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this)
    }
    
    get koheZ(){
        return Array.from(this.koheZRegistry.values());
    }

    loadKoheZ = async () => {
        try {
            const koheZ = await agent.KohezgjatjaOres.list();
            koheZ.forEach(kohetZ => {
                this.koheZRegistry.set(kohetZ.id, kohetZ);
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

    selectKohaZ = (id: string) => {
        this.selectedkoheZ = this.koheZRegistry.get(id);
    }

    cancelSelectedKOheZ = () => {
        this.selectedkoheZ = undefined;
    }

    openForm = (id?: string) => {
        id ? this.selectKohaZ(id) : this.cancelSelectedKOheZ();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createKoheZ = async (koheZ: IKoheZ) => {
        this.loading = true;
        koheZ.id = uuid();
        try {
            await agent.KohezgjatjaOres.create(koheZ);
            runInAction(() => {
                this.koheZRegistry.set(koheZ.id, koheZ);
                this.selectedkoheZ = koheZ;
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

    updateKoheZ = async (kohaZ: IKoheZ) => {
        this.loading = true;
        try {
            await agent.KohezgjatjaOres.update(kohaZ);
            runInAction(() => {
                this.koheZRegistry.set(kohaZ.id, kohaZ);
                this.selectedkoheZ = kohaZ;
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

    deleteKohaZ = async (id: string) => {
        this.loading = true;
        try {
            await agent.KohezgjatjaOres.delete(id);
            runInAction(() => {
                this.koheZRegistry.delete(id);
                if (this.selectedkoheZ?.id === id) this.cancelSelectedKOheZ();
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