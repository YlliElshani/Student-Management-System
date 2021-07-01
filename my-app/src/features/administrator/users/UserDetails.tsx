import { observer } from 'mobx-react-lite';
import React from 'react'
import { Button, Segment, Header, Form, Image } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store';
import AdminRegister from '../../users/AdminRegister';
import Tilt from 'react-parallax-tilt';
import Img from '../../../assets/login.png'


export default observer( function UserDetails ()  {
    const {userStore, modalStore} = useStore();
    const {selectedUser: user, cancelSelectedUser} = userStore;
    
    return (
        <Segment raised>
            <Tilt><Image src={Img} style={{height:'150px', padding:'20px'}} /></Tilt>
            <Form key={user!.id} className='ui form' style={{padding:'50px', display:'flex'}}>
                <div style={{ marginRight:'50px'}}>
                    <Header as='h2' style={{fontSize:'large', marginLeft:'30%'}}>Details</Header>
                    <Segment>{user!.displayName}</Segment>
                    <Segment>{user!.username}</Segment>
                    <Segment>{user!.email}</Segment>
                    <Segment>{user!.age}</Segment>
                </div>
                <div>
                    <Segment>{user!.city}</Segment>
                    {/*<select style={{borderRadius:'20pt', marginBottom:'20px', height:'50px', width:'300px'}} name='city' placeholder='City'>
                        {qytetetByAlphabet.map(qyteti => (
                            <option key={qyteti.emri}>{qyteti.emri}</option>
                        ))}
                        </select>*/}
                    <Segment>{user!.address}</Segment>
                    <Segment>{user!.zipCode}</Segment>
                    <Segment>{user!.phoneNumber}</Segment>
                    <Button onClick={() => {modalStore.openModal(<AdminRegister/>)}} basic color='blue' content='Ndrysho'/>
                    <Button onClick={() => {(cancelSelectedUser) && modalStore.closeModal()}} basic color='grey' content='Anulo'/>
                </div>
            </Form>
        </Segment>
    )
}
)
