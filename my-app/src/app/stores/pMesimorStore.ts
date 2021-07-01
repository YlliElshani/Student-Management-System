import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import {v4 as uuid} from 'uuid'
import { IPlaniMesimor } from "../models/pMesimor";

export default class pMesimorStore {
    planiMRegistry = new Map<string, IPlaniMesimor>();
    selectedPlani: IPlaniMesimor | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial= true;

    constructor() {
        makeAutoObservable(this)
    }

    get planetM() {
        return Array.from(this.planiMRegistry.values());
    }

    loadPlaniM = async () => {
        try {
            const planiM = await agent.PlaniMesimor.list();
            planiM.forEach(planiMes=>{
                this.planiMRegistry.set(planiMes.id, planiMes);
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

    selectPlani = (id: string) => {
        this.selectedPlani = this.planiMRegistry.get(id);
    }

    cancelSelectedPlani = () => {
        this.selectedPlani = undefined;
    }

    openForm = (id?: string) => {
        id ? this.selectPlani(id) : this.cancelSelectedPlani();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createPlaniM = async (planiM: IPlaniMesimor) => {
        this.loading = true;
        planiM.id = uuid();
        try {
            await agent.PlaniMesimor.create(planiM);
            runInAction(() => {
                this.planiMRegistry.set(planiM.id, planiM);
                this.selectedPlani = planiM;
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

    updatePlani = async (planiM: IPlaniMesimor) => {
        this.loading = true;
        try {
            await agent.PlaniMesimor.update(planiM);
            runInAction(() => {
                this.planiMRegistry.set(planiM.id, planiM);
                this.selectedPlani = planiM;
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

    deletePlani = async (id: string) => {
        this.loading = true;
        try {
            await agent.PlaniMesimor.delete(id);
            runInAction(() => {
                this.planiMRegistry.delete(id);
                if(this.selectedPlani?.id === id) this.cancelSelectedPlani();
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
