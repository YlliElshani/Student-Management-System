import React, { useState, useEffect, Fragment } from 'react';
import { Button, Container, Grid} from 'semantic-ui-react';
import {IArsyeja} from '../../../../app/models/arsyeja';
import { NavBar } from '../../../nav/NavBar';
import DashboardP from '../detailsP/dashboardP';
import agent from '../../../../app/api/agent';
import { LoadingP } from './LoadingP';
import ParentNavBar from '../ParentNavBar';

const ParentDashboard = () => {

    const [arsyetimet, setArsyetimet] = useState<IArsyeja[]>([])

    const [selectedArsyetim, setSelectedArsyetim]=useState<IArsyeja | null>(null);
    const [submitting, setSubmitting] = useState(false);
    const [target, setTarget] = useState('');
    const [loading, setLoading] = useState(true);

    const handleSelectArsyetim = (Id:string)=>{
        setSelectedArsyetim(arsyetimet.filter(a => a.id == Id)[0])
        if(selectedArsyetim == null) setSelectedArsyetim(arsyetimet.filter(a => a.id == Id)[0]);
    }

    const handleCreateArsyje =(arsyeja: IArsyeja)=>{
        agent.Arsyetimet.create(arsyeja).then(()=>{
         setArsyetimet([...arsyetimet,arsyeja])
        })
    }

    const handleEditArsyeja=(arsyeja: IArsyeja)=>{
        agent.Arsyetimet.update(arsyeja).then(()=>{
            setArsyetimet([...arsyetimet.filter(a=>a.id!==arsyeja.id), arsyeja])
        })
    }
    
    const handleOpenCreateForm = () =>{
        setSelectedArsyetim(null);
        setEditMode(true);
    }

    const handleDeleteArsyja=(Id:string)=>{
        agent.Arsyetimet.delete(Id).then(()=>{
            setArsyetimet([...arsyetimet.filter(a=>a.id!==Id)])
        })
    }

    const [editMode, setEditMode]=useState(false);

      
    useEffect(()=>{
        agent.Arsyetimet.list()
        .then(response => {
          let arsyetim:IArsyeja [] = [];
          response.forEach((arsyetimet)=>{
            arsyetim.push(arsyetimet)
          })
            setArsyetimet(response)
        }).then(()=>setLoading(false));
    }, []);

    if (loading) return <LoadingP content={'Prisni pak...'}/>
        
    
    

    return (
      <Fragment>
            <Grid.Row >
                <Grid.Column width='4'>
                    <ParentNavBar/>
                </Grid.Column>
          <Grid.Column width='10' style={{marginTop:'-40%', marginLeft:"25%"}}>

            <Button onClick={handleOpenCreateForm} content='Shto Arsyetim' activeClassName="active"/>
                <DashboardP
                 openCreateForm={handleOpenCreateForm}
                 arsyetimet={arsyetimet}
                 selectArsyetim={handleSelectArsyetim} 
                 selectedArsyetim={selectedArsyetim!}
                 editMode={editMode}
                 setEditMode={setEditMode}
                 setSelectedArsyetim={setSelectedArsyetim}
                 createArsyeja={handleCreateArsyje}
                 editArsyeja={handleEditArsyeja}
                 deleteActivity={handleDeleteArsyja}
                />
            </Grid.Column>
            </Grid.Row>
      </Fragment>
    );
}

export default ParentDashboard;
