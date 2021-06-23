import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Button, Container, Grid, Item, Segment } from 'semantic-ui-react'
import agent from '../../../app/api/agent'
import { LoadingComponent } from '../../../app/layout/LoadingComponent'
import { IPrezantimi } from '../../../app/models/prezantimi'
import { NavBar } from '../../nav/NavBar'
import { StudentNavBar } from '../StudentNavBar'
import { StudentMiniNav } from '../EServices/StudentMiniNav';
import PrezantimiDetails from './PrezantimiDetails'
import PrezantimiForm from './PrezantimiForm'

export const PrezantimetList:React.FC = () => {
    const [prezantimet, setPrezantimet] = useState<IPrezantimi[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedPrezantimi, setSelectedPrezantimi] = useState<IPrezantimi | null>(null);
    const [editMode, setEditMode] = useState (false);
    const [submitting, setSubmitting] = useState(false);
    const [target, setTarget] = useState('');
    
    const handleSelectPrezantimi = (id: string) => {
        setSelectedPrezantimi(prezantimet.filter(a => a.prezantimiId === id)[0])
    }

    const handleOpenCreateForm = () =>{
        setSelectedPrezantimi(null);
        setEditMode(true);
    }

    const handleCreatPrezantimi = (prezantimi: IPrezantimi) => {
        setSubmitting(true);
        agent.Prezantimet.createPrezantimi(prezantimi).then(() => {
        setPrezantimet([...prezantimet, prezantimi]);
        setSelectedPrezantimi(prezantimi);
        setEditMode(false);
        }).then(() => setSubmitting(false))
    }

    const handleEditPrezantimi = (prezantimi: IPrezantimi) => { 
        setSubmitting(true);
        agent.Prezantimet.updatePrezantimi(prezantimi).then(() => {
          setPrezantimet([...prezantimet.filter(a=> a.prezantimiId !== prezantimi.prezantimiId), prezantimi])
          setSelectedPrezantimi(prezantimi);
          setEditMode(false);
        }).then(() => setSubmitting(false))
      }
    
    const handleDeletePrezantimi = (event: SyntheticEvent<HTMLButtonElement>, id: string) => {
        setSubmitting(true);
        setTarget(event.currentTarget.name)
        agent.Prezantimet.deletePrezantimi(id).then(() => {
              setPrezantimet([...prezantimet.filter(a => a.prezantimiId !==id)])
        }).then(() => setSubmitting(false))
    }

    useEffect(()=>{
        agent.Prezantimet.prezantimetList().then((response) => { 
          let prezantimet: IPrezantimi[] = []; 
          response.forEach((prezantimi) => {
            prezantimet.push(prezantimi);
          })
          setPrezantimet(prezantimet);
        }).then(() => setLoading(false));
      }, []); 
    
    if(loading) return <LoadingComponent content='Ju lutem prisni pak!'/>
    
    return (
        <Container>
            <NavBar/>
            <StudentNavBar />
            <StudentMiniNav />
            <Grid>
                <Grid.Column width='8'>
                    <Button onClick={handleOpenCreateForm} content='Shto Prezantimin' color='twitter'/>
                    <Segment>
                        <Item.Group divided>
                            {prezantimet.map((prezantimi) => (
                            <Item key={prezantimi.prezantimiId}>
                                <Item.Content inverted="true">
                                    <Item.Header >{prezantimi.prezantimiInfo}</Item.Header>
                                    <Item.Meta>{prezantimi.data}</Item.Meta>
                                    <Item.Meta>{prezantimi.ora}</Item.Meta>
                                    <Item.Extra>
                                        <Button onClick={() => handleSelectPrezantimi(prezantimi.prezantimiId)} size='mini' floated='right' content='Detajet' color='vk'/>
                                        <Button name={prezantimi.prezantimiId} loading={target === prezantimi.prezantimiId && submitting} onClick={(e) => handleDeletePrezantimi(e, prezantimi.prezantimiId)} size='mini' floated='right' content='Fshij Prezantimin' color='youtube' />
                                    </Item.Extra>
                                </Item.Content>
                            </Item>
                            ))}
                        </Item.Group>
                    </Segment>
                </Grid.Column>
                <Grid.Column width='6'>
                    {selectedPrezantimi && !editMode && (<PrezantimiDetails setSelectedPrezantimi={setSelectedPrezantimi} prezantimi={selectedPrezantimi} setEditMode={setEditMode}/>)}
                    {editMode && <PrezantimiForm key={selectedPrezantimi && selectedPrezantimi.prezantimiId || 0} setEditMode={setEditMode} prezantimi={selectedPrezantimi!} createPrezantimi={handleCreatPrezantimi} editPrezantimi={handleEditPrezantimi} submitting={submitting}/>}
                </Grid.Column>
            </Grid>
        </Container>
    )
}
