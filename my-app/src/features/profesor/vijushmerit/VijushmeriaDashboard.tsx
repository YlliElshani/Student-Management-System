import { observer } from 'mobx-react-lite';
import { Button, Grid, Table } from 'semantic-ui-react'
import { SyntheticEvent, useEffect, useState } from 'react';
import { useStore } from '../../../app/stores/store';
import VijushmeriaDetails from './VijushmeriaDetails';
import VijushmeriaForm from './VijushmeriaForm';
import { LoadingComponent } from '../../../app/layout/LoadingComponent';
import ProfesorNavBar from '../../profesor/Profesor-Profili/ProfesorNavBar';


export default observer(function VijushmeriaDashboard() {
    const {vijushmeriaStore} = useStore();
    const [target, setTarget] = useState('');
    const {selectedVijushmeria, editMode, vijushmeritByPjesmarrja, selectVijushmeria,  loading, deleteVijushmeria} = vijushmeriaStore;
    function handleVijushmeriaDelete(e: SyntheticEvent<HTMLButtonElement>, id:string) {
        setTarget(e.currentTarget.name);
        deleteVijushmeria(id);
      }

      useEffect(()=>{
        vijushmeriaStore.loadVijushmerit();
      }, [vijushmeriaStore]);

   if (loading) return <LoadingComponent content='Loading Vijushmeria' />

    return (
        
        <Grid >
            <Grid.Column width='4'>
                <ProfesorNavBar />
                    
                </Grid.Column>
            
            <Grid.Column style={{marginTop:'50px'}} width={10}>   
                <Table singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Vijushmeria</Table.HeaderCell>
                            <Table.HeaderCell>Studenti</Table.HeaderCell>

                        </Table.Row>
                    </Table.Header>

                    {vijushmeritByPjesmarrja.map(vijushmeria => (
                        <Table.Body key={vijushmeria.vijushmeriaId}>
                            
                            <Table.Row>
                                <Table.Cell>{vijushmeria.pjesmarrja}</Table.Cell>
                                <Table.Cell>{vijushmeria.studenti}</Table.Cell>
                                <Table.Cell><Button onClick={() => selectVijushmeria(vijushmeria.vijushmeriaId)} s content='Edit'  color='green' /></Table.Cell>
                                <Table.Cell><Button  name={vijushmeria.vijushmeriaId} loading={target === vijushmeria.vijushmeriaId && loading} onClick={(e) => handleVijushmeriaDelete(e, vijushmeria.vijushmeriaId)}   content='Fshij VIjushmerine' /></Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    ))}
                </Table>
                <Button  class='ui button'  onClick={() => vijushmeriaStore.openForm()} content='Shto Vijushmerine'/>
                <Grid.Column width='5'>
                {selectedVijushmeria && !editMode && 
                <VijushmeriaDetails/>}
                {editMode && (<VijushmeriaForm/>)}
            </Grid.Column>
            
            </Grid.Column>
            
        </Grid>
    )
});

