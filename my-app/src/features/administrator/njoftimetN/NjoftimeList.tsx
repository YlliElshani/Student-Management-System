import { observer } from 'mobx-react-lite'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Button, Grid, Item } from 'semantic-ui-react'
import { LoadingComponent } from '../../../app/layout/LoadingComponent'
import { useStore } from '../../../app/stores/store'
import AdminNavBar from '../AdminNavBar'

import NjoftimeDetails from './NjoftimeDetails'
import NjoftimeForm from './NjoftimeForm'

export default observer(function NjoftimeList () {

    const {njoftimeStore} = useStore();
    const {selectedNjoftimi, editMode,njoftimet} = njoftimeStore;
    const {deleteNjoftim, loading} = njoftimeStore;

    const [target, setTarget] = useState('');
    
    useEffect(()=>{
        njoftimeStore.loadNjoftimet();
      }, [njoftimeStore]); 
    
    if(njoftimeStore.loadingInitial) return <LoadingComponent content='Prisni pak...'/>
    
    function handleDeleteNjoftimi(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteNjoftim(id);
    }

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width='4'>
                    <AdminNavBar />
                </Grid.Column>
                <Grid.Column width='5' style={{marginTop:'5em', marginLeft:"3em"}}>
                    <Button onClick={() => njoftimeStore.openForm()} content='Shto Njoftimin'/>
                    <Item.Group divided>
                        {njoftimet.map((njoftim) => (
                        <Item key={njoftim.id}>
                            <Item.Content inverted="true">
                            <Item.Header >{njoftim.njoftimi}</Item.Header>
                            <Item.Meta>{njoftim.dataENjoftimit}</Item.Meta>
                            <Item.Extra>
                                <Button onClick={() => njoftimeStore.selectNjoftim(njoftim.id)} size='mini' floated='right' content='Shiko Detajet'/>
                                <Button name={njoftim.id} loading={loading && target === njoftim.id} onClick={(e) => handleDeleteNjoftimi(e, njoftim.id)} size='mini' floated='right' content='Fshij Njoftimin' />
                            </Item.Extra>
                            </Item.Content>
                        </Item>
                        ))}
                    </Item.Group>
                </Grid.Column>
                <Grid.Column  width='4' style={{marginTop:'3em'}}>
                    {selectedNjoftimi && !editMode && 
                    <NjoftimeDetails />}
                    {editMode && <NjoftimeForm/>}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
})
