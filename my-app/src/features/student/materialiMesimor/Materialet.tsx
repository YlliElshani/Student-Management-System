import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { Grid, Icon, Table} from 'semantic-ui-react'
import { LoadingComponent } from '../../../app/layout/LoadingComponent'
import { useStore } from '../../../app/stores/store'
import StudentNavBar from '../StudentNavBar'

export default observer(function Materialet () {

    const {materialiStore} = useStore();
    const {materialet} = materialiStore;
    
    useEffect(()=>{
        materialiStore.loadMaterialet();
      }, [materialiStore]); 
    
    if(materialiStore.loadingInitial) return <LoadingComponent content='Loading Materialet ...'/>
    

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
                            <Table.HeaderCell colSpan='7'>Materialet</Table.HeaderCell>
                        </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>
                                <Icon name='folder'></Icon>
                                </Table.Cell>
                                <Table.Cell>Emri</Table.Cell>
                                <Table.Cell>Lenda</Table.Cell>
                                <Table.Cell>Perioda</Table.Cell>
                                <Table.Cell>Pershkrimi</Table.Cell>
                            </Table.Row>
                            {materialet.map(m => 
                                <Table.Row key={m.id}>
                                    <Table.Cell width='2'><a href={m.fileDrop} target="_blank" rel="noreferrer noopener">{m.fileDrop}</a></Table.Cell>
                                    <Table.Cell>{m.titulli}</Table.Cell>
                                    <Table.Cell>{m.lenda}</Table.Cell>
                                    <Table.Cell>{m.perioda}</Table.Cell>
                                    <Table.Cell>{m.pershkrimi}</Table.Cell>
                                </Table.Row>
                            )}
                        </Table.Body>
                    </Table>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
})
