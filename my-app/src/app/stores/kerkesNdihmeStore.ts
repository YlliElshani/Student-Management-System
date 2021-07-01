import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { v4 as uuid } from 'uuid';
import { INdihma } from "../models/kNdihme";

export default class KerkesNdihmeStore {
    kerkesNRegistry = new Map<string, INdihma>();
    selectedKerkese: INdihma | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this)
    }

    get kerkesat(){
      return Array.from(this.kerkesNRegistry.values());
  }


    loadKerkesat = async () => {
        try {
            const kerkesat = await agent.KerkesaN.listN();
            kerkesat.forEach(kerkese => {
                this.kerkesNRegistry.set(kerkese.id, kerkese);
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

    selectKerkesa = (id: string) => {
        this.selectedKerkese = this.kerkesNRegistry.get(id);
    }

    cancelSelectedKerkese = () => {
        this.selectedKerkese = undefined;
    }

    openForm = (id?: string) => {
        id ? this.selectKerkesa(id) : this.cancelSelectedKerkese();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createKerkesa = async (kerkese: INdihma) => {
        this.loading = true;
        kerkese.id = uuid();
        try {
            await agent.KerkesaN.createN(kerkese);
            runInAction(() => {
                this.kerkesNRegistry.set(kerkese.id, kerkese);
                this.selectedKerkese = kerkese;
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

    updateKerkese = async (kerkese: INdihma) => {
        this.loading = true;
        try {
            await agent.KerkesaN.updateN(kerkese);
            runInAction(() => {
                this.kerkesNRegistry.set(kerkese.id, kerkese);
                this.selectedKerkese = kerkese;
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

    deleteKerkesa = async (id: string) => {
        this.loading = true;
        try {
            await agent.KerkesaN.deleteN(id);
            runInAction(() => {
                this.kerkesNRegistry.delete(id);
                if (this.selectedKerkese?.id === id) this.cancelSelectedKerkese();
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