import { observer } from 'mobx-react-lite';
import { Button, Grid, Table } from 'semantic-ui-react'
import { SyntheticEvent, useEffect, useState } from 'react';
import { LoadingComponent } from '../../../app/layout/LoadingComponent';
import AdminNavBar from '../../administrator/AdminNavBar';
import { useStore } from '../../../app/stores/store';
import VleresimiStudentiDetails from './VleresimiStudentiDetails';
import VleresimiStudentiForm from './VleresimiStudentiForm';
import StudentNavBar from '../StudentNavBar';



export default observer(function VleresimiStudentiDashboard() {
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
        
        <Grid style={{marginTop:'50px'}}>
            <Grid.Column width='4'>
                <StudentNavBar />
                 <AdminNavBar />
                    
                </Grid.Column>
            
            <Grid.Column width={10}>   
                <Table singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Lenda</Table.HeaderCell>
                            <Table.HeaderCell>Nota</Table.HeaderCell>
                            <Table.HeaderCell>Data e Vendosjes</Table.HeaderCell>
                            <Table.HeaderCell>Ora e Vendosjes</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    {vleresimetByDate.map(vleresimi => (
                        <Table.Body key={vleresimi.vleresimiId}>
                            <Table.Row>
                                <Table.Cell>{vleresimi.lenda}</Table.Cell>
                                <Table.Cell>{vleresimi.nota}</Table.Cell>
                                <Table.Cell>{vleresimi.dataEVendosjes}</Table.Cell>
                                <Table.Cell>{vleresimi.oraEVendosjes}</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    ))}
                </Table>
                <Grid.Column width='5'>
                {selectedVleresimi && !editMode && 
                <VleresimiStudentiDetails/>}
                {editMode && (<VleresimiStudentiForm/>)}
            </Grid.Column>
            
            </Grid.Column>
            
        </Grid>
    )
});

