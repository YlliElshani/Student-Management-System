import React, {FormEvent, useState} from 'react'
import { Button, Dropdown, Form, Grid, Input, Label, Radio, Segment, TextArea } from 'semantic-ui-react'
import { IArsyeja } from '../../../../app/models/arsyeja';
import './pStyle.css';
import {v4 as uuid} from 'uuid';

interface IProps{
    setEditMode:(editMode: boolean)=>void;
    arsyetim:IArsyeja
    createArsyeja:(arsyetim:IArsyeja)=>void;
    editArsyeja:(arsyetim:IArsyeja)=>void;
}

 const ArsyetoMungesen:React.FC<IProps> = ({setEditMode,arsyetim:InitialFormState,createArsyeja,editArsyeja}) => {

    const InitializeForm = () =>{
        if (InitialFormState) {
            return InitialFormState;
        }else{
            return{
                Id:'',
                ArsyejaMungeses:'',
                nrDiteve:''
            }
        }
    }

    const [arsyetim,setArsyetim]=useState<IArsyeja>(InitializeForm)

    const handleSubmit = () =>{
        if(arsyetim.Id===''){
            let newArsyeja={
                ...arsyetim,
                Id:uuid()
            }
            createArsyeja(newArsyeja);
        }else{
            editArsyeja(arsyetim);
        }
    }

    const handleInputchange = (event:FormEvent<HTMLInputElement| HTMLTextAreaElement>)=>{
        const{name, value}=event.currentTarget;
        setArsyetim({...arsyetim, [name]:value})
    }

    return (
        <div className="ParentDiv">
            <div className="FormArsyetoMungesen">
                <Form onSubmit={handleSubmit}>
                    <Form.Input onChange={handleInputchange} name='nrDitve' placeholder='Numri i diteve' value={arsyetim.nrDiteve}/>
                    <Form.Input onChange={handleInputchange} name='arsyja' placeholder="Arsyeja e Mungeses" value={arsyetim.ArsyejaMungeses}/>
                        <Button className="btn">Dergo</Button>
                        <Button onClick={()=>setEditMode(false)} className="btn">Anulo</Button>
                </Form>
            </div>
        </div>
    )
}

export default ArsyetoMungesen;
