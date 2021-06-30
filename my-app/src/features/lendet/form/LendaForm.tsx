import { observer } from 'mobx-react-lite';
import React from 'react';
import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { Button, Card, Dropdown, Form, Grid, Segment, Table } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store'
import KlasaDetails from '../../klaset/details/KlasaDetails';
import KlasaForm from '../../klaset/form/KlasaForm';

export default observer(function LendaForm() {
  const { lendaStore } = useStore();
  const { selectedLenda, closeForm, createLenda, updateLenda, loading } = lendaStore;
  const { klasaStore } = useStore();
  const { klasetByEmri, selectedKlasa, selectKlasa, deleteKlasa, openForm, cancelSelectedKlasa, editMode } = klasaStore;
  const [target, setTarget] = useState('');

  const initialState = selectedLenda ?? {
    lendaId: '',
    emri: '',
    klasa: '',
    profesori: '',
    descripion: ''
  }
  const initialState2 = selectedKlasa ?? {
    klasaId: '',
    emriKl: ''
  }

  const [lenda, setLenda] = useState(initialState);
  const [klasa, setKlasa] = useState(initialState2);
  const [selected, setSelected] = React.useState("");


  function handleSubmit() {
    lenda.lendaId ? updateLenda(lenda) : createLenda(lenda);
  };

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setLenda({ ...lenda, [name]: value });
  };

  function handleKlasaDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
    setTarget(e.currentTarget.name);
    deleteKlasa(id);
  }

  function changeSelectOptionHandler(event: { target: { value: any; name?: any; }; }) {
    setSelected(event.target.value);
    const { name, value } = event.target;
    setLenda({ ...lenda, [name]: value });
  }

  const [frequency, setFrequency] = useState({});

  return (


    <Segment clearing>

      <Form onSubmit={handleSubmit} autoComplete='off'>
        <Form.Input onChange={handleInputChange} name='emri' placeholder='Lenda' value={lenda.emri} />
        {/**<Form.Input onChange={handleInputChange} name='klasa' placeholder='Klasa' value={lenda.klasa} ></Form.Input>**/}
        <Form.Input>
        <select onChange={changeSelectOptionHandler} name='klasa' placeholder='Klasa' value={lenda.klasa}>
          {klasetByEmri.map(klasa => (
            
            <option>{klasa.emriKl}</option>
          ))}
        </select>
        </Form.Input>
        
      
       
        <Form.Input onChange={handleInputChange} name='profesori' placeholder='Profesori' value={lenda.profesori} />
        <Form.Input onChange={handleInputChange} name='descripion' placeholder='Description' value={lenda.descripion} />
        <Button loading={loading} floated='right' positive type='submit' content='Dërgo' />
        <Button onClick={closeForm} floated='right' type='submit' content='Anulo' />


        { /**    <Grid style={{marginTop:'50px'}}>
       
            <Grid.Column width={10}>   
                <Table singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Klasa</Table.HeaderCell>
                            <Table.HeaderCell>Ruaj</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    {klasetByEmri.map(klasa => (
                        <Table.Body key={klasa.klasaId}>
                            <Table.Row>
                                <Table.Cell>{klasa.emriKl}</Table.Cell>
                                
                            </Table.Row>
                        </Table.Body>
                    ))}
                </Table>
                <Grid.Column width='5'>
                {selectedKlasa && !editMode && 
                <KlasaDetails/>}
        
            </Grid.Column>
            
            </Grid.Column>
            
        </Grid> **/}
      </Form>

    </Segment>
  )
})

