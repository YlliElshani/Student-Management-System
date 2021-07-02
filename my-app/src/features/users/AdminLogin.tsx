import { values } from 'mobx'
import React from 'react'
import { Button, Label, Segment, Image, Header} from 'semantic-ui-react'
import { useStore } from '../../app/stores/store'
import { observer } from 'mobx-react-lite'
import { ErrorMessage, Form, Formik } from 'formik'
import TextInput from '../../app/common/form/TextInput'
import Img from '../../assets/login.png'
import Tilt from 'react-parallax-tilt';

export default observer (function AdminLogin(){
    const {userStore, modalStore} = useStore();

    return (
        <div style={{padding:'5%', marginLeft:'18%'}}>
            <Segment.Group horizontal style={{borderRadius:'5pt', width:'800px', height:'500px'}} raised>
                <Tilt><Image src={Img} style={{height:'300px', margin:'80px 50px', padding:'30px'}} /></Tilt>
                <Formik
            initialValues={{id:'', email: '', password:'', error: null}} 
            onSubmit={(values, {setErrors}) => userStore.adminLogin(values).catch(error => 
            setErrors({error: 'Invalid email or password'}))}>
                {({ handleSubmit, isSubmitting, errors}) => (
                    <Form style={{paddingTop:"8%", marginRight:'50px'}} className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                        <Header as='h2' style={{fontSize:'large', marginLeft:'30%'}}>Admin Login</Header>
                        <TextInput name='email' placeholder='Email'/>
                        <TextInput name='password' placeholder='Password' type='password'/>
                        <ErrorMessage name='error' render={() =><Label style={{marginBottom: 10}} basic color='red' content={errors.error}/>}/>
                        <Button style={{borderRadius:'20pt', marginBottom:'10px', height:'50px'}} loading={isSubmitting} positive content='Login' type='submit' fluid/>
                    </Form>
                )}
            </Formik>
            </Segment.Group>
            </div>
    );
})
