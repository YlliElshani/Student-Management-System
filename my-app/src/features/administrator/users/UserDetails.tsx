import { observer } from 'mobx-react-lite';
import React from 'react'
import { Grid, Button, Segment } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store';
import AdminRegister from '../../users/AdminRegister';


export default function UserDetails ()  {
    const {userStore, modalStore} = useStore();
    const {selectedUser: user, cancelSelectedUser} = userStore;
    
    return (
        <Segment>
         <Grid key={user!.id} columns={1} divided>
            <Grid.Row stretched>
            <Grid.Column>
                <Segment>{user!.displayName}</Segment>
                <Segment>{user!.username}</Segment>
                <Segment>{user!.email}</Segment>
            </Grid.Column>
            <Grid.Column>
                <br/>
                <Segment>{user!.age}</Segment>
                <Segment>{user!.phoneNumber}</Segment>
                <Segment>{user!.city}</Segment>
                <Segment>{user!.address}</Segment>
                <Segment>{user!.zipCode}</Segment>
            </Grid.Column>
            </Grid.Row>
        </Grid>
        <Button.Group>
                <Button onClick={() => modalStore.openModal(<AdminRegister/>)}  basic color='blue' content='Ndrysho'/>
                <Button onClick={cancelSelectedUser} basic color='grey' content='Anulo'/>
            </Button.Group>
        </Segment>
    )
}

