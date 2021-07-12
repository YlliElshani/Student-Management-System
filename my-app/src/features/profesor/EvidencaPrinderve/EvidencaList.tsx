import { observer } from 'mobx-react-lite'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Button, Grid, Item } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store'
import ProfesorNavBar from '../Profesor-Profili/ProfesorNavBar'
import EvidencaDetails from './EvidencaDetails'
import EvidencaForm from './EvidencaForm'


export default observer(function EvidencaList () {

    const {evidencaStore} = useStore();
    const {selectedEvidenca, editMode,deleteEvidenca,loading,evidencat} = evidencaStore;


    const [target, setTarget] = useState('');
    
    useEffect(()=>{
        evidencaStore.loadEvidencat();
      }, [evidencaStore]);
    
    
    function handleDeleteEvidenca(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteEvidenca(id);
    }


    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width='4'>
                    <ProfesorNavBar />
                </Grid.Column>
                <Grid.Column width='5' style={{marginTop:'5em', marginLeft:"3em"}}>
                    <Button onClick={() => evidencaStore.openForm()} content='Shto evidencen'/>
                    <Item.Group divided>
                        {evidencat.map((ev) => (
                        <Item key={ev.id}>
                            <Item.Content inverted="true">
                            <Item.Header >Rreth evidences: {ev.evidencaInfo}</Item.Header>
                            <h4>Prindi:{ev.displayName}</h4>
                            <h4>Nxenesi:{ev.displayName2}</h4>
                            <Item.Extra> 
                                <Button onClick={() => evidencaStore.selectEvidenca(ev.id)}size='mini' floated='right' content='Shiko Detajet'/>
                                <Button name={ev.id} loading={loading && target === ev.id} onClick={(e) => handleDeleteEvidenca(e, ev.id)} size='mini' floated='right' content='Fshij Evidencen' />
                            </Item.Extra>
                            </Item.Content>
                        </Item>
                        ))}
                    </Item.Group>
                </Grid.Column>
                <Grid.Column  width='4' style={{marginTop:'3em'}}>
                    {selectedEvidenca && !editMode && 
                    <EvidencaDetails />}
                    {editMode && <EvidencaForm/>}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
})
