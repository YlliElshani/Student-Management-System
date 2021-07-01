import { observer } from 'mobx-react-lite'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Button, Grid, Item } from 'semantic-ui-react'
import { LoadingComponent } from '../../../app/layout/LoadingComponent'
import { useStore } from '../../../app/stores/store'
import ProfesorNavBar from '../Profesor-Profili/ProfesorNavBar'



import DetyraDetails from './DetyraDetails'
import DetyraForm from './DetyraForm'


export default observer(function DetyratList () {

    const {detyraStore} = useStore();
    const {selectedDetyra, editMode} = detyraStore;
    const {deleteDetyra, detyrat, loading} = detyraStore;

    const [target, setTarget] = useState('');
    
    useEffect(()=>{
        detyraStore.loadDetyrat();
      }, [detyraStore]); 
    
    if(detyraStore.loadingInitial) return <LoadingComponent content='Loading Detyrat'/>
    
    function handleDeleteDetyra(e: SyntheticEvent<HTMLButtonElement>, detyraId: string) {
        setTarget(e.currentTarget.name);
        deleteDetyra(detyraId);
    }

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width='4'>
                    <ProfesorNavBar />
                </Grid.Column>
                <Grid.Column width='5' style={{marginTop:'5em', marginLeft:"3em"}}>
                    <Button onClick={() => detyraStore.openForm()} content='Shto Detyren'/>
                    <Item.Group divided>
                        {detyrat.map((detyra) => (
                        <Item key={detyra.detyraId}>
                            <Item.Content inverted="true">
                            <Item.Header >{detyra.detyraEmri}</Item.Header>
                            <Item.Meta>{detyra.pershkrimi}</Item.Meta>
                            <Item.Extra>
                                <Button onClick={() => detyraStore.selectDetyra(detyra.detyraId)} size='mini' floated='right' content='Shiko Detajet'/>
                                <Button name={detyra.detyraId} loading={loading && target === detyra.detyraId} onClick={(e) => handleDeleteDetyra(e, detyra.detyraId)} size='mini' floated='right' content='Fshij Detyren' />
                            </Item.Extra>
                            </Item.Content>
                        </Item>
                        ))}
                    </Item.Group>
                </Grid.Column>
                <Grid.Column  wdetyraIdth='4' style={{marginTop:'3em'}}>
                    {selectedDetyra && !editMode && 
                    <DetyraDetails />}
                    {editMode && <DetyraForm/>}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
})
