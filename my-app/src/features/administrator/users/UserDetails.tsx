import { observer } from 'mobx-react-lite';
import React from 'react'
import { Button, Segment, Header, Form, Image } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store';
import AdminRegister from '../../users/AdminRegister';
import Tilt from 'react-parallax-tilt';
import Img from '../../../assets/login.png'
import UserForm from './UserForm';


export default observer( function UserDetails ()  {
    const {userStore, modalStore} = useStore();
    const {selectedUser: user, cancelSelectedUser} = userStore;
    
    return (
        <Form key={user!.id} className='ui form' style={{padding:'20px', marginLeft:'20px', display:'flex'}}>
            <div style={{ marginRight:'50px'}}>
                <Header as='h2' style={{fontSize:'large', marginLeft:'35%'}}>Details</Header>
                <Segment style={{ marginBottom:'10px',width:'250px', fontSize:'10pt'}}>{user!.displayName}</Segment>
                <Segment style={{ marginBottom:'10px',  width:'250px', fontSize:'10pt'}}>{user!.userName}</Segment>
                <Segment style={{ marginBottom:'10px', width:'250px', fontSize:'10pt'}}>{user!.email}</Segment>
                <Segment style={{ marginBottom:'10px',width:'250px', fontSize:'10pt'}}>{user!.age}</Segment>
                <Segment style={{ marginBottom:'10px', width:'250px', fontSize:'10pt'}}>{user!.city}</Segment>
                <Segment style={{ marginBottom:'10px', width:'250px', fontSize:'10pt'}}>{user!.address}</Segment>
                <Segment style={{ marginBottom:'10px', width:'250px', fontSize:'10pt'}}>{user!.zipCode}</Segment>
                <Segment style={{ marginBottom:'10px',  width:'250px', fontSize:'10pt'}}>{user!.phoneNumber}</Segment>
                <Button onClick={() => {modalStore.openModal(<UserForm/>)}} basic color='blue' content='Ndrysho'/>
                <Button onClick={() => {(cancelSelectedUser) && modalStore.closeModal()}} basic color='grey' content='Anulo'/>
            </div>
        </Form>
    )
}
)
