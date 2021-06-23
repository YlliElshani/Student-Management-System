import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { v4 as uuid } from 'uuid';
import { ITrip } from "../models/trip";

export default class TripStore {
    tripRegistry = new Map<string, ITrip>();
    selectedTrip: ITrip | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this)
    }

    get tripsByDate() {
        return Array.from(this.tripRegistry.values()).sort((a, b) => 
            Date.parse(a.date) - Date.parse(b.date));
    }

    loadTrips = async () => {
        try {
            const activities = await agent.Trips.list();
            activities.forEach(trip => {
                trip.date = trip.date.split('T')[0];
                this.tripRegistry.set(trip.tripId, trip);
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

    selectTrip = (id: string) => {
        this.selectedTrip = this.tripRegistry.get(id);
    }

    cancelSelectedTrip = () => {
        this.selectedTrip = undefined;
    }

    openForm = (id?: string) => {
        id ? this.selectTrip(id) : this.cancelSelectedTrip();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createTrip = async (trip: ITrip) => {
        this.loading = true;
        trip.tripId = uuid();
        try {
            await agent.Trips.create(trip);
            runInAction(() => {
                this.tripRegistry.set(trip.tripId, trip);
                this.selectedTrip = trip;
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

    updateTrip = async (trip: ITrip) => {
        this.loading = true;
        try {
            await agent.Trips.update(trip);
            runInAction(() => {
                this.tripRegistry.set(trip.tripId, trip);
                this.selectedTrip = trip;
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

    deleteTrip = async (id: string) => {
        this.loading = true;
        try {
            await agent.Trips.delete(id);
            runInAction(() => {
                this.tripRegistry.delete(id);
                if (this.selectedTrip?.tripId === id) this.cancelSelectedTrip();
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