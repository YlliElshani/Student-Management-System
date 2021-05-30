import React, {useState, useEffect, Fragment, SyntheticEvent} from 'react';
import { Container } from 'semantic-ui-react'
import {IUser} from '../models/user';
import { NavBar } from '../../features/nav/NavBar';
import UserDashboard from '../../features/users/dashboard/UserDashboard';
import agent from '../api/agent';
import { LoadingComponent } from './LoadingComponent';
import { HomePage } from '../../features/homepage/HomePage';
import { Route } from 'react-router-dom';
import { LogIn } from '../../features/logIn/LogIn';
import { UserProfile } from '../../features/profile/UserProfile';
import { UserList } from '../../features/users/dashboard/UserList';

const App = () => {
  {/*const [users, setUsers] = useState<IUser[]>([]);
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [target, setTarget] = useState('');

  const handleSelectUser = (id: string) => {
    setSelectedUser(users.filter(a => a.userId == id)[0]); 
    setEditMode(false);
  };

  const handleOpenCreateForm = () => {
    setSelectedUser(null);
    setEditMode(true);
  }

  const handleCreateUser = (user: IUser) => {
    setSubmitting(true);
    agent.Users.create(user).then(() => {
      setUsers([...users, user]);
      setSelectedUser(user);
      setEditMode(false);
    }).then(() => setSubmitting(false))
  }

  const handleEditUser = (user: IUser) => { 
    setSubmitting(true);
    agent.Users.update(user).then(() => {
      setUsers([...users.filter(a=> a.userId !== user.userId), user])
      setSelectedUser(user);
      setEditMode(false);
    }).then(() => setSubmitting(false))
  }

  const handleDelete = (event: SyntheticEvent<HTMLButtonElement>, id: string) => {
    setSubmitting(true);
    setTarget(event.currentTarget.name)
    agent.Users.delete(id).then(() => {
          setUsers([...users.filter(a => a.userId !==id)])
    }).then(() => setSubmitting(false))
  }

  useEffect(()=>{
    agent.Users.list().then((response) => { 
      let users: IUser[] = []; 
      response.forEach((user) => {
        users.push(user);
      })
      setUsers(users);
    }).then(() => setLoading(false));
  }, []); 

if(loading) return <LoadingComponent content='Loading Users'/>*/}

    return (
      <Fragment>
          <Container style={{marginTop:'6em'}}>
              {/*<UserDashboard 
                users={users} 
                selectUser={handleSelectUser} 
                selectedUser={selectedUser}
                editMode={editMode}
                setEditMode = {setEditMode}
                setSelectedUser={setSelectedUser}
                openCreateForm={handleOpenCreateForm}
                createUser = {handleCreateUser}
                editUser = {handleEditUser}
                deleteUser = {handleDelete}
                submitting = {submitting}
                target = {target}
              />*/}
              <Route exact path='/' component={HomePage}/>
              <Route exact path='/login' component={LogIn}/>
              <Route exact path='/profile' component={UserProfile}/>
              <Route exact path='/users' component={UserDashboard}/>
          </Container> 
        </Fragment>
    );
}

          
export default App;