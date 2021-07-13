import { observer } from 'mobx-react-lite'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Button, Grid, Item } from 'semantic-ui-react'
import { LoadingComponent } from '../../../app/layout/LoadingComponent'
import { useStore } from '../../../app/stores/store'
import StudentNavBar from '../StudentNavBar'
import KerkeseNForm from './KerkeseNForm'
import KerkesNDetails from './KerkesNDetails'


export default observer(function KerkesaList () {

    const {kerkesNdihmeStore} = useStore();
    const {selectedKerkese, editMode,kerkesat} = kerkesNdihmeStore;
    const {deleteKerkesa, loading} = kerkesNdihmeStore;

    const [target, setTarget] = useState('');
    
    useEffect(()=>{
        kerkesNdihmeStore.loadKerkesat();
      }, [kerkesNdihmeStore]); 
    
    if(kerkesNdihmeStore.loadingInitial) return <LoadingComponent content='Prisni pak...'/>
    
    function handleDeleteKerkesa(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteKerkesa(id);
    }

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width='4'>
                    <StudentNavBar />
                </Grid.Column>
                <Grid.Column width='5' style={{marginTop:'5em', marginLeft:"3em"}}>
                    <Button onClick={() => kerkesNdihmeStore.openForm()} content='Shto Kërkesë' color='green'/>
                    <Item.Group divided>
                        {kerkesat.map((kerkese) => (
                        <Item key={kerkese.id}>
                            <Item.Content inverted="true">
                            <h3>Info:</h3>
                            <Item.Header >{kerkese.kerkesaInfo}</Item.Header>
                            <br/>
                            <br/>
                            Data E Caktuar:
                            <Item.Meta>{kerkese.dataECaktuar}</Item.Meta>
                            <br/>
                            Profesori:
                            <Item.Meta>{kerkese.displayName}</Item.Meta>
                            <br/>
                            Lenda:
                            <Item.Meta>{kerkese.emri}</Item.Meta>
                            <Item.Extra>
                                <Button onClick={() => kerkesNdihmeStore.selectKerkesa(kerkese.id)} size='mini' floated='right' content='Shiko Detajet'  color='youtube'/>
                                <Button name={kerkese.id} loading={loading && target === kerkese.id} onClick={(e) => handleDeleteKerkesa(e, kerkese.id)} size='mini' floated='right' content='Fshij Kërkesën' />
                            </Item.Extra>
                            </Item.Content>
                        </Item> 
                        ))}
                    </Item.Group>
                </Grid.Column>
                <Grid.Column  width='4' style={{marginTop:'3em'}}>
                    {selectedKerkese && !editMode && 
                    <KerkesNDetails />}
                    {editMode && <KerkeseNForm/>}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
})
