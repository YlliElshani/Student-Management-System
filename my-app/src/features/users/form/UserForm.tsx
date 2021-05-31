import React, {Component, FormEvent, useState} from 'react'
import { Button, Container, Form, Segment } from 'semantic-ui-react'
import { IUser } from '../../../app/models/user'
import {v4 as uuid} from 'uuid';
import { NavBar } from '../../nav/NavBar';

/*interface IProps {
    setEditMode: (editMode: boolean) => void;
    user: IUser;
    createUser: (user:IUser) => void;
    editUser: (user:IUser) =>void;
    submitting: boolean;
}

const UserForm: React.FC<IProps> = ({setEditMode, user: initialFormState, createUser, editUser, submitting}) => {

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
            };
        }
    };

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
    };*/

export class UserForm extends Component {

    render(){
        return (
            <Container>
            <NavBar/>
        <Segment clearing style={{width:'40%', marginLeft:'25%'}}>
            <Form  style={{padding:'30px'}}>
                <Form.Input  name='firstName' placeholder='FirstName' />
                <Form.Input name='lastName' placeholder='LastName' />
                <Form.Input  name='gender' placeholder='Gender' />
                <Form.Input  name='age' placeholder='Age' />
                <Form.Input  name='phoneNumber' placeholder='PhoneNumber'/>
                <Form.Input name='email' placeholder='Email' />
                <Form.Input  name='address' placeholder='Address'/>
                <Form.Input  name='city' placeholder='City' />
                <Form.Input  name='role' placeholder='Role' />
                <Button  floated='right' positive type='submit' content='Dërgo'/>
                <Button floated='right' type='submit' content='Anulo' d/>
            </Form>
        </Segment>
        </Container>
        )
    }
}

