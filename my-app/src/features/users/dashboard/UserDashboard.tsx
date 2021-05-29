import React, { SyntheticEvent } from 'react'
import { Grid } from 'semantic-ui-react'
import { IUser } from '../../../app/models/user'
import UserDetails from '../details/UserDetails'
import  UserForm  from '../form/UserForm'
import { UserList } from './UserList'

interface IProps {
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
}

const UserDashboard:React.FC<IProps>= ({users, selectUser, selectedUser, editMode, setEditMode, setSelectedUser, openCreateForm, createUser, editUser, deleteUser}) => {
    return (
        <Grid>
            <Grid.Column width='6'>
                <UserList users={users} selectUser={selectUser} openCreateForm = {openCreateForm} deleteUser={deleteUser} />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedUser && !editMode && (
                    <UserDetails user={selectedUser} setEditMode={setEditMode} setSelectedUser={setSelectedUser}/>
                )}
                {editMode && 
                    <UserForm key={selectedUser && (selectedUser.id || 0)} setEditMode={setEditMode} user={selectedUser!} createUser={createUser} editUser={editUser}/>
                }
            </Grid.Column>
        </Grid>

    )
}

export default UserDashboard;
