import { values } from 'mobx'
import React from 'react'
import { Button, Label} from 'semantic-ui-react'
import { useStore } from '../../app/stores/store'
import { observer } from 'mobx-react-lite'
import { ErrorMessage, Form, Formik } from 'formik'
import TextInput from '../../app/common/form/TextInput'

export default observer (function AdminLogin(){
    const {userStore} = useStore();

    return (
        <Formik
        initialValues={{email: '', password:'', error: null}} 
        onSubmit={(values, {setErrors}) => userStore.guardianLogin(values).catch(error => 
        setErrors({error: 'Invalid email or password'}))}>
            {({ handleSubmit, isSubmitting, errors}) => (
                <Form style={{padding:"100px"}} className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                    <TextInput name='email' placeholder='Email'/>
                    <TextInput name='password' placeholder='Password' type='password'/>
                    <ErrorMessage name='error' render={() =><Label style={{marginBottom: 10}} basic color='red' content={errors.error}/>}/>
                    <Button loading={isSubmitting} positive content='Login' type='submit' fluid/>
                </Form>
            )}
        </Formik>
    );
})
