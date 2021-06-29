import axios from 'axios';
import React, { useState, useEffect, Fragment } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import agent from '../../../../app/api/agent';
import { INdihma } from '../../../../app/models/kNdihme';
import StudentMiniNav from '../../EServices/StudentMiniNav';
import { KerkeseNDashboard } from './KerkeseNDashboard';
import { LoadingKn } from './LoadingKn';


export const AppNdihme = () => {

    const [kerkesaN, setKerkesa]=useState<INdihma[]>([]);
    const [selectedKerkesN, setSelectedKerksesN]=useState<INdihma | null>(null)
    const [loading,setLoading]=useState(true);
    const [submitting, setSubmitting] = useState(false);

    const handleSelectKerkesN=(id:string)=>{
        setSelectedKerksesN(kerkesaN.filter(a=>a.id===id)[0])
        setEditMode(false)
    }

    const [editMode,setEditMode]=useState(false);

    const handleOpenCreateForm =()=>{
        setSelectedKerksesN(null);
        setEditMode(true);
    }

    
    const handleCreateKerkesa = (kerkesat:INdihma)=>{
        agent.KerkesaN.createN(kerkesat).then(()=>{
            setKerkesa([...kerkesaN, kerkesat])
            setSelectedKerksesN(kerkesat)
            setEditMode(false)
        })
    }

    const handleEditKerkesa =(kerkesa:INdihma)=>{
        agent.KerkesaN.updateN(kerkesa).then(()=>{
            setKerkesa([...kerkesaN.filter(a=>a.id!==kerkesa.id), kerkesa])
            setSelectedKerksesN(kerkesa)
            setEditMode(false)
        })
    }

    useEffect(()=>{
        agent.KerkesaN.listN()
        .then(response => {
          let kerkesaNd:INdihma [] = [];
          response.forEach((kerkesa)=>{
            kerkesa.dataECaktuar=kerkesa.dataECaktuar.split('.')[0]
            kerkesaNd.push(kerkesa)
          })
            setKerkesa(response)
        }).then(()=>setLoading(false));
    }, []);

    if(loading) return <LoadingKn content='Prisni pak...'/>

    const handleDeleteKerkese = (id:string)=>{
        agent.KerkesaN.deleteN(id).then(()=>{
            setKerkesa([...kerkesaN.filter(a=>a.id!==id)])
        })
    }

    return (
        <Grid>
            <Grid.Row>
            <Grid.Column width='4'>
            <StudentMiniNav/>
            </Grid.Column>
            <Grid.Column width='10' style={{marginTop:'5em', marginLeft:"3em"}}>
            <Button onClick={()=>handleOpenCreateForm()}content='Shto kerkese' color='twitter' />
            
            <KerkeseNDashboard kerkesat={kerkesaN} 
            selectKerkesa={handleSelectKerkesN} 
            selectedKerkeseN={selectedKerkesN!}
            editMode={editMode}
            setEditMode={setEditMode}
            setSelectedKerkses={setSelectedKerksesN}
            createKerkesa={handleCreateKerkesa}
            editKerkese={handleEditKerkesa}
            deleteKerkesa={handleDeleteKerkese}
            />
            </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
