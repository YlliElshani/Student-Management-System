import { observer } from 'mobx-react-lite';
import React, {ChangeEvent, useState} from 'react'
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import { validate } from 'uuid';
import LendaStore from '../../app/stores/lendaStore';
import { useStore } from '../../app/stores/store';


export default observer(function PlaniMForm() {
    const {pMesimorStore,lendaStore,klasaStore} = useStore();
    const {selectedPlaniM, closeForm, createPlaniM, updatePlaniM, loading} = pMesimorStore;
    const { lendetByEmri } = lendaStore;
    const { klasetByEmri } = klasaStore;

    const initialState = selectedPlaniM ?? {
        id: '',
        planiInfo:'',
        klasa:'',
        lenda:'',
        kriteriPlotsimit:''
    }
    

    const [planiM, setPlaniM] = useState(initialState);

    const [selected, setSelected] = React.useState("");


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
            <Form.Input onChange={handleInputChange}  name='planiInfo' placeholder='Plani Mesimor' value={planiM.planiInfo} required />
            <Form.Input>
            <select onChange={changeSelectOptionHandler} name='studenti' placeholder='studenti' value={planiM.lenda} >
                {lendetByEmri.map(lenda => (
                    
                    <option>{lenda.emri}</option>
                ))}
            </select>
            </Form.Input>
            <Form.Input>
            <select onChange={changeSelectOptionHandler} name='studenti' placeholder='studenti' value={planiM.klasa} >
                {klasetByEmri.map(klasa => (
                    
                    <option>{klasa.emriKl}</option>
                ))}
            </select>
            </Form.Input>
            <Form.Input onChange={handleInputChange} name='kriteriPlotsimit' placeholder='Kriteri i Suksesit' required value={planiM.kriteriPlotsimit} />
            <Button loading={loading} floated='right' positive type='submit' content='Dërgo'/>
            <Button onClick={closeForm} floated='right' type='submit' content='Anulo' />
        </Form>
        </Grid>
    </Segment>
    )
})

