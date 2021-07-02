import { observer } from 'mobx-react-lite';
import React from 'react';
import { ChangeEvent,  useState } from 'react'
import { Button,  Form, Segment } from 'semantic-ui-react'
import { useStore } from '../../app/stores/store'


export default observer(function ParaleletKlasaForm() {
  const { paraleljaKlasaStore } = useStore();
  const { selectedParaleljaKlasa, closeForm, createParaleljaKlasa, updateParaleljaKlasa, loading } = paraleljaKlasaStore;
  //i shton qito store t'qasaj tabele qe ka me hi ndrop-down (12-13)
  const { klasaStore } = useStore();
  const { klasetByEmri } = klasaStore;
  const { paraleljaaStore } = useStore();
  const { paraleleetByEmri } = paraleljaaStore;

  const initialState = selectedParaleljaKlasa ?? {
    paraleljaKlasaId: '',
    emriKl: '',
    emriPar: '',
  }

 
  const [paraleljaKlasa, setParaleljaKlasa] = useState(initialState);
  //shton rreshtin 26
  const [selected, setSelected] = React.useState("");


  function handleSubmit() {
    paraleljaKlasa.paraleljaKlasaId ? updateParaleljaKlasa(paraleljaKlasa) : createParaleljaKlasa(paraleljaKlasa);
  };

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setParaleljaKlasa({ ...paraleljaKlasa, [name]: value });
  };
  //e shton 45-49
  function changeSelectOptionHandler(event: { target: { value: any; name?: any; }; }) {
    setSelected(event.target.value);
    const { name, value } = event.target;
    setParaleljaKlasa({ ...paraleljaKlasa, [name]: value });
  }
  function changeSelectOptionHandler2(event: { target: { value: any; name?: any; }; }) {
    setSelected(event.target.value);
    const { name, value } = event.target;
    setParaleljaKlasa({ ...paraleljaKlasa, [name]: value });
  }

  return (
    <Segment clearing>

      <Form onSubmit={handleSubmit} autoComplete='off'>
       
        {/* Rreshti 57-64 esht dropdowni */}
        <Form.Input>
        <select onChange={changeSelectOptionHandler} name='emriKl' placeholder='Klasa' value={paraleljaKlasa.emriKl}>
          {klasetByEmri.map(klasa => (    
            <option>{klasa.emriKl}</option>
          ))}
        </select>
        </Form.Input>

        <Form.Input>
        <select onChange={changeSelectOptionHandler2} name='emriPar' placeholder='Klasa' value={paraleljaKlasa.emriPar}>
          {paraleleetByEmri.map(paraleleet => (    
            <option>{paraleleet.emriPar}</option>
          ))}
        </select>
        </Form.Input>
        
        <Button loading={loading} floated='right' positive type='submit' content='Dërgo' />
        <Button onClick={closeForm} floated='right' type='submit' content='Anulo' />
      </Form>

    </Segment>
  )
})

