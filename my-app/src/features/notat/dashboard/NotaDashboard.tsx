import { observer } from 'mobx-react-lite';
import { Button, Grid, Table } from 'semantic-ui-react'
import { SyntheticEvent, useEffect, useState } from 'react';
import { LoadingComponent } from '../../../app/layout/LoadingComponent';
import NotaDetails from '../details/NotaDetails';
import NotaForm from '../form/NotaForm';
import { useStore } from '../../../app/stores/store';
import ProfesorNavBar from '../../profesor/Profesor-Profili/ProfesorNavBar';


export default observer(function NotaDashboard() {
    const {notaStore} = useStore();
    const [target, setTarget] = useState('');
    const {selectedNota, editMode, notat, selectNota,  loading, deleteNota} = notaStore;
    function handleNotaDelete(e: SyntheticEvent<HTMLButtonElement>, id:string) {
        setTarget(e.currentTarget.name);
        deleteNota(id);
      }

      useEffect(()=>{
        notaStore.loadNotat();
      }, [notaStore]);


   if (loading) return <LoadingComponent content='Loading Notat' />

    return (
        
        <Grid style={{marginTop:'70px'}}>
            <Grid.Column width='4'>
                    <ProfesorNavBar/>
                </Grid.Column>
            
            <Grid.Column width={10}>   
                <Table singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Nota</Table.HeaderCell>
                            <Table.HeaderCell>Edit</Table.HeaderCell>
                            <Table.HeaderCell>Delete</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    {notat.map(nota => (
                        <Table.Body key={nota.notaId}>
                            <Table.Row>
                                <Table.Cell>{nota.grade}</Table.Cell>
                                <Table.Cell><Button onClick={() => selectNota(nota.notaId)} size='mini'  content='Edit' inverted color='olive' /></Table.Cell>
                                <Table.Cell><Button inverted color='red' name={nota.notaId} loading={target === nota.notaId && loading} onClick={(e) => handleNotaDelete(e, nota.notaId)} size='mini'  content='Fshij Notat' /></Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    ))}
                </Table>
                <Button  class='ui button' inverted color='grey' onClick={() => notaStore.openForm()} content='Shto Notë'/>
                <Grid.Column width='5'>
                {selectedNota && !editMode && 
                <NotaDetails/>}
                {editMode && (<NotaForm/>)}
            </Grid.Column>
            
            </Grid.Column>
            
        </Grid>
    )
});

