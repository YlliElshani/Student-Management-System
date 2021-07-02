import { observer } from 'mobx-react-lite'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Button, Grid, Item } from 'semantic-ui-react'
import { LoadingComponent } from '../../../app/layout/LoadingComponent'
import { useStore } from '../../../app/stores/store'
import AdminNavBar from '../AdminNavBar'
import SallaDetails from './SallaDetails'
import SallaForm from './SallaForm'

export default observer(function SallatList () {

    const {sallaStore} = useStore();
    const {selectedSalla, editMode} = sallaStore;
    const {deleteSalla, sallatByDate, loading} = sallaStore;

    const [target, setTarget] = useState('');
    
    useEffect(()=>{
        sallaStore.loadSallat();
      }, [sallaStore]); 
    
    if(sallaStore.loadingInitial) return <LoadingComponent content='Loading Sallat ...'/>
    
    function handleDeleteSalla(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteSalla(id);
    }

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width='4'>
                    <AdminNavBar />
                </Grid.Column>
                <Grid.Column width='5' style={{marginTop:'5em', marginLeft:"3em"}}>
                    <Button onClick={() => sallaStore.openForm()} content='Shto Sallën'/>
                    <Item.Group divided>
                        {sallatByDate.map((salla) => (
                        <Item key={salla.sallaId}>
                            <Item.Content inverted="true">
                            <Item.Header >{salla.emri}</Item.Header>
                            <Item.Meta>{salla.kapaciteti}</Item.Meta>
                            <Item.Meta>{salla.statusi}</Item.Meta>
                            <Item.Extra>
                                <Button onClick={() => sallaStore.selectSalla(salla.sallaId)} size='mini' floated='right' content='Shiko Detajet'/>
                                <Button name={salla.sallaId} loading={loading && target === salla.sallaId} onClick={(e) => handleDeleteSalla(e, salla.sallaId)} size='mini' floated='right' content='Fshij Shëtitjen' />
                            </Item.Extra>
                            </Item.Content>
                        </Item>
                        ))}
                    </Item.Group>
                </Grid.Column>
                <Grid.Column  width='4' style={{marginTop:'3em'}}>
                    {selectedSalla && !editMode && 
                    <SallaDetails />}
                    {editMode && <SallaForm/>}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
})
