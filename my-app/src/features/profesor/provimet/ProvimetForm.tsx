import axios from 'axios';
import { observer } from 'mobx-react-lite';
import React, { useState} from 'react'
import { Button, Form, Label } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store';
import {ILenda} from '../../../app/models/lenda';
import {IKoheZ} from '../../../app/models/kOres';
import {User} from '../../../app/models/user';
import {ISalla} from '../../../app/models/salla';

export default observer(function ProvimetForm() {
      
    React.useEffect(()=>{
        axios
        .get(('https://localhost:5000/api/lendet'))
        .then((res)=>setLendet(res.data));
        axios
        .get(('https://localhost:5000/api/kohezgjatja'))
        .then((res)=>setKoha(res.data));
        axios
        .get(('https://localhost:5000/api/profesor/list'))
        .then((res)=>setProfesori(res.data));
        axios
        .get(('https://localhost:5000/api/sallat'))
        .then((res)=>setSalla(res.data));
    },[]);

    const {provimiStore, modalStore} = useStore();
    const {selectedProvimi, createProvimi, updateProvimi, loading} = provimiStore;

    const initialState = selectedProvimi ?? {
        id:'',
        lenda:'',
        oraENisjes:'',
        koheZgjatja:'',
        salla:'',
        profesori:''
    }
    

    const [provimi, setProvimi] = useState(initialState);

    function handleSubmit () { 
        provimi.id ? updateProvimi(provimi) : createProvimi(provimi);
    }

    const [lendet, setLendet]=React.useState<ILenda[]>([]);
    const [koha, setKoha]=React.useState<IKoheZ[]>([]);
    const [profesori, setProfesori]=React.useState<User[]>([]);
    const [salla, setSalla]=React.useState<ISalla[]>([]);

    const [selected, setSelected] = React.useState("");


    function changeSelectOptionHandler(event: { target: { value: any; name?: any; }; }) {
        setSelected(event.target.value);
        const { name, value } = event.target;
        setProvimi({ ...provimi, [name]: value });
      }

    return (
        <Form onSubmit={handleSubmit} className='ui form' autoComplete='off' style={{padding:'20px'}}>
            <Label style={{background:'transparent', fontSize:'large', marginLeft:'28%', marginBottom:'20px'}}>Materialet</Label>
            <Form.Input>
                <select onChange={changeSelectOptionHandler} name='profesori' placeholder='Profesori' value={provimi.lenda}>
                {lendet.map(lenda => (
                    <option key={lenda.lendaId}>{lenda.emri}</option>
                ))}
                </select>
            </Form.Input>
            <Form.Input>
                <select onChange={changeSelectOptionHandler} name='profesori' placeholder='Profesori' value={provimi.profesori}>
                {profesori.map(profa => (
                    <option key={profa.id}>{profa.displayName}</option>
                ))}
                </select>
            </Form.Input>
            <Form.Input>
                <select onChange={changeSelectOptionHandler} name='salla' placeholder='Salla' value={provimi.salla}>
                    {salla.map(salla => (
                        <option key={salla.sallaId}>{salla.emri}</option>
                    ))}
                </select>
            </Form.Input>
            <Form.Input>
                <select onChange={changeSelectOptionHandler} name='oraNisjes' placeholder='Ora' value={provimi.oraENisjes}>
                    {koha.map(koha => (
                        <option key={koha.id}>{koha.oraNisjes}</option>
                    ))}
                </select>
            </Form.Input>
            <Form.Input>
                <select onChange={changeSelectOptionHandler} name='kohezgjatja' placeholder='Kohezgjatja' value={provimi.koheZgjatja}>
                    {koha.map(koha => (
                        <option key={koha.id}>{koha.kohaMin}</option>
                    ))}
                </select>
            </Form.Input>
            <Button loading={loading} floated='right' positive type='submit' size='mini' content='Dërgo'/>
            <Button onClick={() => modalStore.closeModal()} floated='right' type='submit' size='mini' content='Anulo'/>
        </Form>
    )
})

