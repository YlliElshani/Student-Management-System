import { values } from 'mobx'
import React, { useEffect, useState } from 'react'
import { Button, Label, Segment, Image, Header, Dropdown} from 'semantic-ui-react'
import { useStore } from '../../app/stores/store'
import { observer } from 'mobx-react-lite'
import { ErrorMessage, Form, Formik, useFormik } from 'formik'
import TextInput from '../../app/common/form/TextInput'
import Img from '../../assets/login.png'
import Tilt from 'react-parallax-tilt';
import * as Yup from 'yup';

export default observer (function StudentRegister(){
    const {userStore, modalStore} = useStore();

    return (
                <Formik 
            initialValues={{displayName:'', email: '', username:'', password:'',  age:'', city:'', address:'', zipCode:'', phoneNumber:'',error: null}} 
            onSubmit={(values, {setErrors}) => userStore.registerStudent(values).catch(error => 
            setErrors({error: 'Invalid email or password'}))}
            validationSchema={Yup.object ({
                displayName: Yup.string().required(),
                username: Yup.string().required(),
                email: Yup.string().required().email(),
                age: Yup.string().required(),
                address: Yup.string().required(),
                zipCode: Yup.string().required(),
                phoneNumber: Yup.string().required(),
                password: Yup.string().required()
            })}
            >

                {({ handleSubmit, isSubmitting, errors, isValid, dirty}) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off' style={{padding:'20px', marginLeft:'20px', display:'flex'}}>
                        <div style={{ marginRight:'50px'}} className='ui form'>
                            <Header as='h2' style={{fontSize:'15px', textAlign:'center'}}>Admin Register</Header>
                            <TextInput name='displayName' placeholder='Display Name'/>
                            <TextInput name='email' placeholder='Email'/>
                            <TextInput name='username' placeholder='Username'/>
                            <TextInput name='password' placeholder='Password' type='password'/>
                            <TextInput name='age' placeholder='Age'/>
                            <TextInput name='city' placeholder='City'/>
                            <TextInput name='address' placeholder='Address'/>
                            <TextInput name='zipCode' placeholder='Zip Code'/>
                            <TextInput name='phoneNumber' placeholder='Phone Number'/>
                            <ErrorMessage name='error' render={() =><Label style={{marginBottom: 5}} basic color='red' content={errors.error}/>}/>
                            <Button disabled={!isValid || !dirty || isSubmitting} style={{borderRadius:'20pt', marginBottom:'10px', height:'30px'}} positive loading={isSubmitting} content='Register' type='submit'/>
                            <Button onClick={()=> modalStore.closeModal()} style={{borderRadius:'20pt', marginBottom:'10px', height:'30px'}} negative content='Cancel' type='submit'/>
                        </div>
                </Form>
                )}
            </Formik>
    );
})
