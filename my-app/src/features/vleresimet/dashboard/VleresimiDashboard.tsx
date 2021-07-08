import { observer } from 'mobx-react-lite';
import { Button, Grid, Table } from 'semantic-ui-react'
import { SyntheticEvent, useEffect, useState } from 'react';
import { LoadingComponent } from '../../../app/layout/LoadingComponent';
import AdminNavBar from '../../administrator/AdminNavBar';
import ProfesorNavBar from '../../profesor/Profesor-Profili/ProfesorNavBar';
import { useStore } from '../../../app/stores/store';
import VleresimiDetails from '../details/VleresimiDetails';
import VleresimiForm from '../form/VleresimiForm';



export default observer(function VleresimiDashboard() {
    const {vleresimiStore} = useStore();
    const [target, setTarget] = useState('');
    const {selectedVleresimi, editMode, vleresimetByDate, selectVleresimi,  loading, deleteVleresimi} = vleresimiStore;
    function handleVleresimiDelete(e: SyntheticEvent<HTMLButtonElement>, id:string) {
        setTarget(e.currentTarget.name);
        deleteVleresimi(id);
      }

      useEffect(()=>{
        vleresimiStore.loadVleresimet();
      }, [vleresimiStore]);


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
                            <Table.HeaderCell>Lenda</Table.HeaderCell>
                            <Table.HeaderCell>Nota</Table.HeaderCell>
                            <Table.HeaderCell>Data e Vendosjes</Table.HeaderCell>
                            <Table.HeaderCell>Ora e Vendosjes</Table.HeaderCell>
                            <Table.HeaderCell>Edit</Table.HeaderCell>
                            <Table.HeaderCell>Delete</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    {vleresimetByDate.map(vleresimi => (
                        <Table.Body key={vleresimi.vleresimiId}>
                            <Table.Row>
                                <Table.Cell>{vleresimi.lenda}</Table.Cell>
                                <Table.Cell>{vleresimi.nota}</Table.Cell>
                                <Table.Cell>{vleresimi.dataEVendosjes}</Table.Cell>
                                <Table.Cell>{vleresimi.oraEVendosjes}</Table.Cell>
                                <Table.Cell><Button onClick={() => selectVleresimi(vleresimi.vleresimiId)}   content='Edit'  color='twitter' /></Table.Cell>
                                <Table.Cell><Button  name={vleresimi.vleresimiId} loading={target === vleresimi.vleresimiId && loading} onClick={(e) => handleVleresimiDelete(e, vleresimi.vleresimiId)}   content='Fshij Vleresimin' color="red" /></Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    ))}
                </Table>
                <Button  class='ui button' onClick={() => vleresimiStore.openForm()} content='Shto Vleresim' color="green"/>
                <Grid.Column width='5'>
                {selectedVleresimi && !editMode && 
                <VleresimiDetails/>}
                {editMode && (<VleresimiForm/>)}
            </Grid.Column>
            
            </Grid.Column>
            </Grid.Row>
            
        </Grid>
    )
});

