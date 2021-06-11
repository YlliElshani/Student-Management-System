import axios from 'axios';
import React, { useState, useEffect, Fragment } from 'react';
import { Button, Container, List } from 'semantic-ui-react';
import { INdihma } from '../../../../app/models/kNdihme';
import { StudentNavBar } from '../../StudentNavBar';
import { KerkeseNDashboard } from './KerkeseNDashboard';


export const AppNdihme = () => {

    const [kerkesaN, setKerkesa]=useState<INdihma[]>([]);
    const [selectedKerkesN, setSelectedKerksesN]=useState<INdihma | null>(null)

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
        setKerkesa([...kerkesaN, kerkesat])
        setSelectedKerksesN(kerkesat)
        setEditMode(false)
    }

    const handleEditKerkesa =(kerkesa:INdihma)=>{
        setKerkesa([...kerkesaN.filter(a=>a.id!==kerkesa.id), kerkesa])
        setSelectedKerksesN(kerkesa)
        setEditMode(false)
    }

    useEffect(()=>{
        axios.get<INdihma[]>('https://localhost:5000/api/KerkesaN').then(response=>{
            let kerkesa:INdihma [] = [];
            response.data.forEach(kerkesa=>{
                kerkesa.dataECaktuar = kerkesa.dataECaktuar.split('.')[0]
                kerkesaN.push(kerkesa)
            })
            setKerkesa(kerkesaN)
        })
    },[])

    const handleDeleteKerkese = (id:string)=>{
        setKerkesa([...kerkesaN.filter(a=>a.id!==id)])
    }

    return (
        <div>
            <StudentNavBar/>
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
        </div>
    )
}
