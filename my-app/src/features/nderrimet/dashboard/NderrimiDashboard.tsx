import { observer } from 'mobx-react-lite';
import { Button, Grid, Table } from 'semantic-ui-react'
import { SyntheticEvent, useEffect, useState } from 'react';
import { useStore } from '../../../app/stores/store';
import { LoadingComponent } from '../../../app/layout/LoadingComponent';
import AdminNavBar from '../../administrator/AdminNavBar';
import NderrimiDetails from '../details/NderrimiDetails';
import NderrimiForm from '../form/NderrimiForm';



export default observer(function NderrimiDashboard() {
    const {nderrimiStore} = useStore();
    const [target, setTarget] = useState('');
    const {selectedNderrimi, editMode, nderrimiByEmri, selectNderrimi,  loading, deleteNderrimi} = nderrimiStore;
    function handleNderrimiDelete(e: SyntheticEvent<HTMLButtonElement>, id:string) {
        setTarget(e.currentTarget.name);
        deleteNderrimi(id);
      }

      useEffect(()=>{
        nderrimiStore.loadNderrimet();
      }, [nderrimiStore]);


   if (loading) return <LoadingComponent content='Loading Nderrimet' />

    return (
        
        <Grid style={{marginTop:'50px'}}>
            <Grid.Column width='4'>
                    <AdminNavBar />
                </Grid.Column>
            
            <Grid.Column width={10}>   
                <Table singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Nderrimi</Table.HeaderCell>
                            <Table.HeaderCell>Edit</Table.HeaderCell>
                            <Table.HeaderCell>Delete</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    {nderrimiByEmri.map(nderrimi => (
                        <Table.Body key={nderrimi.nderrimiId}>
                            <Table.Row>
                                <Table.Cell>{nderrimi.ndrr}</Table.Cell>
                                <Table.Cell><Button onClick={() => selectNderrimi(nderrimi.nderrimiId)} size='mini'  content='Edit' inverted color='olive' /></Table.Cell>
                                <Table.Cell><Button inverted color='red' name={nderrimi.ndrr} loading={target === nderrimi.nderrimiId && loading} onClick={(e) => handleNderrimiDelete(e, nderrimi.nderrimiId)} size='mini'  content='Fshij Nderrimet' /></Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    ))}
                </Table>
                <Button  class='ui button' inverted color='grey' onClick={() => nderrimiStore.openForm()} content='Shto Nderrimin'/>
                <Grid.Column width='5'>
                {selectedNderrimi && !editMode && 
                <NderrimiDetails/>}
                {editMode && (<NderrimiForm/>)}
            </Grid.Column>
            
            </Grid.Column>
            
        </Grid>
    )
});

