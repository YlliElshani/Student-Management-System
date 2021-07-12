import { observer } from 'mobx-react-lite'
import React, { useEffect} from 'react'
import { Button, Grid, Item } from 'semantic-ui-react'
import { LoadingComponent } from '../../../app/layout/LoadingComponent'
import { useStore } from '../../../app/stores/store'
import StudentNavBar from '../StudentNavBar'
import TrajnimDetailsS from './TrajnimDetailsS'


export default observer(function TrajnimetListS () {

    const {trajnimStore} = useStore();
    const {selectedTrajnim, editMode, trajnimet} = trajnimStore;

    useEffect(()=>{
        trajnimStore.loadTrajnimet();
      }, [trajnimStore]); 
    
    if(trajnimStore.loadingInitial) return <LoadingComponent content='Loading Trajnimet'/>

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width='4'>
                    <StudentNavBar />
                </Grid.Column>
                <Grid.Column width='5' style={{marginTop:'5em', marginLeft:"3em"}}>
                    <Item.Group divided>
                        {trajnimet.map((trajnim) => (
                        <Item key={trajnim.trajnimId}>
                            <Item.Content inverted="true">
                            <Item.Header >{trajnim.trajnimEmri}</Item.Header>
                            <Item.Meta>{trajnim.pershkrimi}</Item.Meta>
                            <Item.Extra>
                                <Button onClick={() => trajnimStore.selectTrajnim(trajnim.trajnimId)} size='mini' floated='right' color='green' content='Shiko Detajet'/>   
                            </Item.Extra>
                            </Item.Content>
                        </Item>
                        ))}
                    </Item.Group>
                </Grid.Column>
                <Grid.Column  width='4' style={{marginTop:'3em'}}>
                    {selectedTrajnim && !editMode&& 
                    <TrajnimDetailsS />}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
})

