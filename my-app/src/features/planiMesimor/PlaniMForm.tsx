import { observer } from 'mobx-react-lite';
import React, {ChangeEvent, useState} from 'react'
import { combineValidators, composeValidators, hasLengthGreaterThan, isRequired } from 'revalidate';
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import { validate } from 'uuid';
import { useStore } from '../../app/stores/store';


export default observer(function PlaniMForm() {
    const {pMesimorStore} = useStore();
    const { lendaStore } = useStore();
    const { lendetByEmri } = lendaStore;
    const { klasaStore } = useStore();
    const { klasetByEmri } = klasaStore;
    const {selectedPlani, closeForm, createPlaniM, updatePlani, loading} = pMesimorStore;

    const initialState = selectedPlani ?? {
        id: '',
        planiInfo: '',
        lenda:'',
        klasa:'',
        kriteriSuksesit: '',
        dataShenimit:''
    }
    

    const [planiM, setPlaniM] = useState(initialState);

    const [selected, setSelected] = React.useState("");


    function handleSubmit () { 
        planiM.id ? updatePlani(planiM) : createPlaniM(planiM);
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
            <Form.TextArea onChange={handleInputChange}  name='planiInfo' placeholder='Plani Mesimor'   value={planiM.planiInfo} />
            <Form.Input>
                <select onChange={changeSelectOptionHandler} name='klasa' placeholder='Klasa' value={planiM.lenda}>
                {lendetByEmri.map(lenda => (
                    
                    <option>{lenda.emri}</option>
                ))}
                </select>
            </Form.Input>
            <br/>
            <Form.Input>
            <select onChange={changeSelectOptionHandler} name='klasa' placeholder='Klasa' value={planiM.klasa}>
            {klasetByEmri.map(klasa => (
                
                <option>{klasa.emriKl}</option>
            ))}
            </select>
            </Form.Input>
            <Form.TextArea onChange={handleInputChange} name='kriteriSuksesit' placeholder='Kriteri Suksesit'  value={planiM.kriteriSuksesit} />
            <Form.Input onChange={handleInputChange} name='dataShenimit' placeholder='Shteti' type='date' value={planiM.dataShenimit} />
            <Button loading={loading} floated='right' positive type='submit' content='Dërgo'/>
            <Button onClick={closeForm} floated='right' type='submit' content='Anulo' />
        </Form>
        </Grid>
    </Segment>
    )
})

