import { observer } from 'mobx-react-lite'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Button, Grid, Item } from 'semantic-ui-react'
import { LoadingComponent } from '../../app/layout/LoadingComponent'
import { useStore } from '../../app/stores/store'
import ProfesorNavBar from '../profesor/Profesor-Profili/ProfesorNavBar'
import PlaniMDetails from './PlaniMDetails'
import PlaniMForm from './PlaniMForm'


export default observer(function PlaniMList () {

    const {pMesimorStore} = useStore();
    const {selectedPlaniM, editMode,deletePlaniM,loading,planiM} = pMesimorStore;

    const [target, setTarget] = useState('');
    
    useEffect(()=>{
        pMesimorStore.loadPlaniM();
      }, [pMesimorStore]); 
    
    if(pMesimorStore.loadingInitial) return <LoadingComponent content='Prisni pak...'/>
    
    function handleDeletePlaniM(e: SyntheticEvent<HTMLButtonElement>, Id: string) {
        setTarget(e.currentTarget.name);
        deletePlaniM(Id);
    }

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width='4'>
                    <ProfesorNavBar />
                </Grid.Column>
                <Grid.Column width='5' style={{marginTop:'5em', marginLeft:"3em"}}>
                    <Button onClick={() => pMesimorStore.openForm()} content='Shto planin mesimor per lenden'/>
                    <Item.Group divided>
                        {planiM.map((planiMesimor) => (
                        <Item key={planiMesimor.id}>
                            <Item.Content inverted="true">
                            <Item.Header >Plani Mesimor: {planiMesimor.planiInfo}</Item.Header>
                            <h4>Kriteri i Suksesit:</h4>
                            <Item.Header>{planiMesimor.kriteriPlotsimit}</Item.Header>
                            <Item.Header>{planiMesimor.klasa}</Item.Header>
                            <Item.Header>{planiMesimor.lenda}</Item.Header>
                            <Item.Extra> 
                                <Button onClick={() => pMesimorStore.selectPlaniM(planiMesimor.id)}size='mini' floated='right' content='Shiko Detajet'/>
                                <Button name={planiMesimor.id} loading={loading && target === planiMesimor.id} onClick={(e) => handleDeletePlaniM(e, planiMesimor.id)} size='mini' floated='right' content='Fshij Planin Mesimor' />
                            </Item.Extra>
                            </Item.Content>
                        </Item>
                        ))}
                    </Item.Group>
                </Grid.Column>
                <Grid.Column  width='4' style={{marginTop:'3em'}}>
                    {selectedPlaniM && !editMode && 
                    <PlaniMDetails />}
                    {editMode && <PlaniMForm/>}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
})
