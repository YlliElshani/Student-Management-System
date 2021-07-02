import { observer } from 'mobx-react-lite'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Button, Grid, Item } from 'semantic-ui-react'
import { LoadingComponent } from '../../app/layout/LoadingComponent'
import { IKoheZ } from '../../app/models/kOres'
import KoheZStore from '../../app/stores/koheZStore'
import { useStore } from '../../app/stores/store'
import ProfesorNavBar from '../profesor/Profesor-Profili/ProfesorNavBar'
import KohaZDetails from './KohaZDetails'
import KohaZForm from './KohaZForm'


export default observer(function KohaZList () {

    const {koheZStore} = useStore();
    const {selectedkoheZ, editMode} = koheZStore;
    const {deleteKohaZ, koheZ, loading} = koheZStore;

    const [target, setTarget] = useState('');
    
    useEffect(()=>{
        koheZStore.loadKoheZ();
      }, [koheZStore]); 
    
    if(koheZStore.loadingInitial) return <LoadingComponent content='Prisni pak...'/>
    
    function handleDeleteKohaZ(e: SyntheticEvent<HTMLButtonElement>, Id: string) {
        setTarget(e.currentTarget.name);
        deleteKohaZ(Id);
    }

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width='4'>
                    <ProfesorNavBar />
                </Grid.Column>
                <Grid.Column width='5' style={{marginTop:'5em', marginLeft:"3em"}}>
                    <Button onClick={() => koheZStore.openForm()} content='Shto kohen e nje ore mesimore'/>
                    <Item.Group divided>
                        {koheZ.map((koheZgjatja) => (
                        <Item key={koheZgjatja.id}>
                            <Item.Content inverted="true">
                            <Item.Header >Ora ne minuta: {koheZgjatja.kohaMin}</Item.Header>
                            <h4>Ora e nisjes: {koheZgjatja.oraNisjes}</h4>
                            <h4>Ora mbaron ne: {koheZgjatja.oraNisjes+":"+koheZgjatja.kohaMin}</h4>
                            <Item.Extra> 
                                <Button onClick={() => koheZStore.selectKohaZ(koheZgjatja.id)}size='mini' floated='right' content='Shiko Detajet'/>
                                <Button name={koheZgjatja.id} loading={loading && target === koheZgjatja.id} onClick={(e) => handleDeleteKohaZ(e, koheZgjatja.id)} size='mini' floated='right' content='Fshij Oren' />
                            </Item.Extra>
                            </Item.Content>
                        </Item>
                        ))}
                    </Item.Group>
                </Grid.Column>
                <Grid.Column  width='4' style={{marginTop:'3em'}}>
                    {selectedkoheZ && !editMode && 
                    <KohaZDetails />}
                    {editMode && <KohaZForm/>}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
})
