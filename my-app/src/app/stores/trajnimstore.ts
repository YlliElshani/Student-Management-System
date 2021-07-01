import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { ITrajnim } from "../models/trajnim";
import {v4 as uuid} from 'uuid'

export default class TrajnimStore {
    trajnimRegistry = new Map<string, ITrajnim>();
    selectedTrajnim: ITrajnim | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial= true;

    constructor() {
        makeAutoObservable(this)
    }

    get trajnimet() {
        return Array.from(this.trajnimRegistry.values());
    }

    loadTrajnimet = async () => {
        try {
            const trajnimet = await agent.Trajnimet.list();
            trajnimet.forEach(trajnim=>{
                this.trajnimRegistry.set(trajnim.trajnimId, trajnim);
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

    selectTrajnim = (trajnimId: string) => {
        this.selectedTrajnim = this.trajnimRegistry.get(trajnimId);
    }

    cancelSelectedTrajnim = () => {
        this.selectedTrajnim = undefined;
    }

    openForm = (trajnimId?: string) => {
        trajnimId ? this.selectTrajnim(trajnimId) : this.cancelSelectedTrajnim();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createTrajnim = async (trajnim: ITrajnim) => {
        this.loading = true;
        trajnim.trajnimId = uuid();
        try {
            await agent.Trajnimet.create(trajnim);
            runInAction(() => {
                this.trajnimRegistry.set(trajnim.trajnimId, trajnim);
                this.selectedTrajnim = trajnim;
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

    updateTrajnim = async (trajnim: ITrajnim) => {
        this.loading = true;
        try {
            await agent.Trajnimet.update(trajnim);
            runInAction(() => {
                this.trajnimRegistry.set(trajnim.trajnimId, trajnim);
                this.selectedTrajnim = trajnim;
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

    deleteTrajnim = async (trajnimId: string) => {
        this.loading = true;
        try {
            await agent.Trajnimet.delete(trajnimId);
            runInAction(() => {
                this.trajnimRegistry.delete(trajnimId);
                if(this.selectedTrajnim?.trajnimId === trajnimId) this.cancelSelectedTrajnim();
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

