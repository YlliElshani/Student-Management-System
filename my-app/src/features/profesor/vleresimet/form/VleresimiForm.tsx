import axios from 'axios';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { ChangeEvent,  useState } from 'react'
import { Button,  Form, Segment } from 'semantic-ui-react'
import { User } from '../../../../app/models/user';
import { useStore } from '../../../../app/stores/store'


export default observer(function VleresimiForm() {
  const { vleresimiStore } = useStore();
  const { selectedVleresimi, closeForm, createVleresimi, updateVleresimi, loading } = vleresimiStore;

  //@ts-ignore
  const [data, setData]=React.useState<ILenda[]>([] as lendetByEmri);
  const [studenti, setStudenti]=React.useState<User[]>([]);


  React.useEffect(()=>{
    axios
      .get(('https://localhost:5000/API/Lendet'))
      .then((res)=>setData(res.data));
      axios
      .get(('https://localhost:5000/API/Notat'))
      .then((res)=>setData(res.data));
      axios
    .get(('https://localhost:5000/API/student/list'))
    .then((res)=>setStudenti(res.data));
  },[])

  const initialState = selectedVleresimi ?? {
    vleresimiId: '',
    studenti:'',
    lenda: '',
    nota: '',
    dataEVendosjes: '',
    oraEVendosjes: ''
  }

  const [vleresimi, setVleresimi] = useState(initialState);
  const [selected, setSelected] = React.useState("");

  function handleSubmit() {
    vleresimi.vleresimiId ? updateVleresimi(vleresimi) : createVleresimi(vleresimi);
  };

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setVleresimi({ ...vleresimi, [name]: value });
  };
  
  function changeSelectOptionHandler(event: { target: { value: any; name?: any; }; }) {
    setSelected(event.target.value);
    const { name, value } = event.target;
    setVleresimi({ ...vleresimi, [name]: value });
  }

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete='off'>
      <Form.Input>
          <select onChange={changeSelectOptionHandler} name='studenti' placeholder='Studenti' value={vleresimi.studenti}>
            {studenti.map(student => (
              <option key={student.id}>{student.displayName}</option>
            ))}
          </select>
        </Form.Input>
        <Form.Input>
          <select onChange={changeSelectOptionHandler} name='lenda' placeholder='Lenda' value={vleresimi.lenda}>
            {data.map(lenda => (
              <option key={lenda.id}>{lenda.emri}</option>
            ))}
          </select>
        </Form.Input>
        <Form.Input>
          <select onChange={changeSelectOptionHandler} name='nota' placeholder='Nota' value={vleresimi.nota}>
            {data.map(nota => (
              <option>{nota.grade}</option>
            ))}
          </select>
        </Form.Input>
        <Form.Input type='date' onChange={handleInputChange} name='dataEVendosjes' placeholder='dataEVendosjes' value={vleresimi.dataEVendosjes} />
        <Form.Input onChange={handleInputChange} name='oraEVendosjes' placeholder='oraEVendosjes' value={vleresimi.oraEVendosjes} />
        <Button loading={loading} floated='right' positive type='submit' content='Dërgo' />
        <Button onClick={closeForm} floated='right' type='submit' content='Anulo' />
      </Form>
    </Segment>
  )
});

