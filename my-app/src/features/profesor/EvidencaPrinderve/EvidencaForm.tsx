import axios from 'axios';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { ChangeEvent,  useState } from 'react'
import { Button,  Form, Segment } from 'semantic-ui-react'
import { User } from '../../../app/models/user';
import { useStore } from '../../../app/stores/store';


export default observer(function EvidencaForm() {
  const { evidencaStore } = useStore();
  const { selectedEvidenca, closeForm, createEvidence, updateEvidence, loading } = evidencaStore;

  const [userData, setUser]=React.useState<User[]>([]);
  const [userData2, setUser2]=React.useState<User[]>([]);
  

     React.useEffect(()=>{
       axios
       .get(('https://localhost:5000/API/guardian/list'))
       .then((res)=>setUser(res.data));

       axios
       .get(('https://localhost:5000/API/student/list'))
       .then((res)=>setUser2(res.data));
   },[])


  const initialState = selectedEvidenca ?? {
    id:'',
    evidencaInfo:'',
    displayName:'',
    displayName2:''
  }

 
  const [evidenca, setEvidenca] = useState(initialState);
  const [selected, setSelected] = React.useState("");


  function handleSubmit() {
    evidenca.id ? updateEvidence(evidenca) : createEvidence(evidenca);
  };

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setEvidenca({ ...evidenca, [name]: value });
  };

  function changeSelectOptionHandler(event: { target: { value: any; name?: any; }; }) {
    setSelected(event.target.value);
    const { name, value } = event.target;
    setEvidenca({ ...evidenca, [name]: value });
  }

  return (
    <Segment clearing>

      <Form onSubmit={handleSubmit} autoComplete='off'>
       <Form.TextArea  onChange={handleInputChange} name='evidencaInfo' placeholder='Evidenca Info' value={evidenca.evidencaInfo} />
        <Form.Input>
      <select onChange={changeSelectOptionHandler} name='displayName' placeholder='Prindi' value={evidenca.displayName}>
          {userData.map(parent => (
            
            <option key={parent.id}>{parent.displayName}</option>
          ))}
        </select>
        </Form.Input>
        <Form.Input>
        <select onChange={changeSelectOptionHandler} name='displayName2' placeholder='Studenti' value={evidenca.displayName2}>
          {userData2.map(student => (
            
            <option key={student.id}>{student.displayName}</option>

          ))}
        </select>
        </Form.Input>
        <Button loading={loading} floated='right' positive type='submit' content='Dërgo' />
        <Button onClick={closeForm} floated='right' type='submit' content='Anulo' />
      </Form>
    </Segment>
  )
});

