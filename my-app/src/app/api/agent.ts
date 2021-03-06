import axios, { AxiosError, AxiosResponse } from 'axios';
import { IArsyeja } from '../models/arsyeja';
import { ILenda } from '../models/lenda';
import { User, UserFormValues } from '../models/user';
import { INota } from '../models/nota';
import { ITrajnim } from '../models/trajnim';
import { IDetyra } from '../models/detyra';
import { ITrip } from '../models/trip';
import { INjoftimi } from '../models/njoftimi';
import { ICompetition } from '../models/competition';
import { INdihma } from '../models/kNdihme';
import { IPrezantimi } from '../models/prezantimi';
import { toast } from 'react-toastify';
import { history } from '../..';
import { store } from '../stores/store';
import { IQyteti } from '../models/qyteti';
import { IKlasa } from '../models/klasa';
import { IVitiAkademik } from '../models/vitiAkademik';
import { IVleresimi } from '../models/vleresimi';
import { IVijushmeria } from '../models/vijushmeria';
import { IParaleljaa } from '../models/paraleljaa';
import { IParaleljaKlasa } from '../models/paraleljaKlasa';
import { INderrimi } from '../models/nderrimi';
import { IPerioda } from '../models/perioda';
import { Materiali } from '../models/materiali';
import { IKoheZ } from '../models/kOres';
import { ISalla } from '../models/salla';
import { IOrari } from '../models/orari';
import { IPlaniM } from '../models/pMesimor';
import { Provimi } from '../models/provimi';
import { IEvidenca } from '../models/evidence';



axios.defaults.baseURL = 'https://localhost:5000/api';

axios.interceptors.request.use(config => {
    const token = store.commonStore.token;
    if(token) config.headers.Authorization = `Bearer ${token}`
    return config;
})

axios.interceptors.response.use(async response => {
    await sleep(1000);
    return response;
}, (error: AxiosError) => {
    const{status} = error.response!;
    switch(status) {
        case 400:
            toast.error('Bad Request');
            break;
        case 401:
            toast.error('Unauthorized');
            break;
        case 404:
            history.push('/not-found');
            break;
        case 500:
            toast.error('Server Error');
            break;
    }
    return Promise.reject(error);
})

const responseBody = (response: AxiosResponse) => response.data;

const sleep = (ms: number) => (response: AxiosResponse) => 
    new Promise<AxiosResponse>(resolve => setTimeout(() => resolve(response), ms))

const requests = {
    get: (url: string) => axios.get(url).then(sleep(1000)).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(sleep(1000)).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(sleep(1000)).then(responseBody),
    delete: (url:string) => axios.delete(url).then(sleep(1000)).then(responseBody)
}

const Lendet = {
    list: (): Promise<ILenda[]> => requests.get('/lendet'),
    details: (lendaid: string) => requests.get(`/lendet/${lendaid}`),
    create: (lenda:ILenda) => requests.post('/lendet', lenda),
    update: (lenda: ILenda) => requests.put(`/lendet/${lenda.lendaId}`, lenda),
    delete: (id: string) => requests.delete(`/lendet/${id}`)
}

const Vijushmerit = {
    list: (): Promise<IVijushmeria[]> => requests.get('/vijushmerit'),
    details: (vijushmeriaId: string) => requests.get(`/vijushmerit/${vijushmeriaId}`),
    create: (vijushmeria:IVijushmeria) => requests.post('/vijushmerit', vijushmeria),
    update: (vijushmeria: IVijushmeria) => requests.put(`/vijushmerit/${vijushmeria.vijushmeriaId}`, vijushmeria),
    delete: (id: string) => requests.delete(`/vijushmerit/${id}`)
}

const Periodat = {
    list: (): Promise<IPerioda[]> => requests.get('/periodat'),
    details: (periodaId: string) => requests.get(`/periodat/${periodaId}`),
    create: (perioda:IPerioda) => requests.post('/periodat', perioda),
    update: (perioda: IPerioda) => requests.put(`/periodat/${perioda.periodaId}`, perioda),
    delete: (id: string) => requests.delete(`/periodat/${id}`)
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
    details: (notaId: string) => requests.get(`/notat/${notaId}`),
    create: (nota:INota) => requests.post('/notat', nota),
    update: (nota: INota) => requests.put(`/notat/${nota.notaId}`, nota),
    delete: (notaId: string) => requests.delete(`/notat/${notaId}`)
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
    list: () : Promise<ITrip[]> => requests.get('/trips'),
    details: (id: string) => requests.get(`/trips/${id}`),
    create: (trip:ITrip) => requests.post('/trips',trip),
    update: (trip: ITrip) => requests.put(`/trips/${trip.tripId}`, trip),
    delete: (id: string) => requests.delete(`/trips/${id}`)
}


const Njoftimet = {
    list: () : Promise<INjoftimi[]> => requests.get('/njoftimet'),
    details: (id: string) => requests.get(`/njoftimet/${id}`),
    create: (njoftim:INjoftimi) => requests.post('/njoftimet',njoftim),
    update: (njoftimi: INjoftimi) => requests.put(`/njoftimet/${njoftimi.id}`, njoftimi),
    delete: (id: string) => requests.delete(`/njoftimet/${id}`)
}

