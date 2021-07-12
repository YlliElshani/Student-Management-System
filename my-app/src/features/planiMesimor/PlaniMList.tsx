import axios from 'axios'
import { observer } from 'mobx-react-lite'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Button, Grid, Item } from 'semantic-ui-react'
import { LoadingComponent } from '../../app/layout/LoadingComponent'
import { ILenda } from '../../app/models/lenda'
import { useStore } from '../../app/stores/store'
import ProfesorNavBar from '../profesor/Profesor-Profili/ProfesorNavBar'
import PlaniMDetails from './PlaniMDetails'
import PlaniMForm from './PlaniMForm'


export default observer(function PlaniMList () {

    const {pMesimorStore} = useStore();
    const {selectedPlaniM, editMode,deletePlaniM,loading,planiM,lendet} = pMesimorStore;
    //@ts-ignore
    const [data, setData]=React.useState<ILenda[]>([] as lendetByEmri);

    const [target, setTarget] = useState('');
    
    useEffect(()=>{
        pMesimorStore.loadPlaniM();
      }, [pMesimorStore]); 

      React.useEffect(()=>{
        axios
        .get(('https://localhost:5000/API/Lendet'))
        .then((res)=>setData(res.data));
    },[])
  
    
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
                            <h4>Kriteri i Suksesit:{planiMesimor.kriteriPlotsimit}</h4>
                            <h4>Emri i Klases:{planiMesimor.emriKl}</h4>
                            <h4>Paralelja:{planiMesimor.emriPar}</h4>
                            <h4>Lenda:{planiMesimor.lenda}</h4>
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
