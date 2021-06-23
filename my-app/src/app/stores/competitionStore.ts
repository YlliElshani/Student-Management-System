import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { v4 as uuid } from 'uuid';
import { ICompetition } from "../models/competition";

export default class CompetitionStore {
    compRegistry = new Map<string, ICompetition>();
    selectedCompetition: ICompetition | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this)
    }

    get competitionsByDate() {
        return Array.from(this.compRegistry.values()).sort((a, b) => 
            Date.parse(a.date) - Date.parse(b.date));
    }

    loadCompetitions = async () => {
        try {
            const competitions = await agent.Competitions.list();
            competitions.forEach(competition => {
                competition.date = competition.date.split('T')[0];
                this.compRegistry.set(competition.competitionId, competition);
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

    selectCompetition = (id: string) => {
        this.selectedCompetition = this.compRegistry.get(id);
    }

    cancelSelectedCompetition = () => {
        this.selectedCompetition = undefined;
    }

    openForm = (id?: string) => {
        id ? this.selectCompetition(id) : this.cancelSelectedCompetition();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createCompetition = async (competition: ICompetition) => {
        this.loading = true;
        competition.competitionId = uuid();
        try {
            await agent.Competitions.create(competition);
            runInAction(() => {
                this.compRegistry.set(competition.competitionId, competition);
                this.selectedCompetition = competition;
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

    updateCompetition = async (competition: ICompetition) => {
        this.loading = true;
        try {
            await agent.Competitions.update(competition);
            runInAction(() => {
                this.compRegistry.set(competition.competitionId, competition);
                this.selectedCompetition = competition;
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

    deleteCompetition = async (id: string) => {
        this.loading = true;
        try {
            await agent.Competitions.delete(id);
            runInAction(() => {
                this.compRegistry.delete(id);
                if (this.selectedCompetition?.competitionId === id) this.cancelSelectedCompetition();
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