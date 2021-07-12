import { observer } from 'mobx-react-lite'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Button, Grid, Item } from 'semantic-ui-react'
import { LoadingComponent } from '../../../app/layout/LoadingComponent'
import { useStore } from '../../../app/stores/store'
import ProfesorNavBar from '../Profesor-Profili/ProfesorNavBar'
import KerkesNDetails from './KerkesNDetailsView'


export default observer(function KerkesaListView () {

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
                    <ProfesorNavBar />
                </Grid.Column>
                <Grid.Column width='5' style={{marginTop:'5em', marginLeft:"3em"}}>
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
                                <Button onClick={() => kerkesNdihmeStore.selectKerkesa(kerkese.id)} size='mini' floated='right' content='Shiko Detajet'  color='grey'/>
                                <Button name={kerkese.id} loading={loading && target === kerkese.id} onClick={(e) => handleDeleteKerkesa(e, kerkese.id)} size='mini' color='green' floated='right' content='Konfirmo Kërkesën' />
                            </Item.Extra>
                            </Item.Content>
                        </Item> 
                        ))}
                    </Item.Group>
                </Grid.Column>
                <Grid.Column  width='4' style={{marginTop:'3em'}}>
                    {selectedKerkese && !editMode && 
                    <KerkesNDetails />}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
})
