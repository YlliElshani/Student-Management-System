import React, {useState, useEffect, Fragment, SyntheticEvent} from 'react';
import { Container } from 'semantic-ui-react'
import {IUser} from '../models/user';
import { NavBar } from '../../features/nav/NavBar';
import UserDashboard from '../../features/users/dashboard/UserDashboard';
import agent from '../api/agent';
import { LoadingComponent } from './LoadingComponent';

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleSelectUser = (id: string) => {
    setSelectedUser(users.filter(a => a.id === id)[0]);
    setEditMode(false);
  };

  const handleOpenCreateForm = () => {
    setSelectedUser(null);
    setEditMode(true);
  }

  const handleCreateUser = (user: IUser) => {
    agent.Users.create(user).then(() => {
      setUsers([...users, user])
      setSelectedUser(user);
      setEditMode(false);
    })
  }

  const handleEditUser = (user: IUser) => {
    agent.Users.update(user).then(() => {
      setUsers([...users.filter(a=> a.id !== user.id), user])
      setSelectedUser(user);
      setEditMode(false);
    })
  }

  const handleDelete = (event: SyntheticEvent<HTMLButtonElement>, id: string) => {
    agent.Users.delete(id).then(() => {
          setUsers([...users.filter(a => a.id !==id)])
    })
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

  if(loading) return <LoadingComponent content='Loading Users'/>

    return (
      <Fragment>
        <NavBar/>
          <Container style={{marginTop:'10em'}}>
              <UserDashboard users={users} 
              selectUser={handleSelectUser} 
              selectedUser={selectedUser}
              editMode={editMode}
              setEditMode = {setEditMode}
              setSelectedUser={setSelectedUser}
              openCreateForm={handleOpenCreateForm}
              createUser = {handleCreateUser}
              editUser = {handleEditUser}
              deleteUser = {handleDelete}
            />
          </Container>
        </Fragment>
    );
}

          
export default App;