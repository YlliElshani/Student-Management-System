import axios from 'axios'
import React, { Component, SyntheticEvent } from 'react'
import { Button, Container, Grid, Header, Item, List, Segment } from 'semantic-ui-react'
import { IUser } from '../../../app/models/user'
import { NavBar } from '../../nav/NavBar'
import UserDetails from '../details/UserDetails'
import  UserForm  from '../form/UserForm'
import { UserList } from './UserList'

{/*interface IProps {
    users: IUser[];
    selectUser: (id: string) => void;
    selectedUser: IUser | null;
    editMode: boolean;
    setEditMode: (editMode: boolean) => void;
    setSelectedUser: (user: IUser | null) => void;
    openCreateForm: () => void;
    createUser: (user:IUser) => void;
    editUser: (user:IUser) =>void;
    deleteUser: (e: SyntheticEvent<HTMLButtonElement>,id: string) => void;
    submitting: boolean;
    target: string;
}

const UserDashboard:React.FC<IProps>= ({users, selectUser, selectedUser, editMode, setEditMode, setSelectedUser, openCreateForm, createUser, editUser, deleteUser, submitting, target}) => {
    return (
        <Grid>
            <Grid.Column width='6'>
                <UserList users={users} selectUser={(selectedUser) => selectUser(selectedUser)} openCreateForm = {openCreateForm} deleteUser={deleteUser} submitting={submitting} target={target} />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedUser && !editMode && (
                    <UserDetails user={selectedUser} setEditMode={setEditMode} setSelectedUser={setSelectedUser}/>
                )}
                {editMode && 
                    <UserForm key={selectedUser && (selectedUser.userId)} setEditMode={setEditMode} user={selectedUser!} createUser={createUser} editUser={editUser} submitting={submitting}/>
                }
            </Grid.Column>
        </Grid>

    )
}*/}

class UserDashboard extends Component{
    state = {
        users: []
    }

    componentDidMount(){
        axios.get('https://localhost:5000/api/users').then(response => {
            this.setState({
                users: response.data
            })
        })
    }

    render(){
        return (
            <Container>
            <NavBar/>
                <Header as='h2'>
                    <Header.Content>Lista e Perdoruesve</Header.Content>
                </Header>
                <Segment>
                    <Button content='Shto Përdorues'/>
                        <Item.Group divided>
                            {this.state.users.map((user: any) => (
                            <Item key={user.userId}>
                                <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                                <Item.Content inverted="true">
                                <Item.Header >{user.firstName} {user.lastName}</Item.Header>
                                <Item.Meta>{user.role}</Item.Meta>
                                <Item.Extra>
                                    <Button size='mini' floated='right' content='Shiko Detajet'/>
                                    <Button size='mini' floated='right' content='Fshij Perdoruesin' />
                                </Item.Extra>
                                </Item.Content>
                            </Item>
                            ))}
                        </Item.Group>
                </Segment>
            </Container>
        )
    }

}

export default UserDashboard;
