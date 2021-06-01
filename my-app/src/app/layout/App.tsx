import React, {Fragment} from 'react';
import { Container } from 'semantic-ui-react'
import { HomePage } from '../../features/homepage/HomePage';
import { Route } from 'react-router-dom';
import { LogIn } from '../../features/logIn/LogIn';
import { UserProfile } from '../../features/profile/UserProfile';
import { Transcript } from '../../features/transcript/Transcript';
import { Lendet } from '../../features/lendet/Lendet';
import { AdminProfile } from '../../features/administartor/AdminProfile';
import UserDashboard from '../../features/administartor/users/dashboard/UserDashboard';
import ArsyetoMungesen from '../../features/ParentFeatures/ArsyetoMungesen';
import LendaDashboard from '../../features/lendet/dashboard/LendaDashboard';
import { Student } from '../../features/student/Student';
import { StudentProfile } from '../../features/student/StudentProfile';

const App = () => {
    return (
      <Fragment>
          <Container style={{marginTop:'6em'}}>
              <Route exact path='/' component={HomePage}/>
              <Route exact path='/login' component={LogIn}/>
              <Route exact path='/profile' component={UserProfile}/>
              <Route exact path='/ParentFeatures' component={ArsyetoMungesen}/>
              <Route exact path='/users' component={UserDashboard}/>
              <Route exact path='/adminProfile' component={AdminProfile}/>
              <Route exact path='/lendet' component={LendaDashboard}/>
              <Route exact path='/student' component={Student}/>
              <Route exact path='/transcript' component={Transcript}/>
              <Route exact path='/studentProfile' component={StudentProfile}/>
          </Container> 
        </Fragment>
    );
}

          
export default App;