import React, {Fragment} from 'react';
import { Container } from 'semantic-ui-react'
import { HomePage } from '../../features/homepage/HomePage';
import { Route } from 'react-router-dom';
import { LogIn } from '../../features/logIn/LogIn';
import { UserProfile } from '../../features/profile/UserProfile';
import { Transcript } from '../../features/transcript/Transcript';
import { AdminProfile } from '../../features/administartor/AdminProfile';
import UserDashboard from '../../features/administartor/users/dashboard/UserDashboard';
import LendaDashboard from '../../features/lendet/dashboard/LendaDashboard';
import { Student } from '../../features/student/Student';
import { StudentProfile } from '../../features/student/StudentProfile';
import parentDashboard from '../../features/ParentFeatures/usersP/dashboardP/parentDashboard';
//import { parentDashboard } from '../../features/ParentFeatures/usersP/dashboardP/parentDashboard';
import AppNota from '../../features/notat/dashboard/AppNota';
import Myapp from '../../features/trajnimet/Container/AppContainer/Myapp';
import DetyraApp from '../../features/Detyrat/dashboard1/DetyraApp';

const App = () => {
    return (
      <Fragment>
          <Container style={{marginTop:'6em'}}>
              <Route exact path='/' component={HomePage}/>
              <Route exact path='/login' component={LogIn}/>
              <Route exact path='/profile' component={UserProfile}/>
              <Route exact path='/ParentFeatures' component={parentDashboard}/>
              <Route exact path='/users' component={UserDashboard}/>
              <Route exact path='/adminProfile' component={AdminProfile}/>
              <Route exact path='/lendet' component={LendaDashboard}/>
              <Route exact path='/student' component={Student}/>
              <Route exact path='/transcript' component={Transcript}/>
              <Route exact path='/studentProfile' component={StudentProfile}/>
              <Route exact path='/notat' component={AppNota}/>
              <Route exact path='/trajnimet' component={Myapp}/>
              <Route exact path='/detyrat' component={DetyraApp}/>
          </Container> 
        </Fragment>
    );
}

          
export default App;