import { makeAutoObservable, runInAction} from "mobx";
import { history } from "../..";
import agent from "../api/agent";
import { User, UserFormValues } from "../models/user";
import { store } from "./store";

export default class UserStore {
    user: User | null = null;

    constructor(){
        makeAutoObservable(this)
    }

    get isLoggedIn () {
        return !! this.user;
    }

    adminLogin = async (values: UserFormValues) => {
        try {
            const user = await agent.Account.loginAdmin(values);
            store.commonStore.setToken(user.token);
            runInAction(() => this.user = user);
            history.push('/admin/profile');
        } catch (error) {
           throw error;
        }
    }

    studentLogin = async (values: UserFormValues) => {
        try {
            const user = await agent.Account.loginStudent(values);
            store.commonStore.setToken(user.token);
            runInAction(() => this.user = user);
            history.push('/studentProfile');
        } catch (error) {
           throw error;
        }
    }

    guardianLogin = async (values: UserFormValues) => {
        try {
            const user = await agent.Account.loginGuardian(values);
            store.commonStore.setToken(user.token);
            runInAction(() => this.user = user);
            history.push('/parentProfile');
        } catch (error) {
           throw error;
        }
    }

    professorLogin = async (values: UserFormValues) => {
        try {
            const user = await agent.Account.loginProfesor(values);
            store.commonStore.setToken(user.token);
            runInAction(() => this.user = user);
            history.push('/profesorprofile');
        } catch (error) {
           throw error;
        }
    }

    logout = () => {
        store.commonStore.setToken(null);
        window.localStorage.removeItem('jwt');
        this.user = null;
        history.push('/');
    }

    getUser = async () => {
        try {
            const user = await agent.Account.current();
            runInAction(()=> this.user = user);
        } catch (error) {
            console.log(error);
        }
    }

    registerAdmin = async (values: UserFormValues) => {
        try {
            const user = await agent.Account.registerAdmin(values);
            store.commonStore.setToken(user.token);
            runInAction(() => this.user = user);
            history.push('/admin/profile');
            //store.modalStore.closeModal();
        } catch (error) {
           throw error;
        }
    }
    registerStudent = async (values: UserFormValues) => {
        try {
            const user = await agent.Account.registerStudent(values);
            store.commonStore.setToken(user.token);
            runInAction(() => this.user = user);
            history.push('/studentProfile');
            //store.modalStore.closeModal();
        } catch (error) {
           throw error;
        }
    }

    registerProfesor = async (values: UserFormValues) => {
        try {
            const user = await agent.Account.registerProfesor(values);
            store.commonStore.setToken(user.token);
            runInAction(() => this.user = user);
            history.push('/profesorprofile');
            //store.modalStore.closeModal();
        } catch (error) {
           throw error;
        }
    }

    registerGuardian = async (values: UserFormValues) => {
        try {
            const user = await agent.Account.registerGuardian(values);
            store.commonStore.setToken(user.token);
            runInAction(() => this.user = user);
            history.push('/parentProfile');
            //store.modalStore.closeModal();
        } catch (error) {
           throw error;
        }
    }
}