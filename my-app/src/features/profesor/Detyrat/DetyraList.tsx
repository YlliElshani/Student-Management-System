import { observer } from 'mobx-react-lite';
import { Button, Grid, Table } from 'semantic-ui-react'
import { SyntheticEvent, useEffect, useState } from 'react';
import { LoadingComponent } from '../../../app/layout/LoadingComponent';
import AdminNavBar from '../../administrator/AdminNavBar';
import ProfesorNavBar from '../../profesor/Profesor-Profili/ProfesorNavBar';
import { useStore } from '../../../app/stores/store';
import DetyraDetails from './DetyraDetails';
import DetyraForm from './DetyraForm';



export default observer(function DetyraList() {
    const {detyraStore} = useStore();
    const [target, setTarget] = useState('');
    const {selectedDetyra, editMode, detyrat, selectDetyra,   loading, deleteDetyra} = detyraStore;
    function handleDetyraDelete(e: SyntheticEvent<HTMLButtonElement>, id:string) {
        setTarget(e.currentTarget.name);
        deleteDetyra(id);
      }

      useEffect(()=>{
        detyraStore.loadDetyrat();
      }, [detyraStore]);

   if (loading) return <LoadingComponent content='Loading Vleresimet' />

    return (
        
        <Grid>
            <Grid.Row>
            <Grid.Column width='4'>
                <ProfesorNavBar />
                 <AdminNavBar />
                    
                </Grid.Column>
            
            <Grid.Column width={10} style={{marginTop:'5em'}}>   
                <Table singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Emri</Table.HeaderCell>
                            <Table.HeaderCell>Lenda</Table.HeaderCell>
                            <Table.HeaderCell>Klasa</Table.HeaderCell>
                            <Table.HeaderCell>Profesori</Table.HeaderCell>
                            <Table.HeaderCell>Pershkrim</Table.HeaderCell>
                            <Table.HeaderCell>Edito</Table.HeaderCell>
                            <Table.HeaderCell>Fshije</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    {detyrat.map(detyra => (
                        <Table.Body key={detyra.detyraId}>
                            <Table.Row>
                                <Table.Cell>{detyra.detyraEmri}</Table.Cell>
                                <Table.Cell>{detyra.lenda}</Table.Cell>
                                <Table.Cell>{detyra.klasa}</Table.Cell>
                                <Table.Cell>{detyra.profesori}</Table.Cell>
                                <Table.Cell>{detyra.pershkrimi}</Table.Cell>
                                <Table.Cell><Button onClick={() => selectDetyra(detyra.detyraId)}   content='Edit'  color='twitter' /></Table.Cell>
                                <Table.Cell><Button  name={detyra.detyraId} loading={target === detyra.detyraId && loading} onClick={(e) => handleDetyraDelete(e, detyra.detyraId)}   content='Fshij Detyren' color="red" /></Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    ))}
                </Table>
                <Button  class='ui button' onClick={() => detyraStore.openForm()} content='Shto Detyren' color="green"/>
                <Grid.Column width='5'>
                {selectedDetyra && !editMode && 
                <DetyraDetails/>}
                {editMode && (<DetyraForm/>)}
            </Grid.Column>
            
            </Grid.Column>
            </Grid.Row>
            
        </Grid>
    )
});
