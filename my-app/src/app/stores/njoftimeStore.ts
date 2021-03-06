import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { v4 as uuid } from 'uuid';
import { INjoftimi } from "../models/njoftimi";

export default class NjoftimeStore {
    njoftimeRegistry = new Map<string, INjoftimi>();
    selectedNjoftimi: INjoftimi | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this)
    }

    get njoftimet(){
      return Array.from(this.njoftimeRegistry.values());
  }


    loadNjoftimet = async () => {
        try {
            const njoftime = await agent.Njoftimet.list();
            njoftime.forEach(njoftim => {
                this.njoftimeRegistry.set(njoftim.id, njoftim);
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

    selectNjoftim = (id: string) => {
        this.selectedNjoftimi = this.njoftimeRegistry.get(id);
    }

    cancelSelectedNjoftimi = () => {
        this.selectedNjoftimi = undefined;
    }

    openForm = (id?: string) => {
        id ? this.selectNjoftim(id) : this.cancelSelectedNjoftimi();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createNjoftim = async (njoftim: INjoftimi) => {
        this.loading = true;
        njoftim.id = uuid();
        try {
            await agent.Njoftimet.create(njoftim);
            runInAction(() => {
                this.njoftimeRegistry.set(njoftim.id, njoftim);
                this.selectedNjoftimi = njoftim;
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

    updateNjoftimi = async (njoftim: INjoftimi) => {
        this.loading = true;
        try {
            await agent.Njoftimet.update(njoftim);
            runInAction(() => {
                this.njoftimeRegistry.set(njoftim.id, njoftim);
                this.selectedNjoftimi = njoftim;
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

    deleteNjoftim = async (id: string) => {
        this.loading = true;
        try {
            await agent.Njoftimet.delete(id);
            runInAction(() => {
                this.njoftimeRegistry.delete(id);
                if (this.selectedNjoftimi?.id === id) this.cancelSelectedNjoftimi();
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