import { values } from 'mobx'
import React, { useEffect } from 'react'
import { Button, Label, Segment, Image, Header, Dropdown, Select} from 'semantic-ui-react'
import { useStore } from '../../app/stores/store'
import { observer } from 'mobx-react-lite'
import { ErrorMessage, Form, Formik } from 'formik'
import TextInput from '../../app/common/form/TextInput'

import * as Yup from 'yup';

export default observer (function GuardianRegister(){
    const {userStore, modalStore, qytetiStore} = useStore();
    const { qytetetByAlphabet } = qytetiStore;

    const [option, setOption] = React.useState("");
    function changeSelectOptionHandler(event: { target: { value: any; emri?: any; }; }) {
        setOption(event.target.value);
        const { emri, value } = event.target;
    }
    
    useEffect(() => {
        qytetiStore.loadQytetet();
    }, [qytetiStore])


    return (
                <Formik 
            initialValues={{displayName:'', email: '', username:'', age:'', city:'', address:'', zipCode:'', phoneNumber:'', password:'', error: null}} 
            onSubmit={(values, {setErrors}) => userStore.registerGuardian(values).catch(error => 
            setErrors({error: 'Invalid email or password'}))}
            validationSchema={Yup.object ({
                displayName: Yup.string().required(),
                username: Yup.string().required(),
                email: Yup.string().required().email(),
                age: Yup.string().required(),
                city:Yup.string().required(),
                address: Yup.string().required(),
                zipCode: Yup.string().required(),
                phoneNumber: Yup.string().required(),
                password: Yup.string().required()
            })}
            >

                {({ handleSubmit, isSubmitting, errors, isValid, dirty}) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off' style={{padding:'20px', marginLeft:'20px', display:'flex'}}>
                        <div style={{ marginRight:'50px'}} className='ui form'>
                            <Header as='h2' style={{fontSize:'15px', textAlign:'center'}}>Guardian Register</Header>
                            <TextInput name='displayName' placeholder='Display Name'/>
                            <TextInput name='username' placeholder='Username'/>
                            <TextInput name='email' placeholder='Email'/>
                            <TextInput name='password' placeholder='Password' type='password'/>
                            <TextInput name='age' placeholder='Age'/>
                            <TextInput name='city' placeholder='City'/>
                            <select onChange={changeSelectOptionHandler}
                                style={{borderRadius:'20pt', margin:'15px', height:'30px', width:'250px', fontSize:'10pt'}} name='city'>
                                {qytetetByAlphabet.map(qyteti => (
                                    <option key={qyteti.id}>{qyteti.emri}</option>
                                ))}
                                </select>
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
