import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { v4 as uuid } from 'uuid';
import { IQyteti } from "../models/qyteti";

export default class QytetiStore {
    qytetiRegistry = new Map<string, IQyteti>();
    selectedQyteti: IQyteti | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this)
    }

    get qytetetByAlphabet() {
        return Array.from(this.qytetiRegistry.values()).sort((a, b) => 
            a.emri.localeCompare(b.emri));
    }

    loadQytetet = async () => {
        try {
            const qytetet = await agent.Qytetet.list();
            qytetet.forEach(qyteti => {
                this.qytetiRegistry.set(qyteti.id, qyteti);
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

    selectQyteti = (id: string) => {
        this.selectedQyteti = this.qytetiRegistry.get(id);
    }

    cancelSelectedQyteti = () => {
        this.selectedQyteti = undefined;
    }

    openForm = (id?: string) => {
        id ? this.selectQyteti(id) : this.cancelSelectedQyteti();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createQyteti = async (qyteti: IQyteti) => {
        this.loading = true;
        qyteti.id = uuid();
        try {
            await agent.Qytetet.create(qyteti);
            runInAction(() => {
                this.qytetiRegistry.set(qyteti.id, qyteti);
                this.selectedQyteti = qyteti;
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

    updateQyteti = async (qyteti: IQyteti) => {
        this.loading = true;
        try {
            await agent.Qytetet.update(qyteti);
            runInAction(() => {
                this.qytetiRegistry.set(qyteti.id, qyteti);
                this.selectedQyteti = qyteti;
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

    deleteQyteti = async (id: string) => {
        this.loading = true;
        try {
            await agent.Qytetet.delete(id);
            runInAction(() => {
                this.qytetiRegistry.delete(id);
                if (this.selectedQyteti?.id === id) this.cancelSelectedQyteti();
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