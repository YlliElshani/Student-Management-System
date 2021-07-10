import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useState } from 'react'
import { Button, Header, Form} from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store';


export default observer( function UserDetails ()  {
    const {userStore, modalStore} = useStore();
    const {selectedUser, cancelSelectedUser, updateUser, loading} = userStore;
    
    const initialState = selectedUser ?? {
        id:'', displayName:'', email: '', userName:'', password:'',  age:'', city:'', address:'', zipCode:'', phoneNumber:'', token:''
    }
    
    const [user, setUser] = useState(initialState);

    function handleSubmit() {
       updateUser(user);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };
    
    
    return (
        <Form key={user!.id} className='ui form' onSubmit={handleSubmit} autoComplete='off' style={{padding:'20px', marginLeft:'20px', display:'flex', position:'relative'}}>
            <div style={{ marginRight:'50px'}} className='ui form'>
                <Header as='h2' style={{fontSize:'large', marginLeft:'35%'}}>Edit</Header>
                <Form.Input style={{borderRadius:'20pt', marginBottom:'10px', height:'40px', width:'250px', fontSize:'10pt'}} value={user.displayName} name='displayName' placeholder='Display Name' onChange={handleInputChange}/>
                <Form.Input style={{borderRadius:'20pt', marginBottom:'10px', height:'40px', width:'250px', fontSize:'10pt'}} value={user.userName} name='userName' placeholder='Username' onChange={handleInputChange}/>
                <Form.Input style={{borderRadius:'20pt', marginBottom:'10px', height:'40px', width:'250px', fontSize:'10pt'}} value={user.email} name='email' placeholder='Email' onChange={handleInputChange}/>
                <Form.Input style={{borderRadius:'20pt', marginBottom:'10px', height:'40px', width:'250px', fontSize:'10pt'}} value={user.age} name='age' placeholder='Age' onChange={handleInputChange}/>
                <Form.Input style={{borderRadius:'20pt', marginBottom:'10px', height:'40px', width:'250px', fontSize:'10pt'}} value={user.city} name='city' placeholder='City' onChange={handleInputChange}/>
                <Form.Input style={{borderRadius:'20pt', marginBottom:'10px', height:'40px', width:'250px', fontSize:'10pt'}} value={user.address} name='address' placeholder='Address' onChange={handleInputChange}/>
                <Form.Input style={{borderRadius:'20pt', marginBottom:'10px', height:'40px', width:'250px', fontSize:'10pt'}} value={user.zipCode} name='zipCode' placeholder='Zip Code' onChange={handleInputChange}/>
                <Form.Input style={{borderRadius:'20pt', marginBottom:'10px', height:'4  0px', width:'250px', fontSize:'10pt'}} value={user.phoneNumber} name='phoneNumber' placeholder='Phone Number' onChange={handleInputChange}/>
                <Button loading={loading} basic color='blue' content='Send'  type='submit'/>
                <Button onClick={modalStore.closeModal} basic color='grey' content='Anulo'/>
            </div>
        </Form>
    )
}
)
