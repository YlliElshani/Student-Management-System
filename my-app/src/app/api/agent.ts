import axios, { AxiosResponse } from 'axios';
import { IArsyeja } from '../models/arsyeja';
import { ILenda } from '../models/lenda';
import { IUser } from '../models/user';
//import {ILenda} from '../models/lenda';

axios.defaults.baseURL = 'https://localhost:5000/api';

const responseBody = (response: AxiosResponse) => response.data;

const sleep = (ms: number) => (response: AxiosResponse) => 
    new Promise<AxiosResponse>(resolve => setTimeout(() => resolve(response), ms))

const requests = {
    get: (url: string) => axios.get(url).then(sleep(1000)).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(sleep(1000)).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(sleep(1000)).then(responseBody),
    delete: (url:string) => axios.delete(url).then(sleep(1000)).then(responseBody)
}

const Users = {
    list: (): Promise<IUser[]> => requests.get('/users'),
    details: (id: string) => requests.get(`/users/${id}`),
    create: (user:IUser) => requests.post('/users', user),
    update: (user: IUser) => requests.put(`/users/${user.userId}`, user),
    delete: (id: string) => requests.delete(`/users/${id}`)
}
 

const Lendet = {
    list: (): Promise<ILenda[]> => requests.get('/lendet'),
    details: (id: string) => requests.get(`/lendet/${id}`),
    create: (lenda:ILenda) => requests.post('/lendet', lenda),
    update: (lenda: ILenda) => requests.put(`/lendet/${lenda.lendaId}`, lenda),
    delete: (id: string) => requests.delete(`/lendet/${id}`)
}

const Arsyetimet = {
    list: (): Promise<IArsyeja[]> => requests.get('/usersP'),
    details: (Id: string) => requests.get(`/usersP/${Id}`),
    create: (Arsyetim:IArsyeja) => requests.post('/usersP', Arsyetim),
    update: (Arsyetim: IArsyeja) => requests.put(`/usersP/${Arsyetim.Id}`, Arsyetim),
    delete: (id: string) => requests.delete(`/usersP/${id}`)
}

export default {
    Users, Lendet,Arsyetimet
}