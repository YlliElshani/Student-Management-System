import React, {FormEvent, useState} from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { IArsyeja } from '../../../../app/models/arsyeja';
import './pStyle.css';
import {v4 as uuid} from 'uuid';

interface IProps{
    setEditMode:(editMode: boolean)=>void;
    arsyetim:IArsyeja
    createArsyeja:(arsyetim:IArsyeja)=>void;
    editArsyeja:(arsyetim:IArsyeja)=>void;
}

 const ArsyetoMungesen:React.FC<IProps> = ({setEditMode,arsyetim:InitializeFormState,createArsyeja,editArsyeja}) => {

    const InitializeForm = () =>{
        if (InitializeFormState) {
            return InitializeFormState;
        }
        else{
            return{
                id:'',
                arsyejaMungeses:'',
                nrDiteve:''
            }
        }
    };

    const handleSubmit = () =>{ 
        alert(arsyetim.id);
        if(arsyetim.id==''){
            let newArsyeja={
                ...arsyetim,
                id:uuid()
            }
            createArsyeja(newArsyeja);
        }else{
            editArsyeja(arsyetim);
        }
    };

    const [arsyetim,setArsyetim]=useState<IArsyeja>(InitializeForm);


    const handleInputChange = (event:FormEvent<HTMLInputElement| HTMLTextAreaElement>)=>{
        const{name, value}=event.currentTarget;
        setArsyetim({...arsyetim, [name]:value});
    }

    // const handleInputChange = (event: ChangeEvent<HTMLInputElement> ) => {
    //     const {name, value} = event.currentTarget;
    //     setArsyetim({...arsyetim, [name]: value});
    // };

    return (
    <Segment clearing>

                <Form onSubmit={handleSubmit}>
                    <Form.Input onChange={handleInputChange}  name='nrDiteve' placeholder='Numri i diteve' value={arsyetim.nrDiteve}/>
                    <Form.TextArea onChange={()=>arsyetim.id} name='arsyejaMungeses' placeholder="Arsyeja e Mungeses" value={arsyetim.arsyejaMungeses}/>
                        <Button className="btn" type="submit">Dergo</Button>
                        <Button onClick={()=>setEditMode(false)} className="btn">Anulo</Button>
                </Form>
    </Segment>
    );
}

export default ArsyetoMungesen;
