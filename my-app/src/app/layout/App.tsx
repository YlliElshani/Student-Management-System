import React from 'react';
import { HomePage } from '../../features/homepage/HomePage';
import { Route, Switch } from 'react-router-dom';
import { AdminProfile } from '../../features/administrator/AdminProfile';
import LendaDashboard from '../../features/lendet/dashboard/LendaDashboard';
import { StudentProfile } from '../../features/student/StudentProfile';
import AppNota from '../../features/notat/dashboard/AppNota';
import Myapp from '../../features/trajnimet/Container/AppContainer/Myapp';
import DetyraApp from '../../features/Detyrat/dashboard1/DetyraApp';
import NjoftimeDashboard from '../../features/njoftimetA/njoftimet/dashboard/NjoftimetApp';
import { ProfesorProfile } from '../../features/profesor/ProfesorProfile';
import parentDashboard from '../../features/ParentFeatures/usersP/dashboardP/parentDashboard';
import { ParentProfile } from '../../features/parentProfile/ParentProfile';
import listApp from '../../features/ParentFeatures/usersP/listNjoftimet/listApp/listApp';
import { AppNdihme } from '../../features/student/KerkesNdihme/dashboard/AppNdihme';
import { EServices } from '../../features/student/EServices/EServices';
import ListApp from '../../features/student/listoNjoftimetS/listApp';
import ListGApp from '../../features/student/listoGara/listGApp';
import ListTApp from '../../features/student/listoTrips/listTApp';
import { NotFound } from '../../features/errors/NotFound';
import { PrezantimetList } from '../../features/student/Prezantimi/PrezantimetList';
import TripsList from '../../features/administrator/trips/TripsList';
import { observer } from 'mobx-react-lite';
import CompetitionsList from '../../features/administrator/competitions/CompetitionsList';
import AdminLogin from '../../features/users/AdminLogin';
import { ToastContainer } from 'react-toastify';
import GuardianLogin from '../../features/users/GuardianLogin';
import ProfesorLogin from '../../features/users/ProfesorLogin';
import StudentLogin from '../../features/users/StudentLogin';
import NjoftimetApp from '../../features/njoftimetA/njoftimet/dashboard/NjoftimetApp';
import AppNotaStudenti from '../../features/student/notatStudenti/dashboard/AppNotaStudenti';
import LendaStudentiDashboard from '../../features/student/lendetStudenti/dashboard/LendaStudentiDashboard';


function App () {
    return (
      <>
      <ToastContainer position='bottom-right' hideProgressBar/>
        <Switch>
          <Route exact path='/' component={HomePage}/>

          <Route exact path='/guardianLogin' component={GuardianLogin}/>
          <Route exact path='/ParentFeatures' component={parentDashboard}/>
          <Route exact path='/parentProfile' component={ParentProfile}/>
          <Route exact path='/njoftimet' component={NjoftimeDashboard}/>
          <Route exact path='/listApp' component={listApp}/>
          <Route exact path='/KerkesNdihme' component={AppNdihme}/>

          <Route exact path='/adminLogin' component={AdminLogin}/>
          <Route exact path='/admin/profile' component={AdminProfile}/>
          <Route exact path='/admin/trips' component={TripsList}/>
          <Route exact path='/admin/competitions' component={CompetitionsList}/>
          <Route exact path='/admin/njoftimet' component={NjoftimetApp}/>

          <Route exact path='/student/e-services' component={EServices}/>
          <Route exact path='/student/profile' component={StudentProfile}/>
          <Route exact path='/student/KerkesNdihme' component={AppNdihme}/>
          <Route exact path='/student/prezantimet' component={PrezantimetList}/>
          <Route exact path='/student/notat' component={AppNotaStudenti}/>
          <Route exact path='/student/lendet' component={LendaStudentiDashboard}/>
          <Route exact path='/student/listoTrips' component={ListTApp}/>
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

          <Route exact path='/profesorLogin' component={ProfesorLogin}/>
          <Route exact path='/profesorprofile' component={ProfesorProfile}/>
          <Route component={NotFound}/>
        </Switch>
      </>
    );
}

          
export default observer(App);