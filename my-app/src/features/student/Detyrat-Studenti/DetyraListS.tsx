import { observer } from 'mobx-react-lite';
import { Button, Grid, Table } from 'semantic-ui-react'
import { SyntheticEvent, useEffect, useState } from 'react';
import { LoadingComponent } from '../../../app/layout/LoadingComponent';
import AdminNavBar from '../../administrator/AdminNavBar';

import { useStore } from '../../../app/stores/store';
import DetyraDetailsS from './DetyraDetailsS';
import StudentNavBar from '../StudentNavBar';




export default observer(function DetyraListS() {
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
                <StudentNavBar />
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
                            <Table.HeaderCell>Shiko Detajet</Table.HeaderCell>
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
                                <Table.Cell><Button onClick={() => selectDetyra(detyra.detyraId)}   content='Shiko Detajet'  color='twitter' /></Table.Cell>
                          
                            </Table.Row>
                        </Table.Body>
                    ))}
                </Table>
               
                <Grid.Column width='5'>
                {selectedDetyra && !editMode && 
                <DetyraDetailsS/>}
             
            </Grid.Column>
            
            </Grid.Column>
            </Grid.Row>
            
        </Grid>
    )
});
