import React,{FormEvent, useState} from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { INjoftimi } from '../../../../app/models/njoftimi'
import {v4 as uuid} from 'uuid'

interface IProps{
    setEditMode: (editMode:boolean)=>void;
    njoftim:INjoftimi;
    createNjoftim:(njoftim:INjoftimi)=>void;
    editNjoftim:(njoftim:INjoftimi)=>void;
}

export const NjoftimeForm:React.FC<IProps> = ({setEditMode,njoftim:InitalFormState,createNjoftim,editNjoftim}) => {

    const initalizeForm = () =>{
    if(InitalFormState){
        return InitalFormState;
    }else{
        return{
            id:'',
            njoftimi:'',
            dataENjoftimit:''
        };
    }
    };

    const [njoftim,setNjoftim]=useState<INjoftimi>(initalizeForm);

    const handleSubmit =()=>{
        if (njoftim.id.length===0) {
        let newNjoftim={
            ...njoftim,
            id:uuid()
            }
            createNjoftim(newNjoftim);
        }else{
            editNjoftim(njoftim);
        }
    }

    const handleInputChange = (event:FormEvent<HTMLTextAreaElement|HTMLInputElement>)=>{
        const{name,value}=event.currentTarget;
        setNjoftim({...njoftim, [name]:value})
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit}>
                <Form.Input onChange={handleInputChange}  placeholder='Data' name='data' type='datetime-local'  value={njoftim.dataENjoftimit}/>
                <Form.TextArea onChange={handleInputChange} placeholder='Njoftimi' name='njoftimi' value={njoftim.njoftimi}/>
                <Button floated='right' positive type='submit' content='Submit'/>
                <Button onClick={()=>setEditMode(false)} floated='right' content='Cancel'/>
            </Form>
        </Segment>
    )
}
