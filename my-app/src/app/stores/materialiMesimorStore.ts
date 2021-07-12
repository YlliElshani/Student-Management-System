import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { v4 as uuid } from 'uuid';
import { Materiali } from "../models/materiali";

export default class MaterialiMesimorStore {
    materialiRegistry = new Map<string, Materiali>();
    selectedMateriali: Materiali | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this)
    }

    get materialet() {
        return Array.from(this.materialiRegistry.values());
    }

    loadMaterialet = async () => {
        try {
            const materialet = await agent.MaterialiMesimor.list();
            materialet.forEach(materiali => {
                this.materialiRegistry.set(materiali.id, materiali);
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

    selectMateriali = (id: string) => {
        this.selectedMateriali = this.materialiRegistry.get(id);
    }

    cancelSelectedMateriali = () => {
        this.selectedMateriali = undefined;
    }

    openForm = (id?: string) => {
        id ? this.selectMateriali(id) : this.cancelSelectedMateriali();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createMateriali = async (materiali: Materiali) => {
        this.loading = true;
        materiali.id = uuid();
        try {
            await agent.MaterialiMesimor.create(materiali);
            runInAction(() => {
                this.materialiRegistry.set(materiali.id, materiali);
                this.selectedMateriali = materiali;
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

    updateMateriali = async (materiali: Materiali) => {
        this.loading = true;
        try {
            await agent.MaterialiMesimor.update(materiali);
            runInAction(() => {
                this.materialiRegistry.set(materiali.id, materiali);
                this.selectedMateriali = materiali;
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

    deleteMateriali = async (id: string) => {
        this.loading = true;
        try {
            await agent.MaterialiMesimor.delete(id);
            runInAction(() => {
                this.materialiRegistry.delete(id);
                if (this.selectedMateriali?.id === id) this.cancelSelectedMateriali();
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