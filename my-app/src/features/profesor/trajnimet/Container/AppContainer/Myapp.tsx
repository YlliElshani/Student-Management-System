import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Button, Grid, Item, Segment } from 'semantic-ui-react'
import agent from '../../../../../app/api/agent'
import { LoadingComponent } from '../../../../../app/layout/LoadingComponent'
import { ITrajnim } from '../../../../../app/models/trajnim'
import { NavBar } from '../../../../nav/NavBar'
import ProfesorNavBar from '../../../Profesor-Profili/ProfesorNavBar'
import TrajnimDetails from '../DetailsContainer/TrajnimDetails'
import TrajnimForm from '../FormContainer/TrajnimForm'
import './MyAppStyle.css'

const Myapp:React.FC = () => {  
    const [trajnimet, setTrajnimet] = useState<ITrajnim[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedTrajnim, setSelectedTrajnim] = useState<ITrajnim | null>(null);
    const [editMode, setEditMode] = useState (false);
    const [submitting, setSubmitting] = useState(false);
    const [target, setTarget] = useState('');
    
    const handleSelectTrajnim = (id: string) => {
        setSelectedTrajnim(trajnimet.filter(a => a.trajnimId === id)[0])
    }

    const handleOpenCreateForm = () =>{
        setSelectedTrajnim(null);
        setEditMode(true);
    }

    const handleCreateTrajnim = (trajnim: ITrajnim) => {
        setSubmitting(true);
        agent.Trajnimet.create(trajnim).then(() => {
        setTrajnimet([...trajnimet, trajnim]);
        setSelectedTrajnim(trajnim);
        setEditMode(false);
        }).then(() => setSubmitting(false))
    }
    

    const handleEditTrajnim = (trajnim: ITrajnim) => { 
        setSubmitting(true);
        agent.Trajnimet.update(trajnim).then(() => {
          setTrajnimet([...trajnimet.filter(a=> a.trajnimId !== trajnim.trajnimId), trajnim])
          setSelectedTrajnim(trajnim);
          setEditMode(false);
        }).then(() => setSubmitting(false))
      }
    
    
    const handleDelete = (event: SyntheticEvent<HTMLButtonElement>, id: string) => {
        setSubmitting(true);
        setTarget(event.currentTarget.name)
        agent.Trajnimet.delete(id).then(() => {
              setTrajnimet([...trajnimet.filter(a => a.trajnimId !==id)])
        }).then(() => setSubmitting(false))
    }

    useEffect(()=>{
        agent.Trajnimet.list().then((response) => { 
          let trajnimet: ITrajnim[] = []; 
          response.forEach((trajnim) => {
            trajnimet.push(trajnim);
          })
          setTrajnimet(trajnimet);
        }).then(() => setLoading(false));
      }, []); 
    
    if(loading) return <LoadingComponent content='Loading Trajnimet'/>

        return (
            <div>
                <ProfesorNavBar/> 
                <div className='outerdiv'>
                 <Button onClick={handleOpenCreateForm} content='Shto Trajnim'  color='green'/>
            <Grid>
                
       
            <Grid.Column width='6'>
                <Segment>
                 
                        <Item.Group divided>
                            {trajnimet.map((trajnim) => (
                            <Item key={trajnim.trajnimId}>
                                <Item.Content inverted="true">
                                <Item.Header >{trajnim.trajnimEmri} </Item.Header>
                                <br></br>
                                <br></br>
                                <Item > {trajnim.pershkrimi}</Item>
                                <Item.Meta>Kohezgjatja:  {trajnim.numriDiteve}  dite</Item.Meta>
                                <br></br>
                                <Item.Extra>
                                    <Button onClick={() => handleSelectTrajnim(trajnim.trajnimId)}  floated='left' color='blue' content='Shiko Detajet'/>
                                    <Button name={trajnim.trajnimId} loading={target === trajnim.trajnimId && submitting} onClick={(e) => handleDelete(e, trajnim.trajnimId)}   color='red' floated='left' content='Fshij Trajnimin' />
                                </Item.Extra>
                                </Item.Content>
                            </Item>
                            ))}
                        </Item.Group>
                </Segment>
                </Grid.Column>
                <Grid.Column width='6'>
                    {selectedTrajnim && !editMode && (<TrajnimDetails setSelectedTrajnim={setSelectedTrajnim} trajnim={selectedTrajnim} setEditMode={setEditMode}/>)}
                    {editMode && <TrajnimForm setEditMode={setEditMode} trajnim={selectedTrajnim!} createTrajnim={handleCreateTrajnim} editTrajnim={handleEditTrajnim} submitting={submitting}/>}
                </Grid.Column>
            </Grid>
            </div>
            </div>
        )
}


export default Myapp;
