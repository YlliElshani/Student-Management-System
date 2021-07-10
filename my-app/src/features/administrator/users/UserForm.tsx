import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { Button, Segment, Header, Form, Image, Input } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store';
import AdminRegister from '../../users/AdminRegister';
import Tilt from 'react-parallax-tilt';
import Img from '../../../assets/login.png'
import { combineValidators, composeValidators, isRequired } from 'revalidate';
import QytetiStore from '../../../app/stores/qytetiStore';
import { IQyteti } from '../../../app/models/qyteti';


export default observer( function UserDetails ()  {
    const {userStore, modalStore, qytetiStore} = useStore();
    const {selectedUser, cancelSelectedUser, registerAdmin, updateUser, loading} = userStore;
    const { qytetetByAlphabet } = qytetiStore;

    useEffect(() => {
        qytetiStore.loadQytetet();
    }, [qytetiStore])

    const validate = combineValidators({
        displayName: isRequired({message: 'The display name is required'}),
        userName: isRequired('Username'),
        email: isRequired('Email'),
        age: isRequired('Age'),
        city: isRequired('City'),
        address: isRequired('Address'),
        zipCode: isRequired('ZipCode'),
        phoneNumber: isRequired('Phone Number'),
    })
    
    const initialState = selectedUser ?? {
        id:'', displayName:'', email: '', userName:'', password:'',  age:'', city:'', address:'', zipCode:'', phoneNumber:'', token:''
    }

    
    const [user, setUser] = useState(initialState);
    const [option, setOption] = React.useState("");


    function handleSubmit() {
        user.id ? updateUser(user) : registerAdmin(user);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };
    
    function changeSelectOptionHandler(event: { target: { value: any; name?: any; }; }) {
        setOption(event.target.value);
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }
    
    return (
        <Form validate={validate} key={user!.id} className='ui form' onSubmit={handleSubmit} autoComplete='off' style={{padding:'20px', marginLeft:'20px', display:'flex', position:'relative'}}>
            <div style={{ marginRight:'50px'}} className='ui form'>
                <Header as='h2' style={{fontSize:'large', marginLeft:'35%'}}>Edit</Header>
                <Form.Input style={{borderRadius:'20pt', marginBottom:'10px', height:'40px', width:'250px', fontSize:'10pt'}} value={user.displayName} name='displayName' placeholder='Display Name' onChange={handleInputChange}/>
                <Form.Input style={{borderRadius:'20pt', marginBottom:'10px', height:'40px', width:'250px', fontSize:'10pt'}} value={user.userName} name='userName' placeholder='Username' onChange={handleInputChange}/>
                <Form.Input style={{borderRadius:'20pt', marginBottom:'10px', height:'40px', width:'250px', fontSize:'10pt'}} value={user.email} name='email' placeholder='Email' onChange={handleInputChange}/>
                <Form.Input style={{borderRadius:'20pt', marginBottom:'10px', height:'40px', width:'250px', fontSize:'10pt'}} value={user.age} name='age' placeholder='Age' onChange={handleInputChange}/>
                <select onChange={changeSelectOptionHandler} name='city' placeholder='City' value={user.city}>
                {qytetetByAlphabet.map(qyteti => (
                    <option value={qyteti.id}>{qyteti.emri}</option>
                        ))}
                </select>
                <Form.Input style={{borderRadius:'20pt', marginBottom:'10px', height:'40px', width:'250px', fontSize:'10pt'}} value={user.address} name='address' placeholder='Address' onChange={handleInputChange}/>
                <Form.Input style={{borderRadius:'20pt', marginBottom:'10px', height:'40px', width:'250px', fontSize:'10pt'}} value={user.zipCode} name='zipCode' placeholder='Zip Code' onChange={handleInputChange}/>
                <Form.Input style={{borderRadius:'20pt', marginBottom:'10px', height:'4  0px', width:'250px', fontSize:'10pt'}} value={user.phoneNumber} name='phoneNumber' placeholder='Phone Number' onChange={handleInputChange}/>
                <Button loading={loading}  onClick={cancelSelectedUser} basic color='blue' content='Send'  type='submit'/>
                <Button onClick={() => {modalStore.closeModal()}} basic color='grey' content='Anulo'/>
            </div>
        </Form>
    )
}
)
