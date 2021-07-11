import axios from 'axios';
import { observer } from 'mobx-react-lite';
import React, {ChangeEvent, useState} from 'react'
import { Button, Form, Label } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store';
import {ILenda} from '../../../app/models/lenda';
import {IPerioda} from '../../../app/models/perioda';

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

    const [lendetData, setLendet]=React.useState<ILenda[]>([]);
    const [periodatData, setPeriodat]=React.useState<IPerioda[]>([]);
    const [selected, setSelected] = React.useState("");

    
    React.useEffect(()=>{
        axios
        .get(('https://localhost:5000/API/lendet'))
        .then((res)=>setLendet(res.data));
        axios
        .get(('https://localhost:5000/API/periodat'))
        .then((res)=>setPeriodat(res.data));
    },[]);


    function changeSelectOptionHandler(event: { target: { value: any; name?: any; }; }) {
        setSelected(event.target.value);
        const { name, value } = event.target;
        setMateriali({ ...materiali, [name]: value });
      }

    return (
        <Form onSubmit={handleSubmit} className='ui form' autoComplete='off' style={{padding:'20px'}}>
            <Label style={{background:'transparent', fontSize:'large', marginLeft:'28%', marginBottom:'20px'}}>Materialet</Label>
            <Form.Input onChange={handleInputChange}  name='titulli' placeholder='Titulli' value={materiali.titulli} />
            <Form.Input>
                <select onChange={changeSelectOptionHandler} name='lenda' placeholder='Lenda' value={materiali.lenda}>
                {lendetData.map(lenda => (
                    <option key={lenda.lendaId}>{lenda.emri}</option>
                ))}
                </select>
            </Form.Input>
            <Form.Input>
                <select onChange={changeSelectOptionHandler} name='perioda' placeholder='Perioda' value={materiali.perioda}>
                    {periodatData.map(perioda => (
                        <option key={perioda.periodaId}>{perioda.emri}</option>
                    ))}
                </select>
            </Form.Input>
            <Form.Input onChange={handleInputChange}  name='fileDrop' placeholder='File' value={materiali.fileDrop} />
            <Form.TextArea rows='auto' onChange={handleInputChange}  name='pershkrimi' placeholder='Pershkrimi' value={materiali.pershkrimi} />
            <Button loading={loading} floated='right' positive type='submit' size='mini' content='Dërgo'/>
            <Button onClick={() => modalStore.closeModal()} floated='right' type='submit' size='mini' content='Anulo'/>
        </Form>
    )
})

