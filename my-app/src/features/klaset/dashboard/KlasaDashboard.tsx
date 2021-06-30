import { observer } from 'mobx-react-lite';
import { Button, Grid, Table } from 'semantic-ui-react'
import { SyntheticEvent, useEffect, useState } from 'react';
import { useStore } from '../../../app/stores/store';
import KlasaDetails from '../details/KlasaDetails';
import KlasaForm from '../form/KlasaForm';
import { LoadingComponent } from '../../../app/layout/LoadingComponent';
import { NavBar } from '../../nav/NavBar';
import AdminNavBar from '../../administrator/AdminNavBar';



export default observer(function KlasaDashboard() {
    const {klasaStore} = useStore();
    const [target, setTarget] = useState('');
    const {selectedKlasa, editMode, klasetByEmri, selectKlasa,  loading, deleteKlasa} = klasaStore;
    function handleKlasaDelete(e: SyntheticEvent<HTMLButtonElement>, id:string) {
        setTarget(e.currentTarget.name);
        deleteKlasa(id);
      }

      useEffect(()=>{
        klasaStore.loadKlaset();
      }, [klasaStore]);


   if (loading) return <LoadingComponent content='Loading Klaset' />

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
                            <Table.HeaderCell>Edit</Table.HeaderCell>
                            <Table.HeaderCell>Delete</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    {klasetByEmri.map(klasa => (
                        <Table.Body key={klasa.klasaId}>
                            <Table.Row>
                                <Table.Cell>{klasa.emriKl}</Table.Cell>
                                <Table.Cell><Button onClick={() => selectKlasa(klasa.klasaId)} size='mini'  content='Edit' inverted color='olive' /></Table.Cell>
                                <Table.Cell><Button inverted color='red' name={klasa.klasaId} loading={target === klasa.klasaId && loading} onClick={(e) => handleKlasaDelete(e, klasa.klasaId)} size='mini'  content='Fshij Klaset' /></Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    ))}
                </Table>
                <Button  class='ui button' inverted color='grey' onClick={() => klasaStore.openForm()} content='Shto Klase'/>
                <Grid.Column width='5'>
                {selectedKlasa && !editMode && 
                <KlasaDetails/>}
                {editMode && (<KlasaForm/>)}
            </Grid.Column>
            
            </Grid.Column>
            
        </Grid>
    )
});

