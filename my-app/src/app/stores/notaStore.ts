import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { INota } from "../models/nota";
import {v4 as uuid} from 'uuid'

export default class NotaStore {
    notaRegistry = new Map<string, INota>();
    selectedNota: INota | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial= true;

    constructor() {
        makeAutoObservable(this)
    }

    get notatByLenda() {
        return Array.from(this.notaRegistry.values()).sort((a, b) => 
            Date.parse(a.lenda) - Date.parse(b.lenda));
    }

    loadNotat = async () => {
        try {
            const notat = await agent.Notat.list();
            notat.forEach(nota=>{
                this.notaRegistry.set(nota.notaId, nota);
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

    selectNota = (id: string) => {
        this.selectedNota = this.notaRegistry.get(id);
    }

    cancelSelectedNota = () => {
        this.selectedNota = undefined;
    }

    openForm = (id?: string) => {
        id ? this.selectNota(id) : this.cancelSelectedNota();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createNota = async (nota: INota) => {
        this.loading = true;
        nota.notaId = uuid();
        try {
            await agent.Notat.create(nota);
            runInAction(() => {
                this.notaRegistry.set(nota.notaId, nota);
                this.selectedNota = nota;
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

    updateNota = async (nota: INota) => {
        this.loading = true;
        try {
            await agent.Notat.update(nota);
            runInAction(() => {
                this.notaRegistry.set(nota.notaId, nota);
                this.selectedNota = nota;
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

    deleteNota = async (id: string) => {
        this.loading = true;
        try {
            await agent.Notat.delete(id);
            runInAction(() => {
                this.notaRegistry.delete(id);
                if(this.selectedNota?.notaId === id) this.cancelSelectedNota();
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