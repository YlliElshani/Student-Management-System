import axios, { AxiosResponse } from 'axios';
import { IUser } from '../models/user';

axios.defaults.baseURL = 'https://localhost:5000/api';

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url:string) => axios.delete(url).then(responseBody)
}

const Users = {
    list: (): Promise<IUser[]> => requests.get('/users'),
    details: (id: string) => requests.get(`/users/${id}`),
    create: (user:IUser) => requests.post('/users', user),
    update: (user: IUser) => requests.put(`/users/${user.id}`, user),
    delete: (id: string) => requests.delete(`/users/${id}`)
}

export default {
    Users
}