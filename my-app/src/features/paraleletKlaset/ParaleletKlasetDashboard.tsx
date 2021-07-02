import { observer } from 'mobx-react-lite';
import { Button, Grid, Table } from 'semantic-ui-react'
import { SyntheticEvent, useEffect, useState } from 'react';
import { useStore } from '../../app/stores/store';
import paraleljaKlasaStore from '../../app/stores/paraleljaKlasaStore';
import AdminNavBar from '../administrator/AdminNavBar';
import { LoadingComponent } from '../../app/layout/LoadingComponent';
import ParaleletKlasetDetails from './ParaleletKlasetDetails';
import ParaleletKlasetForm from './ParaleletKlasetForm';




export default observer(function ParaleletKlasetDashboard() {
    const {paraleljaKlasaStore} = useStore();
    const [target, setTarget] = useState('');
    const {selectedParaleljaKlasa, editMode, paraleletKlasetByEmri, selectParaleljaKlasa,  loading, deleteParaleljaKlasa} = paraleljaKlasaStore;
    function handleParaleljaKlasaDelete(e: SyntheticEvent<HTMLButtonElement>, id:string) {
        setTarget(e.currentTarget.name);
        deleteParaleljaKlasa(id);
      }

      useEffect(()=>{
        paraleljaKlasaStore.loadParaleletKlaset();
      }, [paraleljaKlasaStore]);


   if (loading) return <LoadingComponent content='Loading' />

    return (
        
        <Grid style={{marginTop:'50px'}}>
            <Grid.Column width='4'>
                
                 <AdminNavBar />
                    
                </Grid.Column>
            
            <Grid.Column width={10}>   
                <Table singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Klasa</Table.HeaderCell>
                            <Table.HeaderCell>Paralelja</Table.HeaderCell>
                            <Table.HeaderCell>Edit</Table.HeaderCell>
                            <Table.HeaderCell>Delete</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    {paraleletKlasetByEmri.map(paraleljaKlasa => (
                        <Table.Body key={paraleljaKlasa.paraleljaKlasaId}>
                            <Table.Row>
                                <Table.Cell>{paraleljaKlasa.emriKl}</Table.Cell>
                                <Table.Cell>{paraleljaKlasa.emriPar}</Table.Cell>
                                <Table.Cell><Button onClick={() => selectParaleljaKlasa(paraleljaKlasa.paraleljaKlasaId)} size='mini'  content='Edit' inverted color='olive' /></Table.Cell>
                                <Table.Cell><Button inverted color='red' name={paraleljaKlasa.paraleljaKlasaId} loading={target === paraleljaKlasa.paraleljaKlasaId && loading} onClick={(e) => handleParaleljaKlasaDelete(e, paraleljaKlasa.paraleljaKlasaId)} size='mini'  content='Fshij ' /></Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    ))}
                </Table>
                <Button  class='ui button' inverted color='grey' onClick={() => paraleljaKlasaStore.openForm()} content='Shto'/>
                <Grid.Column width='5'>
                {selectedParaleljaKlasa && !editMode && 
                <ParaleletKlasetDetails/>}
                {editMode && (<ParaleletKlasetForm/>)}
            </Grid.Column>
            
            </Grid.Column>
            
        </Grid>
    )
});

