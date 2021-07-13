import { observer } from 'mobx-react-lite';
import { Grid, Table } from 'semantic-ui-react'
import { useEffect } from 'react';
import { LoadingComponent } from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import VleresimiStudentiDetails from './VleresimiStudentiDetails';
import VleresimiStudentiForm from './VleresimiStudentiForm';
import StudentNavBar from '../StudentNavBar';



export default observer(function VleresimiStudentiDashboard() {
    const {vleresimiStore} = useStore();
    const {selectedVleresimi, editMode, vleresimetByDate,  loading} = vleresimiStore;

      useEffect(()=>{
        vleresimiStore.loadVleresimet();
      }, [vleresimiStore]);


   if (loading) return <LoadingComponent content='Loading Vleresimet' />

    return (
        
        <Grid>
            <Grid.Row>
            <Grid.Column width='4'>
                <StudentNavBar />
                </Grid.Column>
            
            <Grid.Column width={10} style={{marginTop:"5em"}}>   
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
            </Grid.Row>
            
        </Grid>
    )
});

