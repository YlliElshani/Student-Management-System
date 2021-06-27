import { values } from 'mobx'
import React from 'react'
import { Button, Label, Segment, Image} from 'semantic-ui-react'
import { useStore } from '../../app/stores/store'
import { observer } from 'mobx-react-lite'
import { ErrorMessage, Form, Formik } from 'formik'
import TextInput from '../../app/common/form/TextInput'
import Img from '../../assets/login.png'

export default observer (function AdminLogin(){
    const {userStore} = useStore();

    return (
        <Segment.Group horizontal style={{marginTop:'4em', width:'70%', borderRadius:'5pt', marginLeft:'17em'}} raised>
            <Image src={Img} style={{height:'400px', margin:'90px', padding:'50px'}} />
            <Formik
        initialValues={{email: '', password:'', error: null}} 
        onSubmit={(values, {setErrors}) => userStore.studentLogin(values).catch(error => 
        setErrors({error: 'Invalid email or password'}))}>
            {({ handleSubmit, isSubmitting, errors}) => (
                <Form style={{paddingTop:"12%", width:'30%'}} className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                    <p style={{fontSize:'large', marginLeft:'30%'}}><strong>Student Login</strong></p>
                    <TextInput className='TextInput' name='email' placeholder='Email'/>
                    <TextInput className='TextInput' name='password' placeholder='Password' type='password'/>
                    <ErrorMessage name='error' render={() =><Label style={{marginBottom: 10}} basic color='red' content={errors.error}/>}/>
                    <Button style={{borderRadius:'20pt', marginBottom:'10px', height:'50px'}} loading={isSubmitting} positive content='Login' type='submit' fluid/>
                </Form>
            )}
        </Formik>
            
        </Segment.Group>
    );
})

