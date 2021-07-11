import axios from 'axios';
import { observer } from 'mobx-react-lite';
import React, {ChangeEvent, useState} from 'react'
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import { validate } from 'uuid';
import { ILenda } from '../../../app/models/lenda';
import { useStore } from '../../../app/stores/store';


export default observer(function PlaniMform() {
    const {pMesimorStore,lendaStore} = useStore();
    const {selectedPlaniM, closeForm, createPlaniM, updatePlaniM, loading} = pMesimorStore;
    const{lendetByEmri}=lendaStore
    //@ts-ignore
    const [data, setData]=React.useState<ILenda[]>([] as lendetByEmri);
    //@ts-ignore
    const [selectedData,setSelectedData] = React.useState<ILenda>({} as lendetByEmri);

    React.useEffect(()=>{
        axios
        .get(('https://localhost:5000/API/Lendet'))
        .then((res)=>setData(res.data));
    },[])
  

    const initialState = selectedPlaniM ?? {
        id: '',
        planiInfo:'',
        lendaId:'',
        kriteriPlotsimit:''
    }
    
    const [selected, setSelected] = React.useState("");

    const [planiM, setPlaniM] = useState(initialState);

    function handleSubmit () { 
        planiM.id ? updatePlaniM(planiM) : createPlaniM(planiM);
     }
 
    function handleInputChange (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.currentTarget;
        setPlaniM({...planiM, [name]: value});
    }

    function changeSelectOptionHandler(event: { target: { value: any; name?: any; }; }) {
        setSelected(event.target.value);
        const { name, value } = event.target;
        setPlaniM({ ...planiM, [name]: value });
      }

      
    
    return (
    <Segment clearing>
        <Grid>
        <Form validate={validate} onSubmit={handleSubmit} autoComplete='off' style={{padding:'20px', width:'100%'}}>
            <Form.TextArea required onChange={handleInputChange}  name='planiInfo' placeholder='Plani Info' value={planiM.planiInfo} />
            <Form.Input>
            <select onChange={changeSelectOptionHandler} name='studenti' placeholder='studenti' value={planiM.lendaId}>
            {data.map(lenda => (
                <option value={lenda.lendaId}>{lenda.emri}</option>
            ))}
            </select>
            </Form.Input>
            <Form.Input required onChange={handleInputChange} name='kriteriPlotsimit' placeholder='Kriteri Suksesit'  value={planiM.kriteriPlotsimit} />
            <Button loading={loading} floated='right' positive type='submit' content='Dërgo'/>
            <Button onClick={closeForm} floated='right' type='submit' content='Anulo' />
        </Form>
        </Grid>
    </Segment>
    )
})

