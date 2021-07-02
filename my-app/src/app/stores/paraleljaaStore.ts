import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { v4 as uuid } from 'uuid';
import { IParaleljaa } from "../models/paraleljaa";

export default class ParaleljaaStore {
    paraleljaaRegistry = new Map<string, IParaleljaa>();
    selectedParaleljaa: IParaleljaa | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this)
    }

    get paraleleetByEmri() {
        return Array.from(this.paraleljaaRegistry.values());
    }

    loadParaleleet = async () => {
        try {
            const paraleleet = await agent.Paraleleet.list();
            paraleleet.forEach(paraleljaa => {
                paraleljaa.paraleljaaId = paraleljaa.paraleljaaId.split('T')[0];
                this.paraleljaaRegistry.set(paraleljaa.paraleljaaId, paraleljaa);
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

    selectParaleljaa = (id: string) => {
        this.selectedParaleljaa = this.paraleljaaRegistry.get(id);
    }

    cancelSelectedParaleljaa = () => {
        this.selectedParaleljaa = undefined;
    }

    openForm = (id?: string) => {
        id ? this.selectParaleljaa(id) : this.cancelSelectedParaleljaa();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createParaleljaa = async (paraleljaa: IParaleljaa) => {
        this.loading = true;
        paraleljaa.paraleljaaId = uuid();
        try {
            await agent.Paraleleet.create(paraleljaa);
            runInAction(() => {
                this.paraleljaaRegistry.set(paraleljaa.paraleljaaId , paraleljaa);
                this.selectedParaleljaa = paraleljaa;
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

    updateParaleljaa = async (paraleljaa: IParaleljaa) => {
        this.loading = true;
        try {
            await agent.Paraleleet.update(paraleljaa);
            runInAction(() => {
                this.paraleljaaRegistry.set(paraleljaa.paraleljaaId, paraleljaa);
                this.selectedParaleljaa = paraleljaa;
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

    deleteParaleljaa = async (id: string) => {
        this.loading = true;
        try {
            await agent.Paraleleet.delete(id);
            runInAction(() => {
                this.paraleljaaRegistry.delete(id);
                if (this.selectedParaleljaa?.paraleljaaId === id) this.cancelSelectedParaleljaa();
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