import axios from 'axios';
import { observer } from 'mobx-react-lite';
import React, {ChangeEvent, useState} from 'react'
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import { validate } from 'uuid';
import { ILenda } from '../../../app/models/lenda';
import { ISalla } from '../../../app/models/salla';
import { User } from '../../../app/models/user';
import { useStore } from '../../../app/stores/store';

export default observer(function PrezantimiPForm() {
  const {prezantimiStore} = useStore();
  const {selectedPrezantimi, closeForm, createPrezantimi, updatePrezantimi, loading} = prezantimiStore;

  const [lendet, setLendet]=React.useState<ILenda[]>([]);
  const [user, setUsers]=React.useState<User[]>([]);
  const [sallat, setSallat]=React.useState<ISalla[]>([]);
  
  React.useEffect(()=>{
    axios
    .get(('https://localhost:5000/API/lendet'))
    .then((res)=>setLendet(res.data));
    axios
    .get(('https://localhost:5000/API/profesor/list'))
    .then((res)=>setUsers(res.data));
    axios
    .get(('https://localhost:5000/API/sallat'))
    .then((res)=>setSallat(res.data));
  },[])
  
  const initialState = selectedPrezantimi ?? {
    prezantimiId: '',
    prezantimiInfo: '',
    lenda: '',
    profesori: '',
    salla: '',
    kohezgjatja: '',
    data: '',
    ora: ''
  }
  
  const [prezantimi, setPrezantimi] = useState(initialState);
  const [selected, setSelected] = React.useState("");
  
  function handleSubmit () { 
    prezantimi.prezantimiId ? updatePrezantimi(prezantimi) : createPrezantimi(prezantimi);
  }
 
  function handleInputChange (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    const {name, value} = event.currentTarget;
    setPrezantimi({...prezantimi, [name]: value});
  }
    
  function changeSelectOptionHandler(event: { target: { value: any; name?: any; }; }) {
    setSelected(event.target.value);
    const { name, value } = event.target;
    setPrezantimi({ ...prezantimi, [name]: value });
  }
  
  return (
  <Segment clearing>
    <Grid>
      <Form validate={validate} onSubmit={handleSubmit} autoComplete='off' style={{padding:'20px', width:'100%'}}>
        <Form.TextArea rows={5} onChange={handleInputChange} name='prezantimiInfo' placeholder='PrezantimiInfo' value={prezantimi.prezantimiInfo} />
        <Form.Input onChange={handleInputChange} name='kohezgjatja' placeholder='Kohezgjatja' value={prezantimi.kohezgjatja} />
        <Form.Input>
          <select onChange={changeSelectOptionHandler} name='lenda' placeholder='Lenda' value={prezantimi.lenda}>
            {lendet.map(lenda => (
              <option key={lenda.lendaId}>{lenda.emri}</option>
            ))}
          </select>
        </Form.Input>
        <Form.Input>
          <select onChange={changeSelectOptionHandler} name='profesori' placeholder='Profesori' value={prezantimi.profesori}>
            {user.map(users => (
              <option key={users.id}>{users.displayName}</option>
            ))}
          </select>
        </Form.Input>
        <Form.Input>
          <select onChange={changeSelectOptionHandler} name='salla' placeholder='Salla' value={prezantimi.salla}>
            {sallat.map(salla => (
              <option key={salla.sallaId}>{salla.emri}</option> 
            ))}
          </select>
        </Form.Input>
        <Form.Input type='date' onChange={handleInputChange} name='data' placeholder='Data' value={prezantimi.data} />
        <Form.Input onChange={handleInputChange} name='ora' placeholder='Ora' value={prezantimi.ora}/>
        <Button loading={loading} floated='right' positive type='submit' content='Dërgo'/>
        <Button onClick={closeForm} floated='right' type='submit' content='Anulo' />
      </Form>
    </Grid>
  </Segment>
  )
})

