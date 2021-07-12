import { observer } from 'mobx-react-lite';
import React from 'react';
import axios from 'axios';
import { ChangeEvent,  useState } from 'react'
import { Button,  Form, Segment } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store'

export default observer(function VijushmeriaForm() {
  const { vijushmeriaStore } = useStore();
  const { selectedVijushmeria, closeForm, createVijushmeria, updateVijushmeria, loading } = vijushmeriaStore;

      //@ts-ignore
      const [dataa2, setDataa2]=React.useState<User[]>([] as users);
  
    React.useEffect(()=>{
      axios
      .get(('https://localhost:5000/API/student/list'))
      .then((res)=>setDataa2(res.data));
  },[])

  const initialState = selectedVijushmeria ?? {
    vijushmeriaId: '',
    pjesmarrja: '',
    studenti: ''
  }

 
  const [vijushmeria, setVijushmeria] = useState(initialState);
  const [selected, setSelected] = React.useState("");

  function handleSubmit() {
    vijushmeria.vijushmeriaId ? updateVijushmeria(vijushmeria) : createVijushmeria(vijushmeria);
  };

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setVijushmeria({ ...vijushmeria, [name]: value });
  };
  function changeSelectOptionHandler(event: { target: { value: any; name?: any; }; }) {
    setSelected(event.target.value);
    const { name, value } = event.target;
    setVijushmeria({ ...vijushmeria, [name]: value });
  }

  return (
    <Segment clearing>

      <Form onSubmit={handleSubmit} autoComplete='off'>
        <Form.Input onChange={handleInputChange} name='pjesmarrja' placeholder='pjesmarrja' value={vijushmeria.pjesmarrja} />
        <Form.Input>
        <select onChange={changeSelectOptionHandler} name='studenti' placeholder='studenti' value={vijushmeria.studenti}>
          {dataa2.map(user => (
            
            <option>{user.displayName}</option>
          ))}
        </select>
        </Form.Input>
        <Button loading={loading} floated='right' positive type='submit' content='Dërgo' />
        <Button onClick={closeForm} floated='right' type='submit' content='Anulo' />
      </Form>

    </Segment>
  )
})

