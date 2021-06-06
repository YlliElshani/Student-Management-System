import React, { useState, useEffect, Fragment } from 'react';
import { Button, Container} from 'semantic-ui-react';
import axios from 'axios';
import {IArsyeja} from '../../../../app/models/arsyeja';
import { NavBar } from '../../../nav/NavBar';
import DashboardP from '../detailsP/dashboardP';

const App = () => {

    const [arsyetimet, setArsyetimet] = useState<IArsyeja[]>([])

    const [selectedArsyetim, setSelectedArsyetim]=useState<IArsyeja | null>(null);

    const handleSelectArsyetim = (Id:string)=>{
        setSelectedArsyetim(arsyetimet.filter(a => a.id == Id)[0])
        if(selectedArsyetim == null) setSelectedArsyetim(arsyetimet.filter(a => a.id == Id)[0]);
    }

    const handleCreateArsyje =(arsyeja: IArsyeja)=>{
        setArsyetimet([...arsyetimet,arsyeja])
    }

    const handleEditArsyeja=(arsyeja: IArsyeja)=>{
        setArsyetimet([...arsyetimet.filter(a=>a.id!==arsyeja.id), arsyeja])
    }


    
    const handleOpenCreateForm = () =>{
        setSelectedArsyetim(null);
        setEditMode(true);
    }

    const handleDeleteArsyja=(Id:string)=>{
        setArsyetimet([...arsyetimet.filter(a=>a.id!==Id)])
    }

    const [editMode, setEditMode]=useState(false);

    useEffect(()=>{
            axios.get<IArsyeja[]>('https://localhost:5000/api/Arsyeja').then(response => {
                setArsyetimet(response.data)
            });
    },[]);

    return (
      <Fragment>
          <NavBar/>
            <Container>
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
            </Container>
      </Fragment>
    );
}

export default App;
