import { observer } from 'mobx-react-lite';
import React, {ChangeEvent, useState} from 'react'
import { Button, Form, Grid, Label, Segment } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store';

export default observer(function MaterialiForm() {
    const {materialiStore, modalStore} = useStore();
    const {selectedMateriali, createMateriali, updateMateriali, loading} = materialiStore;

    const initialState = selectedMateriali ?? {
        id:'',
        titulli:'',
        pershkrimi:'',
        lenda:'',
        perioda:'',
        fileDrop:''
    }
    

    const [materiali, setMateriali] = useState(initialState);

    function handleSubmit () { 
        materiali.id ? updateMateriali(materiali) : createMateriali(materiali);
     }
 
    function handleInputChange (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.currentTarget;
        setMateriali({...materiali, [name]: value});
    }

    return (
        <Form onSubmit={handleSubmit} className='ui form' autoComplete='off' style={{padding:'20px'}}>
            <Label style={{background:'transparent', fontSize:'large', marginLeft:'28%', marginBottom:'20px'}}>Materialet</Label>
            <Form.Input onChange={handleInputChange}  name='titulli' placeholder='Titulli' value={materiali.titulli} />
            <Form.Input onChange={handleInputChange}  name='lenda' placeholder='Lenda' value={materiali.lenda} />
            <Form.Input onChange={handleInputChange}  name='perioda' placeholder='Perioda' value={materiali.perioda} />
            <Form.Input onChange={handleInputChange}  name='fileDrop' placeholder='File' value={materiali.fileDrop} />
            <Form.TextArea rows='auto' onChange={handleInputChange}  name='pershkrimi' placeholder='Pershkrimi' value={materiali.pershkrimi} />
            <Button loading={loading} floated='right' positive type='submit' size='mini' content='Dërgo'/>
            <Button onClick={() => modalStore.closeModal()} floated='right' type='submit' size='mini' content='Anulo'/>
        </Form>
    )
})

