import { values } from 'mobx'
import React from 'react'
import { Button, Label, Segment, Image, Header} from 'semantic-ui-react'
import { useStore } from '../../app/stores/store'
import { observer } from 'mobx-react-lite'
import { ErrorMessage, Form, Formik } from 'formik'
import TextInput from '../../app/common/form/TextInput'
import Img from '../../assets/login.png'
import Tilt from 'react-parallax-tilt';
import * as Yup from 'yup';

export default observer (function ProfesorRegister(){
    const {userStore} = useStore();

    return (
            <Segment.Group horizontal style={{borderRadius:'5pt', width:'80%', marginTop:'4em', marginLeft:'10%'}}
            raised>
                <Tilt><Image src={Img} style={{height:'300px', padding:'20px', margin:'80px 70px'}} /></Tilt>
                <Formik 
            initialValues={{displayName:'', email: '', username:'', age:'', city:'', address:'', zipCode:'', phoneNumber:'', password:'', error: null}} 
            onSubmit={(values, {setErrors}) => userStore.registerProfesor(values).catch(error => 
            setErrors({error: 'Invalid email or password'}))}
            validationSchema={Yup.object ({
                displayName: Yup.string().required(),
                username: Yup.string().required(),
                email: Yup.string().required().email(),
                age: Yup.string().required(),
                city: Yup.string().required(),
                address: Yup.string().required(),
                zipCode: Yup.string().required(),
                phoneNumber: Yup.string().required(),
                password: Yup.string().required()
            })}
            >

                {({ handleSubmit, isSubmitting, errors, isValid, dirty}) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off' style={{padding:'50px', display:'flex'}}>
                        <div style={{ marginRight:'50px'}} className='ui form'>
                            <Header as='h2' style={{fontSize:'large', marginLeft:'30%'}}>Profesor Register</Header>
                            <TextInput name='displayName' placeholder='Display Name'/>
                            <TextInput name='username' placeholder='Username'/>
                            <TextInput name='email' placeholder='Email'/>
                            <TextInput name='password' placeholder='Password' type='password'/>
                            <TextInput name='age' placeholder='Age'/>
                        </div>
                        <div  className='ui form' style={{marginTop:'4.7%'}}>
                            <TextInput name='city' placeholder='City'/>
                            <TextInput name='address' placeholder='Address'/>
                            <TextInput name='zipCode' placeholder='Zip Code'/>
                            <TextInput name='phoneNumber' placeholder='Phone Number'/>
                            <ErrorMessage name='error' render={() =><Label style={{marginBottom: 5}} basic color='red' content={errors.error}/>}/>
                            <Button disabled={!isValid || !dirty || isSubmitting} style={{borderRadius:'20pt', marginBottom:'10px', height:'50px'}} positive loading={isSubmitting} content='Register' type='submit'/>
                        </div>
                </Form>
                )}
            </Formik>
            </Segment.Group>
    );
})
