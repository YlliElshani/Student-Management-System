
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Button, Grid, Item, Segment } from 'semantic-ui-react'
import agent from '../../../app/api/agent';
import { LoadingComponent } from '../../../app/layout/LoadingComponent';
import { ILenda } from '../../../app/models/lenda';
import { NavBar } from '../../nav/NavBar';
import LendaDetails from '../details/LendaDetails';
import LendaForm from '../form/LendaForm';



const LendaDashboard:React.FC = () => {  
    const [lendet, setLendet] = useState<ILenda[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedLenda, setSelectedLenda] = useState<ILenda | null>(null);
    const [editMode, setEditMode] = useState (false);
    const [submitting, setSubmitting] = useState(false);
    const [target, setTarget] = useState('');
    
    const handleSelectLenda = (id: string) => {
        setSelectedLenda(lendet.filter(a => a.lendaId === id)[0])
    }

    const handleOpenCreateForm = () =>{
        setSelectedLenda(null);
        setEditMode(true);
    }

    const handleCreateLenda = (lenda: ILenda) => {
        setSubmitting(true);
        agent.Lendet.create(lenda).then(() => {
        setLendet([...lendet, lenda]);
        setSelectedLenda(lenda);
        setEditMode(false);
        }).then(() => setSubmitting(false))
    }

    const handleEditLenda = (lenda: ILenda) => { 
        setSubmitting(true);
        agent.Lendet.update(lenda).then(() => {
          setLendet([...lendet.filter(e=> e.lendaId !== lenda.lendaId), lenda])
          setSelectedLenda(lenda);
          setEditMode(false);
        }).then(() => setSubmitting(false))
      }
    
    const handleDelete = (event: SyntheticEvent<HTMLButtonElement>, id: string) => {
        setSubmitting(true);
        setTarget(event.currentTarget.name)
        agent.Lendet.delete(id).then(() => {
              setLendet([...lendet.filter(e => e.lendaId !==id)])
        }).then(() => setSubmitting(false))
    }

    useEffect(()=>{
        agent.Lendet.list().then((response) => { 
          let lendet: ILenda[] = []; 
          response.forEach((lenda) => {
            lendet.push(lenda);
          })
          setLendet(lendet);
        }).then(() => setLoading(false));
      }, []); 
    
    if(loading) return <LoadingComponent content='Loading Lendet'/>

        return (
            <Grid>
            <NavBar/>
            <Grid.Column width='6'>
                <Segment>
                    <Button onClick={handleOpenCreateForm} content='Shto Lende' activeClassName="active"/>
                        <Item.Group divided>
                            {lendet.map((lenda) => (
                            <Item key={lenda.lendaId}>
                                <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                                <Item.Content inverted="true">
                                <Item.Header >{lenda.emri}</Item.Header>
                                <Item.Meta>{lenda.klasa}</Item.Meta>
                                <Item.Extra>
                                    <Button onClick={() => handleSelectLenda(lenda.lendaId)} size='mini' floated='right' content='Shiko Detajet'/>
                                    <Button name={lenda.lendaId} loading={target === lenda.lendaId && submitting} onClick={(e) => handleDelete(e, lenda.lendaId)} size='mini' floated='right' content='Fshij Lenden' />
                                </Item.Extra>
                                </Item.Content>
                            </Item>
                            ))}
                        </Item.Group>
                </Segment>
                </Grid.Column>
                <Grid.Column width='6'>
                    {selectedLenda && !editMode && (<LendaDetails setSelectedLenda={setSelectedLenda} lenda={selectedLenda} setEditMode={setEditMode}/>)}
                    {editMode && <LendaForm setEditMode={setEditMode} lenda={selectedLenda!} createLenda={handleCreateLenda} editLenda={handleEditLenda} submitting={submitting}/>}
                </Grid.Column>
            </Grid>
        )
}



export default LendaDashboard;
