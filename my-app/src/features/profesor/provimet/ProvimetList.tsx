import { observer } from 'mobx-react-lite'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Button, Grid, Icon, Table } from 'semantic-ui-react'
import { LoadingComponent } from '../../../app/layout/LoadingComponent'
import { useStore } from '../../../app/stores/store'
import ProfesorNavBar from '../Profesor-Profili/ProfesorNavBar'
import ProvimetForm from './ProvimetForm'
import MaterialiForm from './ProvimetForm'

export default observer(function ProvimetList () {

    const {provimiStore, modalStore} = useStore();
    const {deleteProvimi, provimet, loading, openForm} = provimiStore;

    const [target, setTarget] = useState('');
    
    useEffect(()=>{
        provimiStore.loadProvimet();
      }, [provimiStore]); 
    
    if(provimiStore.loadingInitial) return <LoadingComponent content='Loading Provimet ...'/>
    
    function handleDeleteProvimi(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteProvimi(id);
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
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                            {provimet.map(p => 
                                <Table.Row key={p.id}>
                                    <Table.Cell>{p.lenda}</Table.Cell>
                                    <Table.Cell>{p.profesori}</Table.Cell>
                                    <Table.Cell>{p.salla}</Table.Cell>
                                    <Table.Cell>{p.oraENisjes}</Table.Cell>
                                    <Table.Cell>{p.koheZgjatja}min</Table.Cell>
                                    <Table.Cell>
                                        <Button onClick={() => {(openForm(p.id)); modalStore.openModal(<ProvimetForm/>)}}  basic color='blue' size='mini' content='Edit'/>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Button name={p.id} loading={loading && target === p.id} onClick={(e) => handleDeleteProvimi(e, p.id)} size='mini' basic color='red' floated='right' content='Delete'/>
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
