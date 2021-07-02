import { makeAutoObservable, runInAction} from "mobx";
import { history } from "../..";
import agent from "../api/agent";
import { User, UserFormValues } from "../models/user";
import { store } from "./store";

export default class UserStore {
    user: User | null = null;
    userRegistry = new Map<string, User>();
    selectedUser: User | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor(){
        makeAutoObservable(this)
    }

    get isLoggedIn () {
        return !! this.user;
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    selectUser = (id: string) => {
        this.selectedUser = this.userRegistry.get(id);
    }

    cancelSelectedUser = () => {
        this.selectedUser = undefined;
    }

    get users(){
        return Array.from(this.userRegistry.values());
    }

    loadUsers = async () => {
        try {
            const users = await agent.Account.list();
            users.forEach(user => {
                this.userRegistry.set(user.id, user);
            })
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
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
            runInAction(() => this.user = user);
        } catch (error) {
            console.log(error);
        }
    }

    registerAdmin = async (values: UserFormValues) => {
        try {
            const user = await agent.Account.registerAdmin(values);
            //store.commonStore.setToken(user.token);
            //runInAction(() => this.user = user);
            history.push('/admin/users');
            store.modalStore.closeModal();
        } catch (error) {
           throw error;
        }
    }
    registerStudent = async (values: UserFormValues) => {
        try {
            const user = await agent.Account.registerStudent(values);
            //store.commonStore.setToken(user.token);
            //runInAction(() => this.user = user);
            history.push('/admin/users');
            store.modalStore.closeModal();
        } catch (error) {
           throw error;
        }
    }

    registerProfesor = async (values: UserFormValues) => {
        try {
            const user = await agent.Account.registerProfesor(values);
            //store.commonStore.setToken(user.token);
            //runInAction(() => this.user = user);
            history.push('/admin/users');
            store.modalStore.closeModal();
        } catch (error) {
           throw error;
        }
    }

    registerGuardian = async (values: UserFormValues) => {
        try {
            const user = await agent.Account.registerGuardian(values);
            //store.commonStore.setToken(user.token);
            //runInAction(() => this.user = user);
            history.push('/admin/users');
            store.modalStore.closeModal();
        } catch (error) {
           throw error;
        }
    }

    updateUser = async (user: User) => {
        this.loading = true;
        try {
            await agent.Account.update(user);
            runInAction(() => {
                this.userRegistry.set(user.id, user);
                this.selectedUser = user;
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

    deleteUser = async (id: string) => {
        this.loading = true;
        try {
            await agent.Account.delete(id);
            runInAction(() => {
                this.userRegistry.delete(id);
                if (this.selectedUser?.id === id) this.cancelSelectedUser();
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