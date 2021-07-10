import axios from 'axios'
import { observer } from 'mobx-react-lite'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Button, Grid, Item, Segment } from 'semantic-ui-react'
import { LoadingComponent } from '../../../app/layout/LoadingComponent'
import { useStore } from '../../../app/stores/store'
import AdminRegister from '../../users/AdminRegister'
import GuardianRegister from '../../users/GuardianRegister'
import ProfesorRegister from '../../users/ProfesorRegister'
import StudentRegister from '../../users/StudentRegister'
import AdminNavBar from '../AdminNavBar'
import UserDetails from './UserDetails'
import UserForm from './UserForm'


export default observer(function StudentList () {
    //@ts-ignore
    const [data, setData] = React.useState<User[]>([] as students);
    React.useEffect(() => {
        axios.get(('https://localhost:5000/api/student/list'))
        .then((res)=>setData(res.data));
    });
    
    const {userStore, modalStore} = useStore();
    const {deleteUser, loading} = userStore;

    const [target, setTarget] = useState('');

    function handleDeleteUser(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteUser(id);
    }

    return (
        <Grid.Column width='11' style={{marginTop:'2em', marginLeft:"3em"}}>
            <Button basic size='mini' onClick={()=>modalStore.openModal(<StudentRegister/>)} content='Shto Student'/>
            <Item.Group divided>
                {data.map((user) => (
                <Item style={{fontSize:'8pt'}} key={user.id}>
                    <Item.Content inverted="true">
                    <Item.Header>{user.displayName}</Item.Header>
                    <Item.Meta>{user.email}</Item.Meta>
                    <Item.Extra>
                        <Button positive onClick={() => {userStore.selectUser(user.id); modalStore.openModal(<UserDetails/>)}} size='mini' floated='right' content='Shiko Detajet'/>
                        <Button negative name={user.id} loading={loading && target === user.id} onClick={(e) => handleDeleteUser(e, user.id)} size='mini' floated='right' content='Fshij Përdoruesin' />
                    </Item.Extra>
                    </Item.Content>
                </Item>
                ))}
            </Item.Group>
        </Grid.Column> 
    )

})