const Competitions = {
    list: () : Promise<ICompetition[]> => requests.get('/competition'),
    details: (id: string) => requests.get(`/competition/${id}`),
    create: (competition:ICompetition) => requests.post('/competition',competition),
    update: (competition: ICompetition) => requests.put(`/competition/${competition.competitionId}`, competition),
    delete: (id: string) => requests.delete(`/competition/${id}`)
}

const Evidence = {
    list: () : Promise<IEvidenca[]> => requests.get('/evidence'),
    details: (id: string) => requests.get(`/evidence/${id}`),
    create: (evidence:IEvidenca) => requests.post('/evidence',evidence),
    update: (evidence: IEvidenca) => requests.put(`/evidence/${evidence.id}`, evidence),
    delete: (id: string) => requests.delete(`/evidence/${id}`)
}

const KerkesaN = {
    listN: () : Promise<INdihma[]> => requests.get('/KerkesaN'),
    detailsN: (id: string) => requests.get(`/KerkesaN/${id}`),
    createN: (kerkesaNdihme:INdihma) => requests.post('/KerkesaN',kerkesaNdihme),
    updateN: (kerkesaNdihme: INdihma) => requests.put(`/KerkesaN/${kerkesaNdihme.id}`, kerkesaNdihme),
    deleteN: (id: string) => requests.delete(`/KerkesaN/${id}`)
}

const Prezantimet = {
    list: () : Promise<IPrezantimi[]> => requests.get('/prezantimet'),
    details: (id: string) => requests.get(`/prezantimet/${id}`),
    create: (prezantimi:IPrezantimi) => requests.post('/prezantimet',prezantimi),
    update: (prezantimi: IPrezantimi) => requests.put(`/prezantimet/${prezantimi.prezantimiId}`, prezantimi),
    delete: (id: string) => requests.delete(`/prezantimet/${id}`)
}

const PlaniMesimor = {
    list: () : Promise<IPlaniM[]> => requests.get('/PlaniMesimor'),
    details: (id: string) => requests.get(`/PlaniMesimor/${id}`),
    create: (planiM:IPlaniM) => requests.post('/PlaniMesimor',planiM),
    update: (planiM: IPlaniM) => requests.put(`/PlaniMesimor/${planiM.id}`, planiM),
    delete: (id: string) => requests.delete(`/PlaniMesimor/${id}`)
}

const Qytetet = {
    list: () : Promise<IQyteti[]> => requests.get('/qytetet'),
    details: (id: string) => requests.get(`/qytetet/${id}`),
    create: (qyteti:IQyteti) => requests.post('/qytetet',qyteti),
    update: (qyteti: IQyteti) => requests.put(`/qytetet/${qyteti.id}`, qyteti),
    delete: (id: string) => requests.delete(`/qytetet/${id}`)
}


const KohezgjatjaOres = {
    list: () : Promise<IKoheZ[]> => requests.get('/Kohezgjatja'),
    details: (id: string) => requests.get(`/Kohezgjatja/${id}`),
    create: (koheZ:IKoheZ) => requests.post('/Kohezgjatja',koheZ),
    update: (koheZ: IKoheZ) => requests.put(`/Kohezgjatja/${koheZ.id}`, koheZ),
    delete: (id: string) => requests.delete(`/Kohezgjatja/${id}`)
}

const Sallat = {
    list: () : Promise<ISalla[]> => requests.get('/sallat'),
    details: (id: string) => requests.get(`/sallat/${id}`),
    create: (salla: ISalla) => requests.post('/sallat',salla),
    update: (salla: ISalla) => requests.put(`/sallat/${salla.sallaId}`, salla),
    delete: (id: string) => requests.delete(`/sallat/${id}`)
}

const Account = {
    current: () => requests.get('/admin'),
    listProfessor: (): Promise<User[]> => requests.get('/profesor/list'),
    listAdmin: (): Promise<User[]> => requests.get('/admin/list'),
    listStudent: (): Promise<User[]> => requests.get('/student/list'),
    listGuardian: (): Promise<User[]> => requests.get('/guardian/list'),
    loginAdmin: (user: UserFormValues) => requests.post(`/admin/loginAdmin`, user),
    registerAdmin: (user: UserFormValues) => requests.post(`/admin/registerAdmin`, user),
    loginStudent: (user: UserFormValues) => requests.post(`/student/loginStudent`, user),
    registerStudent: (user: UserFormValues) => requests.post(`/student/registerStudent`, user),
    loginProfesor: (user: UserFormValues) => requests.post(`/profesor/loginProfesor`, user),
    registerProfesor: (user: UserFormValues) => requests.post(`/profesor/registerProfesor`, user),
    loginGuardian: (user: UserFormValues) => requests.post(`/guardian/loginGuardian`, user),
    registerGuardian: (user: UserFormValues) => requests.post(`/guardian/registerGuardian`, user),
    update: (user: User) => requests.put(`/admin/${user.id}`, user),
    delete: (id: string) => requests.delete(`/admin/${id}`)
}

