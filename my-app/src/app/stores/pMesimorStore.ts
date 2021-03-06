import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { v4 as uuid } from 'uuid';
import { IPlaniM } from "../models/pMesimor";
import { ILenda } from "../models/lenda";

export default class PMesimorStore {
    planiMRegistry = new Map<string, IPlaniM>();
    lendaMRegistry = new Map<string, ILenda>();
    selectedPlaniM: IPlaniM | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this)
    }

    get planiM() {
        return Array.from(this.planiMRegistry.values());
    }

    get lendet() {
        return Array.from(this.lendaMRegistry.values());
    }


    
    loadLandet = async () => {
        try {
            const lendeM = await agent.Lendet.list();
            lendeM.forEach(lendaPlani => {
                this.lendaMRegistry.set(lendaPlani.lendaId, lendaPlani);
            })
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }

    loadPlaniM = async () => {
        try {
            const planiM = await agent.PlaniMesimor.list();
            planiM.forEach(planiMesimor => {
                this.planiMRegistry.set(planiMesimor.id, planiMesimor);
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

    selectPlaniM = (id: string) => {
        this.selectedPlaniM = this.planiMRegistry.get(id);
    }

    cancelSelectedPlaniM = () => {
        this.selectedPlaniM = undefined;
    }

    openForm = (id?: string) => {
        id ? this.selectPlaniM(id) : this.cancelSelectedPlaniM();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createPlaniM = async (planiMesimor: IPlaniM) => {
        this.loading = true;
        planiMesimor.id = uuid();
        try {
            await agent.PlaniMesimor.create(planiMesimor);
            runInAction(() => {
                this.planiMRegistry.set(planiMesimor.id, planiMesimor);
                this.selectedPlaniM = planiMesimor;
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

    updatePlaniM= async (planiMesimor: IPlaniM) => {
        this.loading = true;
        try {
            await agent.PlaniMesimor.update(planiMesimor);
            runInAction(() => {
                this.planiMRegistry.set(planiMesimor.id, planiMesimor);
                this.selectedPlaniM = planiMesimor;
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

    deletePlaniM = async (id: string) => {
        this.loading = true;
        try {
            await agent.PlaniMesimor.delete(id);
            runInAction(() => {
                this.planiMRegistry.delete(id);
                if (this.selectedPlaniM?.id === id) this.cancelSelectedPlaniM();
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