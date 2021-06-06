import React, {Fragment} from 'react';
import { Container } from 'semantic-ui-react'
import { HomePage } from '../../features/homepage/HomePage';
import { Route } from 'react-router-dom';
import { LogIn } from '../../features/logIn/LogIn';
import { UserProfile } from '../../features/profile/UserProfile';
import { Transcript } from '../../features/transcript/Transcript';
import { AdminProfile } from '../../features/administartor/AdminProfile';
import UserDashboard from '../../features/administartor/users/UserDashboard';
import LendaDashboard from '../../features/lendet/dashboard/LendaDashboard';
import { Student } from '../../features/student/Student';
import { StudentProfile } from '../../features/student/StudentProfile';
import parentDashboard from '../../features/ParentFeatures/usersP/dashboardP/parentDashboard';
import AppNota from '../../features/notat/dashboard/AppNota';
import { TripsList } from '../../features/administartor/trips/TripsList';
import NjoftimeDashboard from '../../features/njoftimetA/njoftimet/dashboard/NjoftimetApp';

const App = () => {
    return (
      <Fragment>
          <Container style={{marginTop:'6em'}}>
              <Route exact path='/' component={HomePage}/>
              <Route exact path='/login' component={LogIn}/>
              <Route exact path='/profile' component={UserProfile}/>
              <Route exact path='/ParentFeatures' component={parentDashboard}/>
              <Route exact path='/njoftimet' component={NjoftimeDashboard}/>
              <Route exact path='/users' component={UserDashboard}/>
              <Route path='/adminProfile' component={AdminProfile}/>
              <Route exact path='/lendet' component={LendaDashboard}/>
              <Route exact path='/student' component={Student}/>
              <Route exact path='/transcript' component={Transcript}/>
              <Route exact path='/studentProfile' component={StudentProfile}/>
              <Route exact path='/notat' component={AppNota}/>
              <Route exact path='/trips' component={TripsList}/>
          </Container> 
        </Fragment>
    );
}

          
export default App;