const Klaset = {
    list: (): Promise<IKlasa[]> => requests.get('/klaset'),
    details: (klasaid: string) => requests.get(`/klaset/${klasaid}`),
    create: (klasa:IKlasa) => requests.post('/klaset', klasa),
    update: (klasa: IKlasa) => requests.put(`/klaset/${klasa.klasaId}`, klasa),
    delete: (id: string) => requests.delete(`/klaset/${id}`)
}

const VitetAkademike = {
    list: (): Promise<IVitiAkademik[]> => requests.get('/vitetAkademike'),
    details: (vitiAkademikId: string) => requests.get(`/vitetAkademike/${vitiAkademikId}`),
    create: (vitiAkademik:IVitiAkademik) => requests.post('/vitetAkademike', vitiAkademik),
    update: (vitiAkademik: IVitiAkademik) => requests.put(`/vitetAkademike/${vitiAkademik.vitiAkademikId}`, vitiAkademik),
    delete: (id: string) => requests.delete(`/vitetAkademike/${id}`)
}

const Vleresimet = {
    list: (): Promise<IVleresimi[]> => requests.get('/vleresimet'),
    details: (vleresimiId: string) => requests.get(`/vleresimet/${vleresimiId}`),
    create: (vleresimi:IVleresimi) => requests.post('/vleresimet', vleresimi),
    update: (vleresimi: IVleresimi) => requests.put(`/vleresimet/${vleresimi.vleresimiId}`, vleresimi),
    delete: (id: string) => requests.delete(`/vleresimet/${id}`)
}
const Paraleleet = {
    list: (): Promise<IParaleljaa[]> => requests.get('/paraleleet'),
    details: (paraleljaaId: string) => requests.get(`/paraleleet/${paraleljaaId}`),
    create: (paraleljaa:IParaleljaa) => requests.post('/paraleleet', paraleljaa),
    update: (paraleljaa: IParaleljaa) => requests.put(`/paraleleet/${paraleljaa.paraleljaaId}`, paraleljaa),
    delete: (id: string) => requests.delete(`/paraleleet/${id}`)
}

const ParaleletKlaset = {
    list: (): Promise<IParaleljaKlasa[]> => requests.get('/paraleletKlaset'),
    details: (paraleljaKlasaId: string) => requests.get(`/paraleletKlaset/${paraleljaKlasaId}`),
    create: (paraleljaKlasa:IParaleljaKlasa) => requests.post('/paraleletKlaset', paraleljaKlasa),
    update: (paraleljaKlasa: IParaleljaKlasa) => requests.put(`/paraleletKlaset/${paraleljaKlasa.paraleljaKlasaId}`, paraleljaKlasa),
    delete: (id: string) => requests.delete(`/paraleletKlaset/${id}`)
}
const Nderrimet = {
    list: (): Promise<INderrimi[]> => requests.get('/nderrimet'),
    details: (nderrimiId: string) => requests.get(`/nderrimet/${nderrimiId}`),
    create: (nderrimi:INderrimi) => requests.post('/nderrimet', nderrimi),
    update: (nderrimi: INderrimi) => requests.put(`/nderrimet/${nderrimi.nderrimiId}`, nderrimi),
    delete: (id: string) => requests.delete(`/nderrimet/${id}`)
}


const MaterialiMesimor = {
    list: (): Promise<Materiali[]> => requests.get('/materiali'),
    create: (materiali:Materiali) => requests.post('/materiali', materiali),
    update: (materiali: Materiali) => requests.put(`/materiali/${materiali.id}`, materiali),
    delete: (id: string) => requests.delete(`/materiali/${id}`) 
}

const Oraret = {
    list: (): Promise<IOrari[]> => requests.get('/oraret'),
    details: (orariId: string) => requests.get(`/oraret/${orariId}`),
    create: (orari:IOrari) => requests.post('/oraret', orari),
    update: (orari: IOrari) => requests.put(`/oraret/${orari.orariId}`, orari),
    delete: (id: string) => requests.delete(`/oraret/${id}`)
}

const Provimet = {
    list: (): Promise<Provimi[]> => requests.get('/provimi'),
    create: (provimi:Provimi) => requests.post('/provimi', provimi),
    update: (provimi:Provimi) => requests.put(`/provimi/${provimi.id}`, provimi),
    delete: (id: string) => requests.delete(`/provimi/${id}`)
}

const agent = {
    Account, 
    Lendet, 
    Notat, 
    Trajnimet, 
    Detyrat, 
    Trips, 
    Competitions, 
    Arsyetimet,
    Njoftimet,
    KerkesaN, 
    Prezantimet,
    Qytetet,
    Klaset,
    VitetAkademike,
    Vleresimet,
    Vijushmerit,
    PlaniMesimor, 
    Paraleleet, 
    ParaleletKlaset, 
    Nderrimet,
    Periodat,
    MaterialiMesimor,
    KohezgjatjaOres,
    Sallat, 
    Oraret,
    Provimet,
    Evidence
}

export default agent;