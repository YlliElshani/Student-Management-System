import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import LendaDashboard from '../../features/lendet/dashboard/LendaDashboard';

import AppNota from '../../features/notat/dashboard/AppNota';




import { EServices } from '../../features/student/EServices/EServices';
import ListApp from '../../features/student/listoNjoftimetS/listApp';
import ListGApp from '../../features/student/listoGara/listGApp';
import ListTApp from '../../features/student/listoTrips/listTApp';
import { NotFound } from '../../features/errors/NotFound';
import TripsList from '../../features/administrator/trips/TripsList';
import { observer } from 'mobx-react-lite';
import CompetitionsList from '../../features/administrator/competitions/CompetitionsList';
import AdminLogin from '../../features/users/AdminLogin';
import { ToastContainer } from 'react-toastify';
import ModalContainer  from '../common/modals/modalContainer';
import GuardianLogin from '../../features/users/GuardianLogin';
import ProfesorLogin from '../../features/users/ProfesorLogin';
import StudentLogin from '../../features/users/StudentLogin';
import AppNotaStudenti from '../../features/student/notatStudenti/dashboard/AppNotaStudenti';



import AdminProfile from '../../features/administrator/AdminProfile';
import { useStore } from '../stores/store';
import { LoadingComponent } from './LoadingComponent';
import HomePage from '../../features/homepage/HomePage';
import AdminRegister from '../../features/users/AdminRegister';
import StudentRegister from '../../features/users/StudentRegister';
import ProfesorRegister from '../../features/users/ProfesorRegister';
import GuardianRegister from '../../features/users/GuardianRegister';
import StudentProfile from '../../features/student/StudentProfile';
import ProfesorProfile from '../../features/profesor/Profesor-Profili/ProfesorProfile';
import ListTApp2 from '../../features/listoTrips2/listTApp2';
import QytetetList from '../../features/qytetet/QytetetList';
import PrezantimetList from '../../features/student/Prezantimi/PrezantimetList';
import Shtesat from '../../features/administrator/Shtesat';


import KlasaDashboard from '../../features/klaset/dashboard/KlasaDashboard';
import VitiAkademikDashboard from '../../features/vitetAkademike/dashboard/VitiAkademikDashboard';
import UserList from '../../features/administrator/users/UserList';
import DetyraList from '../../features/profesor/Detyrat/DetyraList';
import TrajnimList from '../../features/profesor/trajnimet/TrajnimList';

import listApp from '../../features/ParentFeatures/listNjoftimet/listApp/listApp';
import ArsyetimetList from '../../features/ParentFeatures/mungesat/ArsyetimetList';
import ParentProfile from '../../features/ParentFeatures/ParentProfile';
import NjoftimeList from '../../features/njoftimetA/njoftimetN/NjoftimeList';
import KerkesaList from '../../features/student/KerkesNdihme/KerkesaList';
import ProfesorShtesat from '../../features/profesor/ProfesorShtesat';
import VijushmeriaDashboard from '../../features/profesor/vijushmerit/VijushmeriaDashboard';
import PlaniMList from '../../features/planiMesimor/PlaniMList';



function App () {
  const {commonStore, userStore} = useStore();

  useEffect(() => {
    if (commonStore.token){
      userStore.getUser().finally(() => commonStore.setAppLoaded());
    } else {
      commonStore.setAppLoaded();
    } 
  }, [commonStore, userStore])

  if(!commonStore.appLoaded) return <LoadingComponent content='Loading App ...'/>

    return (
      <>
      <ToastContainer position='bottom-right' hideProgressBar/>
      <ModalContainer />
        <Switch>
          <Route exact path='/' component={HomePage}/>

          <Route exact path='/guardianLogin' component={GuardianLogin}/>
          <Route exact path='/guardianRegister' component={GuardianRegister}/>
          <Route exact path='/njoftimet' component={NjoftimeList}/>
          <Route exact path='/listApp' component={listApp}/>
          <Route exact path='/mungesat' component={ArsyetimetList}/>
          <Route exact path='/parentProfile' component={ParentProfile}/>

          <Route exact path='/adminLogin' component={AdminLogin}/>
          <Route exact path='/adminRegister' component={AdminRegister}/>
          <Route exact path='/admin/profile' component={AdminProfile}/>
          <Route exact path='/admin/trips' component={TripsList}/>
          <Route exact path='/admin/competitions' component={CompetitionsList}/>
          <Route exact path='/admin/njoftimetN' component={NjoftimeList}/>
          <Route exact path='/admin/qytetet' component={QytetetList}/>

          <Route exact path='/detyrat' component={DetyraList}/>

          <Route exact path='/admin/lendet' component={LendaDashboard}/>
          <Route exact path='/profesor/vijushmeria' component={VijushmeriaDashboard}/>

          <Route exact path='/admin/shtesat' component={Shtesat}/>
          <Route exact path='/profesor/ProfesorShtesat' component={ProfesorShtesat}/>
          <Route exact path='/admin/klaset' component={KlasaDashboard}/>
          <Route exact path='/admin/vitetAkademike' component={VitiAkademikDashboard}/>
          <Route exact path='/admin/users' component={UserList}/>

          <Route exact path='/student/e-services' component={EServices}/>
          <Route exact path='/student/profile' component={StudentProfile}/>
          <Route exact path='/student/KerkesNdihme' component={KerkesaList}/>
          <Route exact path='/student/prezantimet' component={PrezantimetList}/>
          <Route exact path='/student/notat' component={AppNotaStudenti}/>


          <Route exact path='/student/listoTrips' component={ListTApp}/>
          <Route exact path='/usersP/listoTrips2' component={ListTApp2}/>
          <Route exact path='/listoNjoftimetS' component={ListApp}/>
          <Route exact path='/student/listoGara' component={ListGApp}/>
          <Route exact path='/student/listoNjoftimetS' component={ListApp}/>
          
          <Route exact path='/lendet' component={LendaDashboard}/>

          <Route exact path='/studentProfile' component={StudentProfile}/>
          <Route exact path='/EServices' component={EServices}/>
          <Route exact path='/notat' component={AppNota}/>
          <Route exact path='/notatStudenti' component={AppNotaStudenti}/>

          <Route exact path='/trajnimet' component={TrajnimList}/>
        

          <Route exact path='/profesor/notat' component={AppNota}/>
          <Route exact path='/profesor/notat' component={AppNota}/>
          <Route exact path='/profesor/planiMesimor' component={PlaniMList}/>
          
          <Route exact path='/EServices' component={EServices}/>
          <Route exact path='/listoNjoftimetS' component={ListApp}/>
          <Route exact path='/listoGara' component={ListGApp}/>
          <Route exact path='/listoTrips' component={ListTApp}/>
          <Route exact path='/prezantimet' component={PrezantimetList}/>
          <Route exact path='/studentLogin' component={StudentLogin}/>
          <Route exact path='/studentRegister' component={StudentRegister}/>

          <Route exact path='/profesorLogin' component={ProfesorLogin}/>
          <Route exact path='/profesorRegister' component={ProfesorRegister}/>
          <Route exact path='/profesorprofile' component={ProfesorProfile}/>
          <Route component={NotFound}/>
        </Switch>
      </>
    );
}

          
export default observer(App);