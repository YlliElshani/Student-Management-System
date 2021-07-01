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
    const {selectedPlani, editMode} = pMesimorStore;
    const {deletePlani, planetM, loading} = pMesimorStore;

    const [target, setTarget] = useState('');
    
    useEffect(()=>{
        pMesimorStore.loadPlaniM();
      }, [pMesimorStore]); 
    
    if(pMesimorStore.loadingInitial) return <LoadingComponent content='Prisni pak...'/>
    
    function handleDeletePlani(e: SyntheticEvent<HTMLButtonElement>, Id: string) {
        setTarget(e.currentTarget.name);
        deletePlani(Id);
    }

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width='4'>
                    <ProfesorNavBar />
                </Grid.Column>
                <Grid.Column width='5' style={{marginTop:'5em', marginLeft:"3em"}}>
                    <Button onClick={() => pMesimorStore.openForm()} content='Shto Planin Mesimor'/>
                    <Item.Group divided>
                        {planetM.map((planiM) => (
                        <Item key={planiM.id}>
                            <Item.Content inverted="true">
                            <Item.Header >{planiM.planiInfo}</Item.Header>
                            <Item.Meta>{planiM.kriteriSuksesit}</Item.Meta>
                            <Item.Meta>{planiM.lenda}</Item.Meta>
                            <Item.Meta>{planiM.klasa}</Item.Meta>
                            <Item.Meta>{planiM.dataShenimit}</Item.Meta>
                            <Item.Extra>
                                <Button onClick={() => pMesimorStore.selectPlani(planiM.id)} size='mini' floated='right' content='Shiko Detajet'/>
                                <Button name={planiM.id} loading={loading && target === planiM.id} onClick={(e) => handleDeletePlani(e, planiM.id)} size='mini' floated='right' content='Fshij Planin' />
                            </Item.Extra>
                            </Item.Content>
                        </Item>
                        ))}
                    </Item.Group>
                </Grid.Column>
                <Grid.Column  width='4' style={{marginTop:'3em'}}>
                    {selectedPlani && !editMode && 
                    <PlaniMDetails />}
                    {editMode && <PlaniMForm/>}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
})
