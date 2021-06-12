import axios, { AxiosResponse } from 'axios';
import { IArsyeja } from '../models/arsyeja';
import { ILenda } from '../models/lenda';
import { IUser } from '../models/user';
import { INota } from '../models/nota';
import { ITrajnim } from '../models/trajnim';
import { IDetyra } from '../models/detyra';
import { ITrip } from '../models/trip';
import { INjoftimi } from '../models/njoftimi';
import { ICompetition } from '../models/competition';
import { INdihma } from '../models/kNdihme';

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
    list: (): Promise<IArsyeja[]> => requests.get('/Arsyeja'),
    details: (id: string) => requests.get(`/Arsyeja/${id}`),
    create: (Arsyetim:IArsyeja) => requests.post('/Arsyeja', Arsyetim),
    update: (Arsyetim: IArsyeja) => requests.put(`/Arsyeja/${Arsyetim.id}`, Arsyetim),
    delete: (id: string) => requests.delete(`/Arsyeja/${id}`)
}

const Notat = {
    list: (): Promise<INota[]> => requests.get('/notat'),
    details: (id: string) => requests.get(`/notat/${id}`),
    create: (nota:INota) => requests.post('/notat', nota),
    update: (nota: INota) => requests.put(`/notat/${nota.notaId}`, nota),
    delete: (id: string) => requests.delete(`/notat/${id}`)
}
const Trajnimet = {
    list: (): Promise<ITrajnim[]> => requests.get('/trajnimet'),
    details: (Id: string) => requests.get(`/trajnimet/${Id}`),
    create: (Trajnim:ITrajnim) => requests.post('/trajnimet', Trajnim),
    update: (Trajnim: ITrajnim) => requests.put(`/trajnimet/${Trajnim.trajnimId}`, Trajnim),
    delete: (id: string) => requests.delete(`/trajnimet/${id}`)
}

const Detyrat = {
    list: (): Promise<IDetyra[]> => requests.get('/detyrat'),
    details: (id: string) => requests.get(`/detyrat/${id}`),
    create: (detyra:IDetyra) => requests.post('/detyrat', detyra),
    update: (detyra: IDetyra) => requests.put(`/detyrat/${detyra.detyraId}`, detyra),
    delete: (id: string) => requests.delete(`/detyrat/${id}`)
}


const Trips = {
    tripsList: () : Promise<ITrip[]> => requests.get('/trips'),
    tripDetails: (id: string) => requests.get(`/trips/${id}`),
    createTrip: (trip:ITrip) => requests.post('/trips',trip),
    updateTrip: (trip: ITrip) => requests.put(`/trips/${trip.tripId}`, trip),
    deleteTrip: (id: string) => requests.delete(`/trips/${id}`)
}


const Njoftimet = {
    list: () : Promise<INjoftimi[]> => requests.get('/njoftimet'),
    details: (id: string) => requests.get(`/njoftimet/${id}`),
    create: (njoftim:INjoftimi) => requests.post('/njoftimet',njoftim),
    update: (njoftimi: INjoftimi) => requests.put(`/njoftimet/${njoftimi.id}`, njoftimi),
    delete: (id: string) => requests.delete(`/njoftimet/${id}`)
}

const Competitions = {
    competitionsList: () : Promise<ICompetition[]> => requests.get('/competition'),
    competitionDetails: (id: string) => requests.get(`/competition/${id}`),
    createCompetition: (competition:ICompetition) => requests.post('/competition',competition),
    updateCompetition: (competition: ICompetition) => requests.put(`/competition/${competition.competitionId}`, competition),
    deleteCompetition: (id: string) => requests.delete(`/competition/${id}`)
}

const KerkesaN = {
    listN: () : Promise<INdihma[]> => requests.get('/KerkesaN'),
    detailsN: (id: string) => requests.get(`/KerkesaN/${id}`),
    createN: (kerkesaNdihme:INdihma) => requests.post('/KerkesaN',kerkesaNdihme),
    updateN: (kerkesaNdihme: INdihma) => requests.put(`/KerkesaN/${kerkesaNdihme.id}`, kerkesaNdihme),
    deleteN: (id: string) => requests.delete(`/KerkesaN/${id}`)
}


export default {
    Users, Lendet, Notat, Trajnimet, Detyrat, Trips, Competitions, Arsyetimet,Njoftimet,KerkesaN
}