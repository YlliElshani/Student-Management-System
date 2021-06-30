import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import LendaDashboard from '../../features/lendet/dashboard/LendaDashboard';
import AppNota from '../../features/notat/dashboard/AppNota';
import Myapp from '../../features/profesor/trajnimet/Container/AppContainer/Myapp';
import DetyraApp from '../../features/profesor/Detyrat/dashboard1/DetyraApp';
import NjoftimeDashboard from '../../features/njoftimetA/njoftimet/dashboard/NjoftimetApp';
import { ProfesorProfile } from '../../features/profesor/ProfesorProfile';
import { AppNdihme } from '../../features/student/KerkesNdihme/dashboard/AppNdihme';
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
import NjoftimetApp from '../../features/njoftimetA/njoftimet/dashboard/NjoftimetApp';
import AppNotaStudenti from '../../features/student/notatStudenti/dashboard/AppNotaStudenti';
import LendaStudentiDashboard from '../../features/student/lendetStudenti/dashboard/LendaStudentiDashboard';
import AdminProfile from '../../features/administrator/AdminProfile';
import { useStore } from '../stores/store';
import { LoadingComponent } from './LoadingComponent';
import modalContainer from '../common/modals/modalContainer';
import { Container } from 'semantic-ui-react';
import HomePage from '../../features/homepage/HomePage';
import AdminRegister from '../../features/users/AdminRegister';
import StudentRegister from '../../features/users/StudentRegister';
import ProfesorRegister from '../../features/users/ProfesorRegister';
import GuardianRegister from '../../features/users/GuardianRegister';
import StudentProfile from '../../features/student/StudentProfile';
import parentDashboard from '../../features/ParentFeatures/usersP/dashboardP/parentDashboard';
import ParentProfile from '../../features/ParentFeatures/usersP/ParentProfile';
import ListTApp2 from '../../features/listoTrips2/listTApp2';
import listApp from '../../features/ParentFeatures/usersP/listNjoftimet/listApp/listApp';
import QytetetList from '../../features/qytetet/QytetetList';
import PrezantimiDetails from '../../features/student/Prezantimi/PrezantimiDetails';
import PrezantimetList from '../../features/student/Prezantimi/PrezantimetList';
import Shtesat from '../../features/administrator/Shtesat';
import KlasaDashboard from '../../features/klaset/dashboard/KlasaDashboard';
import UserList from '../../features/administrator/users/UserList';


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
          <Route exact path='/usersP/ParentFeatures' component={parentDashboard}/>
          <Route exact path='/parentProfile' component={ParentProfile}/>
          <Route exact path='/njoftimet' component={NjoftimeDashboard}/>
          <Route exact path='/listApp' component={listApp}/>
          <Route exact path='/KerkesNdihme' component={AppNdihme}/>

          <Route exact path='/adminLogin' component={AdminLogin}/>
          <Route exact path='/adminRegister' component={AdminRegister}/>
          <Route exact path='/admin/profile' component={AdminProfile}/>
          <Route exact path='/admin/trips' component={TripsList}/>
          <Route exact path='/admin/competitions' component={CompetitionsList}/>
          <Route exact path='/admin/njoftimet' component={NjoftimetApp}/>
          <Route exact path='/admin/qytetet' component={QytetetList}/>
          <Route exact path='/admin/lendet' component={LendaDashboard}/>
          <Route exact path='/admin/shtesat' component={Shtesat}/>
          <Route exact path='/admin/klaset' component={KlasaDashboard}/>
          <Route exact path='/admin/users' component={UserList}/>

          <Route exact path='/student/e-services' component={EServices}/>
          <Route exact path='/student/profile' component={StudentProfile}/>
          <Route exact path='/student/KerkesNdihme' component={AppNdihme}/>
          <Route exact path='/student/prezantimet' component={PrezantimetList}/>
          <Route exact path='/student/notat' component={AppNotaStudenti}/>
          <Route exact path='/student/lendet' component={LendaStudentiDashboard}/>
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
          <Route exact path='/trajnimet' component={Myapp}/>
          <Route exact path='/detyrat' component={DetyraApp}/>
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