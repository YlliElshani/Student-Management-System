import { observer } from 'mobx-react-lite';
import { Grid, Table } from 'semantic-ui-react'
import {  useEffect } from 'react';
import { useStore } from '../../../app/stores/store';
import { LoadingComponent } from '../../../app/layout/LoadingComponent';
import LendaStudentiDetails from './LendaStudentiDetails';
import LendaStudentiForm from './LendaStudentiForm';
import StudentNavBar from '../StudentNavBar';



export default observer(function LendaStudentiDashboard() {
    const {lendaStore} = useStore();
    const {selectedLenda, editMode, lendetByEmri,  loading} = lendaStore;

      useEffect(()=>{
        lendaStore.loadLendet();
      }, [lendaStore]);


   if (loading) return <LoadingComponent content='Loading Lendet' />

    return (
        
        <Grid>
            <Grid.Row>
            <Grid.Column width='4'>
                <StudentNavBar />
                    
                </Grid.Column>
            
            <Grid.Column width='10' style={{marginTop:'5em', marginLeft:"3em"}}>   
                <Table singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Lenda</Table.HeaderCell>
                            <Table.HeaderCell>Klasa</Table.HeaderCell>
                            <Table.HeaderCell>Profesori</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    {lendetByEmri.map(lenda => (
                        <Table.Body key={lenda.lendaId}>
                            <Table.Row>
                                <Table.Cell>{lenda.emri}</Table.Cell>
                                <Table.Cell>{lenda.klasa}</Table.Cell>
                                <Table.Cell>{lenda.profesori}</Table.Cell>
                                <Table.Cell>{lenda.descripion}</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    ))}
                </Table>
                <Grid.Column width='5'>
                {selectedLenda && !editMode && 
                <LendaStudentiDetails/>}
                {editMode && (<LendaStudentiForm/>)}
            </Grid.Column>
            
            </Grid.Column>
            </Grid.Row>
            
        </Grid>
    )
});

