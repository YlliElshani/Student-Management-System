import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { Grid, Table } from 'semantic-ui-react'
import { LoadingComponent } from '../../../app/layout/LoadingComponent'
import { useStore } from '../../../app/stores/store'
import StudentNavBar from '../StudentNavBar'

export default observer(function ListoProvimet () {

    const {provimiStore} = useStore();
    const {provimet} = provimiStore;

    useEffect(()=>{
        provimiStore.loadProvimet();
      }, [provimiStore]); 
    
    if(provimiStore.loadingInitial) return <LoadingComponent content='Loading Provimet ...'/>

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width='4'>
                    <StudentNavBar />
                </Grid.Column>
                <Grid.Column width='11' style={{marginTop:'5em', marginLeft:"3em"}}>
                    <Table size='small' celled striped>
                        <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell colSpan='7'>Provimet</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>Lenda</Table.Cell>
                                <Table.Cell>Profesori</Table.Cell>
                                <Table.Cell>Salla</Table.Cell>
                                <Table.Cell>Ora</Table.Cell>
                                <Table.Cell>Kohezgjatja</Table.Cell>
                            </Table.Row>
                            {provimet.map(p => 
                                <Table.Row key={p.id}>
                                    <Table.Cell>{p.lenda}</Table.Cell>
                                    <Table.Cell>{p.profesori}</Table.Cell>
                                    <Table.Cell>{p.salla}</Table.Cell>
                                    <Table.Cell>{p.oraENisjes}</Table.Cell>
                                    <Table.Cell>{p.koheZgjatja}min</Table.Cell>
                                </Table.Row>
                            )}
                        </Table.Body>
                    </Table>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
})
