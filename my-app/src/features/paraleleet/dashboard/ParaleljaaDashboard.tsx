import { observer } from 'mobx-react-lite';
import { Button, Grid, Table } from 'semantic-ui-react'
import { SyntheticEvent, useEffect, useState } from 'react';
import { useStore } from '../../../app/stores/store';
import { LoadingComponent } from '../../../app/layout/LoadingComponent';
import AdminNavBar from '../../administrator/AdminNavBar';
import ParaleljaaDetails from '../details/ParaleljaaDetails';
import ParaleljaaForm from '../form/ParaleljaaForm';



export default observer(function ParaleljaaDashboard() {
    const {paraleljaaStore} = useStore();
    const [target, setTarget] = useState('');
    const {selectedParaleljaa, editMode, paraleleetByEmri, selectParaleljaa,  loading, deleteParaleljaa} = paraleljaaStore;
    function handleParaleljaaDelete(e: SyntheticEvent<HTMLButtonElement>, id:string) {
        setTarget(e.currentTarget.name);
        deleteParaleljaa(id);
      }

      useEffect(()=>{
        paraleljaaStore.loadParaleleet();
      }, [paraleljaaStore]);


   if (loading) return <LoadingComponent content='Loading Paralelet' />

    return (
        
        <Grid>
            <Grid.Column width='4'>
                    <AdminNavBar />
                </Grid.Column>
            
            <Grid.Column style={{marginTop:'50px'}} width={10}>   
                <Table singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Paralelja</Table.HeaderCell>
                            <Table.HeaderCell>Edit</Table.HeaderCell>
                            <Table.HeaderCell>Delete</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    {paraleleetByEmri.map(paraleljaa => (
                        <Table.Body key={paraleljaa.paraleljaaId}>
                            <Table.Row>
                                <Table.Cell>{paraleljaa.emriPar}</Table.Cell>
                                <Table.Cell><Button onClick={() => selectParaleljaa(paraleljaa.paraleljaaId)} size='mini'  content='Edit' inverted color='olive' /></Table.Cell>
                                <Table.Cell><Button inverted color='red' name={paraleljaa.emriPar} loading={target === paraleljaa.paraleljaaId && loading} onClick={(e) => handleParaleljaaDelete(e, paraleljaa.paraleljaaId)} size='mini'  content='Fshij Paralelen' /></Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    ))}
                </Table>
                <Button  class='ui button' onClick={() => paraleljaaStore.openForm()} content='Shto Paralelen'/>
                <Grid.Column width='5'>
                {selectedParaleljaa && !editMode && 
                <ParaleljaaDetails/>}
                {editMode && (<ParaleljaaForm/>)}
            </Grid.Column>
            
            </Grid.Column>
            
        </Grid>
    )
});

