import { observer } from 'mobx-react-lite'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Button, Grid, Item } from 'semantic-ui-react'
import { LoadingComponent } from '../../../app/layout/LoadingComponent'
import { useStore } from '../../../app/stores/store'
import AdminNavBar from '../../administrator/AdminNavBar'
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
                    <AdminNavBar />
                </Grid.Column>
                <Grid.Column width='5' style={{marginTop:'5em', marginLeft:"3em"}}>
                    <Button onClick={() => kerkesNdihmeStore.openForm()} content='Shto Arsyen'/>
                    <Item.Group divided>
                        {kerkesat.map((kerkese) => (
                        <Item key={kerkese.id}>
                            <Item.Content inverted="true">
                            <Item.Header >{kerkese.kerkesaInfo}</Item.Header>
                            <Item.Meta>{kerkese.dataECaktuar}</Item.Meta>
                            <Item.Extra>
                                <Button onClick={() => kerkesNdihmeStore.selectKerkesa(kerkese.id)} size='mini' floated='right' content='Shiko Detajet'/>
                                <Button name={kerkese.id} loading={loading && target === kerkese.id} onClick={(e) => handleDeleteKerkesa(e, kerkese.id)} size='mini' floated='right' content='Fshij Arsyjen' />
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
