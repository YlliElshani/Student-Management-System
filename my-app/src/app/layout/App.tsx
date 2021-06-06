import React, {Fragment} from 'react';
import { Container } from 'semantic-ui-react'
import { HomePage } from '../../features/homepage/HomePage';
import { Route } from 'react-router-dom';
import { LogIn } from '../../features/logIn/LogIn';
import { AdminProfile } from '../../features/administrator/AdminProfile';
import UserDashboard from '../../features/administrator/users/UserDashboard';
import LendaDashboard from '../../features/lendet/dashboard/LendaDashboard';
import { Student } from '../../features/student/Student';
import { StudentProfile } from '../../features/student/StudentProfile';
import parentDashboard from '../../features/ParentFeatures/usersP/dashboardP/parentDashboard';
import AppNota from '../../features/notat/dashboard/AppNota';
import Myapp from '../../features/trajnimet/Container/AppContainer/Myapp';
import DetyraApp from '../../features/Detyrat/dashboard1/DetyraApp';
import { TripsList } from '../../features/administrator/trips/TripsList';
import NjoftimeDashboard from '../../features/njoftimetA/njoftimet/dashboard/NjoftimetApp';
import { CompetitionsList } from '../../features/administrator/competitions/CompetitionsList';

const App = () => {
    return (
      <Fragment>
          <Container style={{marginTop:'6em'}}>
              <Route exact path='/' component={HomePage}/>
              <Route exact path='/login' component={LogIn}/>
              <Route exact path='/ParentFeatures' component={parentDashboard}/>
              <Route exact path='/njoftimet' component={NjoftimeDashboard}/>
              <Route exact path='/users' component={UserDashboard}/>
              <Route path='/adminProfile' component={AdminProfile}/>
              <Route exact path='/lendet' component={LendaDashboard}/>
              <Route exact path='/student' component={Student}/>
              <Route exact path='/studentProfile' component={StudentProfile}/>
              <Route exact path='/notat' component={AppNota}/>
              <Route exact path='/trajnimet' component={Myapp}/>
              <Route exact path='/detyrat' component={DetyraApp}/>
              <Route exact path='/trips' component={TripsList}/>
              <Route exact path='/competitions' component={CompetitionsList}/>
          </Container> 
        </Fragment>
    );
}

          
export default App;