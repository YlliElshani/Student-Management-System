import { observer } from 'mobx-react-lite'
import React, { SyntheticEvent, useState } from 'react'
import { Button, Grid, Item } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store'
import AdminRegister from '../../users/AdminRegister'
import {User} from '../../../app/models/user';
import axios from 'axios'

export default observer(function AdminList () {    
    const [data, setData] = React.useState<User[]>([]);
    React.useEffect(() => {
        axios.get(('https://localhost:5000/api/admin/list'))
        .then((res)=>setData(res.data));
    }, []);
    

    const {userStore, modalStore} = useStore();
    const {deleteUser, loading} = userStore;

    const [target, setTarget] = useState('');

    function handleDeleteUser(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteUser(id);
    }

    //for searching users
    const [search, setSearch] = useState('');

    return (
        <Grid.Column width='11' style={{marginTop:'2em', marginLeft:"3em", marginRight:'2em'}}>
            <Button basic size='mini' onClick={()=>modalStore.openModal(<AdminRegister/>)} content='Shto Admin'/>
            <input style={{marginLeft:'65%', border:'none', borderBottom:'1px solid black', fontSize:'10pt'}} type="text" placeholder="Search User..." onChange={e => {setSearch(e.target.value)}}/>
            <Item.Group divided>
                {data.filter((user) => {
                    if (search === ""){
                        return user;
                    } else if (user.displayName.toLowerCase().includes(search.toLowerCase())) {
                        return user;
                    }
                }).map((user) => (
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
                        {/*<Button positive onClick={() => {(openForm(user.id)); modalStore.openModal(<UserForm/>)}} size='mini' floated='right' content='Edit'/>*/}
                        <Button negative name={user.id} loading={loading && target === user.id} onClick={(e) => handleDeleteUser(e, user.id)} size='mini' floated='right' content='Fshij Përdoruesin' />
                    </Item.Extra>
                    </Item.Content>
                </Item>
                ))}
            </Item.Group>
        </Grid.Column>

    )

})