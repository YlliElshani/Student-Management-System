import React, {FormEvent, useState} from 'react'
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import {v4 as uuid} from 'uuid';
import { IUser } from '../../../../app/models/user';

interface IProps {
    setEditMode: (editMode: boolean) => void;
    user: IUser
    createUser: (user: IUser) => void;
    editUser: (user: IUser) => void;
    submitting: boolean;
}

const UserForm:React.FC<IProps> = ({setEditMode, user: initialFormState, editUser, createUser, submitting}) => {
    const initializeForm = () => {
        if (initialFormState) {
            return initialFormState
        }
        else {
            return {
                userId: '',
                firstName: '',
                lastName: '',
                gender: '',
                age: '',
                phoneNumber: '',
                email: '',
                address:'',
                password:'',
                city:'',
                role: ''
            }
        }
    }

    const [user, setUser] = useState<IUser>(initializeForm);

    const handleSubmit = () => { 
        if(user.userId === ''){
            let newUser = {
                 ...user,
                 userId: uuid()
            }
 
 
            createUser(newUser);
        }
        else{
            editUser(user);
        }
     }
 
     const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
         const {name, value} = event.currentTarget;
         setUser({...user, [name]: value});
     }
    
    return (
    <Segment clearing>
        <Grid>
        <Form onSubmit={handleSubmit} style={{padding:'20px', width:'100%'}}>
            <Form.Input onChange={handleInputChange}  name='firstName' placeholder='FirstName' value={user.firstName} />
            <Form.Input onChange={handleInputChange} name='lastName' placeholder='LastName' value={user.lastName} />
            <Form.Input onChange={handleInputChange} name='gender' placeholder='Gender' value={user.gender} />
            <Form.Input onChange={handleInputChange} name='age' placeholder='Age' value={user.age} />
            <Form.Input onChange={handleInputChange} name='phoneNumber' placeholder='PhoneNumber' value={user.phoneNumber}/>
            <Form.Input onChange={handleInputChange} name='email' placeholder='Email' value={user.email}/>
            <Form.Input onChange={handleInputChange} name='address' placeholder='Address' value={user.address}/>
            <Form.Input onChange={handleInputChange} name='city' placeholder='City' value={user.city}/>
            <Form.Input onChange={handleInputChange} name='role' placeholder='Role' value={user.role}/>
            <Button loading={submitting} floated='right' positive type='submit' content='Dërgo'/>
            <Button onClick={() => setEditMode(false)} floated='right' type='submit' content='Anulo' />
        </Form>
        </Grid>
    </Segment>
    )
}

export default UserForm;

