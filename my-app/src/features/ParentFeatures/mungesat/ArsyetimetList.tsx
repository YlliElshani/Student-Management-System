import { observer } from 'mobx-react-lite'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Button, Grid, Item } from 'semantic-ui-react'
import { LoadingComponent } from '../../../app/layout/LoadingComponent'
import { useStore } from '../../../app/stores/store'
import ParentNavBar from '../ParentNavBar'
import ArsyejaDetails from './ArsyejaDetails'

import QytetiDetails from './ArsyejaDetails'
import ArsyejaForm from './ArsyejaForm'
import QytetiForm from './ArsyejaForm'

export default observer(function ArsyetimetList () {

    const {arsyejaStore} = useStore();
    const {selectedArsyeja, editMode,arsyet} = arsyejaStore;
    const {deleteArsyeja, loading} = arsyejaStore;

    const [target, setTarget] = useState('');
    
    useEffect(()=>{
        arsyejaStore.loadArsyet();
      }, [arsyejaStore]); 
    
    if(arsyejaStore.loadingInitial) return <LoadingComponent content='Prisni pak...'/>
    
    function handleDeleteArsyeja(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteArsyeja(id);
    }

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width='4'>
                    <ParentNavBar />
                </Grid.Column>
                <Grid.Column width='5' style={{marginTop:'5em', marginLeft:"3em"}}>
                    <Button onClick={() => arsyejaStore.openForm()} content='Shto Arsyen'/>
                    <Item.Group divided>
                        {arsyet.map((arsyeja) => (
                        <Item key={arsyeja.id}>
                            <Item.Content inverted="true">
                            <Item.Header >{arsyeja.arsyejaMungeses}</Item.Header>
                            <Item.Meta>{arsyeja.nrDiteve}</Item.Meta>
                            <Item.Extra>
                                <Button onClick={() => arsyejaStore.selectArsyeja(arsyeja.id)} size='mini' floated='right' content='Shiko Detajet'/>
                                <Button name={arsyeja.id} loading={loading && target === arsyeja.id} onClick={(e) => handleDeleteArsyeja(e, arsyeja.id)} size='mini' floated='right' content='Fshij Arsyjen' />
                            </Item.Extra>
                            </Item.Content>
                        </Item>
                        ))}
                    </Item.Group>
                </Grid.Column>
                <Grid.Column  width='4' style={{marginTop:'3em'}}>
                    {selectedArsyeja && !editMode && 
                    <ArsyejaDetails />}
                    {editMode && <ArsyejaForm/>}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
})
