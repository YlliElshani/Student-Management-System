import { observer } from 'mobx-react-lite'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Button, Grid, Icon, Table } from 'semantic-ui-react'
import { LoadingComponent } from '../../../app/layout/LoadingComponent'
import { useStore } from '../../../app/stores/store'
import ProfesorNavBar from '../Profesor-Profili/ProfesorNavBar'
import MaterialiForm from './MaterialiForm'

export default observer(function MaterialetList () {

    const {materialiStore, modalStore} = useStore();
    const {deleteMateriali, materialet, loading, openForm} = materialiStore;

    const [target, setTarget] = useState('');
    
    useEffect(()=>{
        materialiStore.loadMaterialet();
      }, [materialiStore]); 
    
    if(materialiStore.loadingInitial) return <LoadingComponent content='Loading Materialet ...'/>
    
    function handleDeleteMateriali(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteMateriali(id);
    }
    

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width='4'>
                    <ProfesorNavBar />
                </Grid.Column>
                <Grid.Column width='11' style={{marginTop:'5em', marginLeft:"3em"}}>
                    <Button positive size='mini' onClick={() => modalStore.openModal(<MaterialiForm/>)} content='Add'/>
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
                                    <Table.Cell width='2'><a href={m.fileDrop} target="_blank">{m.fileDrop}</a></Table.Cell>
                                    <Table.Cell>{m.titulli}</Table.Cell>
                                    <Table.Cell>{m.lenda}</Table.Cell>
                                    <Table.Cell>{m.perioda}</Table.Cell>
                                    <Table.Cell>{m.pershkrimi}</Table.Cell>
                                    <Table.Cell>
                                        <Button onClick={() => {(openForm(m.id)); modalStore.openModal(<MaterialiForm/>)}}  basic color='blue' size='mini' content='Edit'/>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Button name={m.id} loading={loading && target === m.id} onClick={(e) => handleDeleteMateriali(e, m.id)} size='mini' basic color='red' floated='right' content='Delete'/>
                                    </Table.Cell>
                                </Table.Row>
                            )}
                        </Table.Body>
                    </Table>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
})
