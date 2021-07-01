import { observer } from 'mobx-react-lite';
import { Button, Grid, Table } from 'semantic-ui-react'
import { SyntheticEvent, useEffect, useState } from 'react';
import { useStore } from '../../../app/stores/store';
import LendaDetails from '../details/LendaDetails';
import LendaForm from '../form/LendaForm';
import { LoadingComponent } from '../../../app/layout/LoadingComponent';
import { NavBar } from '../../nav/NavBar';
import AdminNavBar from '../../administrator/AdminNavBar';
import ProfesorNavBar from '../../profesor/Profesor-Profili/ProfesorNavBar';



export default observer(function LendaDashboard() {
    const {lendaStore} = useStore();
    const [target, setTarget] = useState('');
    const {selectedLenda, editMode, lendetByEmri, selectLenda,  loading, deleteLenda} = lendaStore;
    function handleLendaDelete(e: SyntheticEvent<HTMLButtonElement>, id:string) {
        setTarget(e.currentTarget.name);
        deleteLenda(id);
      }

      useEffect(()=>{
        lendaStore.loadLendet();
      }, [lendaStore]);


   if (loading) return <LoadingComponent content='Loading Lendet' />

    return (
        
        <Grid style={{marginTop:'50px'}}>
            <Grid.Column width='4'>
                <ProfesorNavBar />
                 <AdminNavBar />
                    
                </Grid.Column>
            
            <Grid.Column width={10}>   
                <Table singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Lenda</Table.HeaderCell>
                            <Table.HeaderCell>Klasa</Table.HeaderCell>
                            <Table.HeaderCell>Profesori</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                            <Table.HeaderCell>Edit</Table.HeaderCell>
                            <Table.HeaderCell>Delete</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    {lendetByEmri.map(lenda => (
                        <Table.Body key={lenda.lendaId}>
                            <Table.Row>
                                <Table.Cell>{lenda.emri}</Table.Cell>
                                <Table.Cell>{lenda.klasa}</Table.Cell>
                                <Table.Cell>{lenda.profesori}</Table.Cell>
                                <Table.Cell>{lenda.descripion}</Table.Cell>
                                <Table.Cell><Button onClick={() => selectLenda(lenda.lendaId)} size='mini'  content='Edit' inverted color='olive' /></Table.Cell>
                                <Table.Cell><Button inverted color='red' name={lenda.lendaId} loading={target === lenda.lendaId && loading} onClick={(e) => handleLendaDelete(e, lenda.lendaId)} size='mini'  content='Fshij Lenden' /></Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    ))}
                </Table>
                <Button  class='ui button' inverted color='grey' onClick={() => lendaStore.openForm()} content='Shto Lende'/>
                <Grid.Column width='5'>
                {selectedLenda && !editMode && 
                <LendaDetails/>}
                {editMode && (<LendaForm/>)}
            </Grid.Column>
            
            </Grid.Column>
            
        </Grid>
    )
});

