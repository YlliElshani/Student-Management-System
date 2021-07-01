import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { v4 as uuid } from 'uuid';
import { IArsyeja } from "../models/arsyeja";

export default class ArsyejaStore {
    arsyejaRegistry = new Map<string, IArsyeja>();
    selectedArsyeja: IArsyeja | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this)
    }
    
    get arsyet(){
        return Array.from(this.arsyejaRegistry.values());
    }

    loadArsyet = async () => {
        try {
            const arsyet = await agent.Arsyetimet.list();
            arsyet.forEach(arsyeja => {
                this.arsyejaRegistry.set(arsyeja.id, arsyeja);
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

    selectArsyeja = (id: string) => {
        this.selectedArsyeja = this.arsyejaRegistry.get(id);
    }

    cancelSelectedArsyeja = () => {
        this.selectedArsyeja = undefined;
    }

    openForm = (id?: string) => {
        id ? this.selectArsyeja(id) : this.cancelSelectedArsyeja();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createArsyeja = async (arsyeja: IArsyeja) => {
        this.loading = true;
        arsyeja.id = uuid();
        try {
            await agent.Arsyetimet.create(arsyeja);
            runInAction(() => {
                this.arsyejaRegistry.set(arsyeja.id, arsyeja);
                this.selectedArsyeja = arsyeja;
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

    updateArsyeja = async (arsyeja: IArsyeja) => {
        this.loading = true;
        try {
            await agent.Arsyetimet.update(arsyeja);
            runInAction(() => {
                this.arsyejaRegistry.set(arsyeja.id, arsyeja);
                this.selectedArsyeja = arsyeja;
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

    deleteArsyeja = async (id: string) => {
        this.loading = true;
        try {
            await agent.Arsyetimet.delete(id);
            runInAction(() => {
                this.arsyejaRegistry.delete(id);
                if (this.selectedArsyeja?.id === id) this.cancelSelectedArsyeja();
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