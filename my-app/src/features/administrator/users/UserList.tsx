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


export default observer(function UserList () {

    const {userStore, modalStore} = useStore();
    const {selectedUser, editMode} = userStore;
    const {deleteUser, users, loading} = userStore;

    const [target, setTarget] = useState('');
    
    useEffect(()=>{
        userStore.loadUsers();
      }, [userStore]); 
    
    if(userStore.loadingInitial) return <LoadingComponent content='Loading Users ...'/>
    
    function handleDeleteUser(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteUser(id);
    }

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width='4'>
                    <AdminNavBar />
                </Grid.Column>
                <Grid.Column width='11' style={{marginTop:'2em', marginLeft:"3em"}}>
                    <Grid.Row> 
                        <Segment.Group horizontal>
                            <Segment>
                                <Button style={{borderRadius:'20pt', marginLeft:'60px', marginTop:'6px', fontSize:'7pt', background:'#03a9f4', color:'white',  width:'120px'}} onClick={() => modalStore.openModal(<AdminRegister/>)} content='Shto Admin'/>
                            </Segment>
                            <Segment>
                                <Button style={{borderRadius:'20pt', marginLeft:'60px', marginTop:'6px', fontSize:'7pt', background:'#03a9f4', color:'white',  width:'120px'}} onClick={() => modalStore.openModal(<StudentRegister/>)} content='Shto Student'/>
                            </Segment>
                            <Segment>
                                <Button style={{borderRadius:'20pt', marginLeft:'60px', marginTop:'6px', fontSize:'7pt', background:'#03a9f4', color:'white',  width:'120px'}} onClick={() => modalStore.openModal(<GuardianRegister/>)} content='Shto Kujdestar/Prind'/>
                            </Segment>
                            <Segment>
                                <Button style={{borderRadius:'20pt', marginLeft:'60px', marginTop:'6px', fontSize:'7pt', background:'#03a9f4', color:'white',  width:'120px'}} onClick={() => modalStore.openModal(<ProfesorRegister/>)} content='Shto Profesor'/>
                            </Segment>
                        </Segment.Group>
                    </Grid.Row>
                    <Item.Group divided>
                        {users.map((user) => (
                        <Item style={{fontSize:'8pt'}} key={user.id}>
                            <Item.Content inverted="true">
                            <Item.Header>{user.displayName}</Item.Header>
                            <Item.Meta>{user.email}</Item.Meta>
                            <Item.Extra>
                                <Button positive onClick={(e) =>{userStore.selectUser(user.id); modalStore.openModal(<UserDetails/>)}} size='mini' floated='right' content='Shiko Detajet'/>
                                <Button negative name={user.id} loading={loading && target === user.id} onClick={(e) => handleDeleteUser(e, user.id)} size='mini' floated='right' content='Fshij Përdoruesin' />
                            </Item.Extra>
                            </Item.Content>
                        </Item>
                        ))}
                    </Item.Group>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
})
