import axios from 'axios'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Container, Grid, GridColumn, Header, Item, List, Segment } from 'semantic-ui-react'
import agent from '../../../../app/api/agent'
import { LoadingComponent } from '../../../../app/layout/LoadingComponent'
import { IUser } from '../../../../app/models/user'
import { NavBar } from '../../../nav/NavBar'
import UserDetails from '../details/UserDetails'
import UserForm from '../form/UserForm'


const UserDashboard:React.FC = () => {  
    const [users, setUsers] = useState<IUser[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedUser, setSelectedUser] = useState<IUser | null>(null);
    const [editMode, setEditMode] = useState (false);
    const [submitting, setSubmitting] = useState(false);
    const [target, setTarget] = useState('');
    
    const handleSelectUser = (id: string) => {
        setSelectedUser(users.filter(a => a.userId === id)[0])
    }

    const handleOpenCreateForm = () =>{
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
    
    if(loading) return <LoadingComponent content='Loading Users'/>

        return (
            <Grid>
            <NavBar/>
            <Grid.Column width='6'>
                <Segment>
                    <Button onClick={handleOpenCreateForm} content='Shto Përdorues' activeClassName="active"/>
                        <Item.Group divided>
                            {users.map((user) => (
                            <Item key={user.userId}>
                                <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                                <Item.Content inverted="true">
                                <Item.Header >{user.firstName} {user.lastName}</Item.Header>
                                <Item.Meta>{user.role}</Item.Meta>
                                <Item.Extra>
                                    <Button onClick={() => handleSelectUser(user.userId)} size='mini' floated='right' content='Shiko Detajet'/>
                                    <Button name={user.userId} loading={target === user.userId && submitting} onClick={(e) => handleDelete(e, user.userId)} size='mini' floated='right' content='Fshij Perdoruesin' />
                                </Item.Extra>
                                </Item.Content>
                            </Item>
                            ))}
                        </Item.Group>
                </Segment>
                </Grid.Column>
                <Grid.Column width='6'>
                    {selectedUser && !editMode && (<UserDetails setSelectedUser={setSelectedUser} user={selectedUser} setEditMode={setEditMode}/>)}
                    {editMode && <UserForm setEditMode={setEditMode} user={selectedUser!} createUser={handleCreateUser} editUser={handleEditUser} submitting={submitting}/>}
                </Grid.Column>
            </Grid>
        )
}



export default UserDashboard;
