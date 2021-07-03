import { observer } from 'mobx-react-lite'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Button, Grid, Item } from 'semantic-ui-react'
import { LoadingComponent } from '../../app/layout/LoadingComponent'
import { useStore } from '../../app/stores/store'
import AdminNavBar from '../administrator/AdminNavBar'
import PeriodaDetails from './PeriodaDetails'
import PeriodaForm from './PeriodaForm'

export default observer(function PeriodatList () {

    const {periodaStore} = useStore();
    const {selectedPerioda, editMode} = periodaStore;
    const {deletePerioda, periodatByEmri, loading} = periodaStore;

    const [target, setTarget] = useState('');
    
    useEffect(()=>{
        periodaStore.loadPeriodat();
      }, [periodaStore]); 
    
    if(periodaStore.loadingInitial) return <LoadingComponent content='Loading Periodat'/>
    
    function handleDeletePerioda(e: SyntheticEvent<HTMLButtonElement>, periodaId: string) {
        setTarget(e.currentTarget.name);
        deletePerioda(periodaId);
    }

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width='4'>
                    <AdminNavBar />
                </Grid.Column>
                <Grid.Column width='5' style={{marginTop:'5em', marginLeft:"3em" }}>
                    <Button color='blue' onClick={() => periodaStore.openForm()} content='Shto Perioden'/>
                    <Item.Group divided>
                        {periodatByEmri.map((perioda) => (
                        <Item key={perioda.periodaId}>
                            <Item.Content inverted="true">
                            <Item.Header >{perioda.emri}</Item.Header>
                            <Item.Meta>Data e Fillimit: {perioda.fillimi}</Item.Meta>
                            <Item.Meta>Data e Mbarimit: {perioda.mbarimi}</Item.Meta>
                            <Item.Extra>
                                <Button onClick={() => periodaStore.selectPerioda(perioda.periodaId)} size='mini' floated='right' content='Shiko Detajet' color='green'/>
                                <Button name={perioda.periodaId} loading={loading && target === perioda.periodaId} onClick={(e) => handleDeletePerioda(e, perioda.periodaId)} size='mini' floated='right' color='red' content='Fshij Perioden' />
                            </Item.Extra>
                            </Item.Content>
                        </Item>
                        ))}
                    </Item.Group>
                </Grid.Column>
                <Grid.Column  wperiodaIdth='4' style={{marginTop:'3em'}}>
                    {selectedPerioda && !editMode && 
                    <PeriodaDetails />}
                    {editMode && <PeriodaForm/>}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
})


