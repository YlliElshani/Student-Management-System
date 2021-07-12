import axios from 'axios';
import { observer } from 'mobx-react-lite';
import React, {ChangeEvent, useState} from 'react'
import { Button, Form, Label } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store';
import {ILenda} from '../../../app/models/lenda';
import {User} from '../../../app/models/user';

export default observer(function KerkeseNForm() {
    const {kerkesNdihmeStore} = useStore();
    const {selectedKerkese, createKerkesa, updateKerkese, loading,closeForm} = kerkesNdihmeStore;

    const initialState = selectedKerkese ?? {
        id:'',
        kerkesaInfo:'',
        emri:'',
        displayName:'',
        dataECaktuar:''
    }
    

    const [kerkesa, setKerkesa] = useState(initialState);

    function handleSubmit () { 
        kerkesa.id ? updateKerkese(kerkesa) : createKerkesa(kerkesa);
     }
 
    function handleInputChange (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.currentTarget;
        setKerkesa({...kerkesa, [name]: value});
    }

    const [lendet, setLendet]=React.useState<ILenda[]>([]);
    const [user, setUsers]=React.useState<User[]>([]);
    const [selected, setSelected] = React.useState("");

    
    React.useEffect(()=>{
        axios
        .get(('https://localhost:5000/API/lendet'))
        .then((res)=>setLendet(res.data));
        axios
        .get(('https://localhost:5000/API/profesor/list'))
        .then((res)=>setUsers(res.data));
    },[])


    function changeSelectOptionHandler(event: { target: { value: any; name?: any; }; }) {
        setSelected(event.target.value);
        const { name, value } = event.target;
        setKerkesa({ ...kerkesa, [name]: value });
      }

    return (
        <Form onSubmit={handleSubmit} className='ui form' autoComplete='off' style={{padding:'20px'}}>
            <Label style={{background:'transparent', fontSize:'large', marginLeft:'28%', marginBottom:'20px'}}>Kerkesa Ndihmes</Label>
            <Form.TextArea onChange={handleInputChange}  name='kerkesaInfo' placeholder='Kerkesa Info' value={kerkesa.kerkesaInfo} />
            <Form.Input onChange={handleInputChange}  name='dataECaktuar' placeholder='Data' type='date' value={kerkesa.dataECaktuar} />
            <Form.Input>
                <select onChange={changeSelectOptionHandler} name='emri' placeholder='Lenda' value={kerkesa.emri}>
                {lendet.map(lenda => (
                    <option key={lenda.lendaId}>{lenda.emri}</option>
                ))}
                </select>
            </Form.Input>
            <Form.Input>
                <select onChange={changeSelectOptionHandler} name='displayName' placeholder='Profesori' value={kerkesa.displayName}>
                    {user.map(users => (
                        <option key={users.id}>{users.displayName}</option>
                    ))}
                </select>
            </Form.Input>
            <Button loading={loading} floated='right' positive type='submit' size='mini' content='Dërgo'/>
            <Button onClick={closeForm} floated='right' type='submit' size='mini' content='Anulo'/>
        </Form>
    )
})