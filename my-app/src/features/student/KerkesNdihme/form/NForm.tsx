import React, { FormEvent } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { INdihma } from '../../../../app/models/kNdihme'
import { useState } from 'react'
import {v4 as uuid} from 'uuid'

interface IProps{
    setEditMode:(editMode:boolean)=>void;
    kerkesa:INdihma
    createKerkesa:(kerkes: INdihma)=>void;
    editKerkese:(kerkes: INdihma)=>void; 
}

export const NForm:React.FC<IProps> = ({setEditMode,kerkesa:initialFormState,createKerkesa,editKerkese}) => {

    const initializeForm=()=>{
        if (initialFormState) {
            return initialFormState
        }else{
            return{
                id:'',
                kerkesaInfo:'',
                dataECaktuar:''
            }
        }
    }

    const [kerkesN, setKerkesa]=useState<INdihma>(initializeForm)

    const handleInputChange = (event:FormEvent<HTMLTextAreaElement|HTMLInputElement>)=>{
        const{name,value}=event.currentTarget;
        setKerkesa({...kerkesN, [name]:value})
    }

    const handleSubmit =()=>{
        if (kerkesN.id.length===0) {
        let newKerkese={
            ...kerkesN,
            id:uuid()
            }
            createKerkesa(newKerkese);
        }else{
            editKerkese(kerkesN);
        }
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit}>
                <Form.Input onChange={handleInputChange} type='datetime-local' name='dataECaktuar' placeholder='Data' value={kerkesN.dataECaktuar}/>
                <Form.TextArea onChange={handleInputChange} rows={3} name='kerkesaInfo' placeholder='Me shume info' value={kerkesN.kerkesaInfo}/>
                <Button floated='right' postive type='submit' content='Dergo' color='green'/>
                <Button onClick={()=>setEditMode(false)} floated='right'  type='button' content='Anulo'/>
            </Form>
        </Segment>
    )
}
