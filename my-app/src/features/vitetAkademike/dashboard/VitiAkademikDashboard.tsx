import { observer } from 'mobx-react-lite';
import { Button, Grid, Table } from 'semantic-ui-react'
import { SyntheticEvent, useEffect, useState } from 'react';
import { useStore } from '../../../app/stores/store';
import { LoadingComponent } from '../../../app/layout/LoadingComponent';
import AdminNavBar from '../../administrator/AdminNavBar';
import VitiAkademikDetails from '../details/VitiAkademikDetails';
import VitiAkademikForm from '../form/VitiAkademikForm';



export default observer(function VitiAkademikDashboard() {
    const {vitiAkademikStore} = useStore();
    const [target, setTarget] = useState('');
    const {selectedVitiAkademik, editMode, vitetAkademikeByEmri, selectVitiAkademik,  loading, deleteVitiAkademik} = vitiAkademikStore;
    function handleVitiAkademikDelete(e: SyntheticEvent<HTMLButtonElement>, id:string) {
        setTarget(e.currentTarget.name);
        deleteVitiAkademik(id);
      }

      useEffect(()=>{
        vitiAkademikStore.loadVitetAkadmike();
      }, [vitiAkademikStore]);


   if (loading) return <LoadingComponent content='Loading Vitet Akademike' />

    return (
        
        <Grid style={{marginTop:'50px'}}>
            <Grid.Column width='4'>
                    <AdminNavBar />
                </Grid.Column>
            
            <Grid.Column width={10}>   
                <Table singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Viti Akademik</Table.HeaderCell>
                            <Table.HeaderCell>Edit</Table.HeaderCell>
                            <Table.HeaderCell>Delete</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    {vitetAkademikeByEmri.map(vitiAkademik => (
                        <Table.Body key={vitiAkademik.vitiAkademikId}>
                            <Table.Row>
                                <Table.Cell>{vitiAkademik.vitiAk}</Table.Cell>
                                <Table.Cell><Button onClick={() => selectVitiAkademik(vitiAkademik.vitiAkademikId)} size='mini'  content='Edit' inverted color='olive' /></Table.Cell>
                                <Table.Cell><Button inverted color='red' name={vitiAkademik.vitiAk} loading={target === vitiAkademik.vitiAkademikId && loading} onClick={(e) => handleVitiAkademikDelete(e, vitiAkademik.vitiAkademikId)} size='mini'  content='Fshij Vitet' /></Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    ))}
                </Table>
                <Button  class='ui button' onClick={() => vitiAkademikStore.openForm()} content='Shto Vitin'/>
                <Grid.Column width='5'>
                {selectedVitiAkademik && !editMode && 
                <VitiAkademikDetails/>}
                {editMode && (<VitiAkademikForm/>)}
            </Grid.Column>
            
            </Grid.Column>
            
        </Grid>
    )
});

