import { observer } from 'mobx-react-lite'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Button, Grid, Item } from 'semantic-ui-react'
import { LoadingComponent } from '../../../app/layout/LoadingComponent'
import { useStore } from '../../../app/stores/store'
import ProfesorNavBar from '../Profesor-Profili/ProfesorNavBar'
import TrajnimDetails from './TrajnimDetails'
import TrajnimForm from './TrajnimForm'

export default observer(function TrajnimetList () {

    const {trajnimStore} = useStore();
    const {selectedTrajnim, editMode} = trajnimStore;
    const {deleteTrajnim, trajnimet, loading} = trajnimStore;

    const [target, setTarget] = useState('');
    
    useEffect(()=>{
        trajnimStore.loadTrajnimet();
      }, [trajnimStore]); 
    
    if(trajnimStore.loadingInitial) return <LoadingComponent content='Loading Trajnimet'/>
    
    function handleDeleteTrajnim(e: SyntheticEvent<HTMLButtonElement>, trajnimId: string) {
        setTarget(e.currentTarget.name);
        deleteTrajnim(trajnimId);
    }

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width='4'>
                    <ProfesorNavBar />
                </Grid.Column>
                <Grid.Column width='5' style={{marginTop:'5em', marginLeft:"3em"}}>
                    <Button onClick={() => trajnimStore.openForm()} content='Shto Trajnimn'/>
                    <Item.Group divided>
                        {trajnimet.map((trajnim) => (
                        <Item key={trajnim.trajnimId}>
                            <Item.Content inverted="true">
                            <Item.Header >{trajnim.trajnimEmri}</Item.Header>
                            <Item.Meta>{trajnim.pershkrimi}</Item.Meta>
                            <Item.Extra>
                                <Button onClick={() => trajnimStore.selectTrajnim(trajnim.trajnimId)} size='mini' floated='right' content='Shiko Detajet'/>
                                <Button name={trajnim.trajnimId} loading={loading && target === trajnim.trajnimId} onClick={(e) => handleDeleteTrajnim(e, trajnim.trajnimId)} size='mini' floated='right' content='Fshij Trajnimn' />
                            </Item.Extra>
                            </Item.Content>
                        </Item>
                        ))}
                    </Item.Group>
                </Grid.Column>
                <Grid.Column  wtrajnimIdth='4' style={{marginTop:'3em'}}>
                    {selectedTrajnim && !editMode && 
                    <TrajnimDetails />}
                    {editMode && <TrajnimForm/>}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
})

