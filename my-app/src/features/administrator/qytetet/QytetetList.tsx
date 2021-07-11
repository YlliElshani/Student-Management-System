import { observer } from 'mobx-react-lite'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Button, Grid, Item } from 'semantic-ui-react'
import { LoadingComponent } from '../../../app/layout/LoadingComponent'
import { useStore } from '../../../app/stores/store'
import AdminNavBar from '../AdminNavBar'

import QytetiDetails from './QytetiDetails'
import QytetiForm from './QytetiForm'

export default observer(function QytetetList () {

    const {qytetiStore} = useStore();
    const {selectedQyteti, editMode} = qytetiStore;
    const {deleteQyteti, qytetetByAlphabet, loading} = qytetiStore;

    const [target, setTarget] = useState('');
    
    useEffect(()=>{
        qytetiStore.loadQytetet();
      }, [qytetiStore]); 
    
    if(qytetiStore.loadingInitial) return <LoadingComponent content='Loading Qytetet'/>
    
    function handleDeleteQyteti(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteQyteti(id);
    }

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width='4'>
                    <AdminNavBar />
                </Grid.Column>
                <Grid.Column width='5' style={{marginTop:'2em', marginLeft:"3em"}}>
                    <Button onClick={() => qytetiStore.openForm()} content='Shto Qytetin' color="green"/>
                    <Item.Group divided>
                        {qytetetByAlphabet.map((qyteti) => (
                        <Item key={qyteti.id}>
                            <Item.Content inverted="true">
                            <Item.Header >{qyteti.emri}</Item.Header>
                            <Item.Meta>{qyteti.shteti}</Item.Meta>
                            <Item.Extra>
                                <Button onClick={() => qytetiStore.selectQyteti(qyteti.id)} size='mini' floated='right' content='Shiko Detajet' color="twitter"/>
                                <Button name={qyteti.id} loading={loading && target === qyteti.id} onClick={(e) => handleDeleteQyteti(e, qyteti.id)} size='mini' floated='right' content='Fshij Qytetin' color="red" />
                            </Item.Extra>
                            </Item.Content>
                        </Item>
                        ))}
                    </Item.Group>
                </Grid.Column>
                <Grid.Column  width='4' style={{marginTop:'3em'}}>
                    {selectedQyteti && !editMode && 
                    <QytetiDetails />}
                    {editMode && <QytetiForm/>}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
})
