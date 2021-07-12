import axios from 'axios'
import { observer } from 'mobx-react-lite'
import React, { SyntheticEvent, useState } from 'react'
import { Button, Grid, Item  } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store'
import ProfesorRegister from '../../users/ProfesorRegister'
import UserForm from './UserForm'
import {User} from '../../../app/models/user'

export default observer(function ProfessorList () {
     const [data, setData] = React.useState<User[]>([]);
     React.useEffect(() => {
         axios.get(('https://localhost:5000/api/profesor/list'))
         .then((res)=>setData(res.data));
     },[]);

    const {userStore, modalStore} = useStore();
    const {deleteUser, loading} = userStore;

    const [target, setTarget] = useState('');

    function handleDeleteUser(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteUser(id);
    }

    return (
        <Grid.Column width='11' style={{marginTop:'2em', marginLeft:"3em"}}>
            <Button basic size='mini' onClick={()=>{modalStore.openModal(<ProfesorRegister/>); userStore.cancelSelectedUser()}} content='Shto Profesor'/>
            <Item.Group divided>
                {data.map((user) => (
                <Item style={{fontSize:'8pt'}} key={user.id}>
                    <Item.Content inverted="true">
                    <Item.Header>{user.displayName}</Item.Header>
                    <Item.Meta>{user.email}</Item.Meta>
                    <Item.Meta>{user.userName}</Item.Meta>
                    <Item.Meta>{user.age}</Item.Meta>
                    <Item.Meta>{user.phoneNumber}</Item.Meta>
                    <Item.Meta>{user.city}</Item.Meta>
                    <Item.Meta>{user.address}</Item.Meta>
                    <Item.Meta>{user.zipCode}</Item.Meta>
                    <Item.Extra>
                        <Button positive onClick={() => {userStore.selectUser(user.id); modalStore.openModal(<UserForm/>)}} size='mini' floated='right' content='Edit'/>
                        <Button negative name={user.id} loading={loading && target === user.id} onClick={(e) => handleDeleteUser(e, user.id)} size='mini' floated='right' content='Fshij Përdoruesin' />
                    </Item.Extra>
                    </Item.Content>
                </Item>
                ))}
            </Item.Group>
        </Grid.Column>
        
    )

})