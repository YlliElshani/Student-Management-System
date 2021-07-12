import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { v4 as uuid } from 'uuid';
import { IEvidenca } from "../models/evidence";

export default class EvidencaStore {
    evidencaRegistry = new Map<string, IEvidenca>();
    selectedEvidenca: IEvidenca | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this)
    }

    get evidencat(){
      return Array.from(this.evidencaRegistry.values());
  }


    loadEvidencat = async () => {
        try {
            const evidence = await agent.Evidence.list();
            evidence.forEach(ev => {
                this.evidencaRegistry.set(ev.id, ev);
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

    selectEvidenca = (id: string) => {
        this.selectedEvidenca = this.evidencaRegistry.get(id);
    }

    cancelSelectedEvidence = () => {
        this.selectedEvidenca = undefined;
    }

    openForm = (id?: string) => {
        id ? this.selectEvidenca(id) : this.cancelSelectedEvidence();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createEvidence = async (ev: IEvidenca) => {
        this.loading = true;
        ev.id = uuid();
        try {
            await agent.Evidence.create(ev);
            runInAction(() => {
                this.evidencaRegistry.set(ev.id, ev);
                this.selectedEvidenca = ev;
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

    updateEvidence = async (ev: IEvidenca) => {
        this.loading = true;
        try {
            await agent.Evidence.update(ev);
            runInAction(() => {
                this.evidencaRegistry.set(ev.id, ev);
                this.selectedEvidenca = ev;
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

    deleteEvidenca = async (id: string) => {
        this.loading = true;
        try {
            await agent.Evidence.delete(id);
            runInAction(() => {
                this.evidencaRegistry.delete(id);
                if (this.selectedEvidenca?.id === id) this.cancelSelectedEvidence();
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