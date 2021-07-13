import { observer } from 'mobx-react-lite'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Button, Grid, Item } from 'semantic-ui-react'
import { LoadingComponent } from '../../../app/layout/LoadingComponent'
import { useStore } from '../../../app/stores/store'
import StudentNavBar from '../StudentNavBar'
import PrezantimiDetails from './PrezantimiDetails'
import PrezantimiForm from './PrezantimiForm'

export default observer(function PrezantimetList () {
    const {prezantimiStore} = useStore();
    const {selectedPrezantimi, editMode} = prezantimiStore;
    const {deletePrezantimi, prezantimetByDate, loading} = prezantimiStore;
    const [target, setTarget] = useState('');
    
    useEffect(()=>{
        prezantimiStore.loadPrezantimet();
    }, [prezantimiStore]); 
    
    if(prezantimiStore.loadingInitial) return <LoadingComponent content='Loading Prezantimet ...'/>
    
    function handleDeletePrezantimi(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deletePrezantimi(id);
    }

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width='4'>
                    <StudentNavBar/>
                </Grid.Column>
                <Grid.Column width='5' style={{marginTop:'5em', marginLeft:"3em"}}>
                    <Button onClick={() => prezantimiStore.openForm()} content='Shto Prezantim' color='green'/>
                    <Item.Group divided>
                        {prezantimetByDate.map((prezantimi) => (
                            <Item key={prezantimi.prezantimiId}>
                            <Item.Content inverted="true">
                            <Item.Header>{prezantimi.prezantimiInfo}</Item.Header>
                            <Item.Meta>{prezantimi.lenda}</Item.Meta>
                            <Item.Meta>{prezantimi.profesori}</Item.Meta>
                            <Item.Meta>{prezantimi.data}</Item.Meta>
                            <Item.Extra>
                                <Button onClick={() => prezantimiStore.selectPrezantimi(prezantimi.prezantimiId)} size='mini' floated='right' content='Shiko Detajet' color='blue'/>
                                <Button name={prezantimi.prezantimiId} loading={loading && target === prezantimi.prezantimiId} onClick={(e) => handleDeletePrezantimi(e, prezantimi.prezantimiId)} size='mini' floated='right' content='Fshij Prezantimin' color="red"/>
                            </Item.Extra>
                            </Item.Content>
                        </Item>
                        ))}
                    </Item.Group>
                </Grid.Column>
                <Grid.Column  width='4' style={{marginTop:'3em'}}>
                    {selectedPrezantimi && !editMode && 
                    <PrezantimiDetails />}
                    {editMode && <PrezantimiForm/>}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
})
