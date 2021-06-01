import React from 'react'
import { Button, Dropdown, Form, Grid, Input, Label, Radio, Segment, TextArea } from 'semantic-ui-react'
import { NavBar } from '../nav/NavBar'
import KontrolloTranskripten from './KontrolloTranskripten';
import KontrolloVijushemerin from './KontrolloVijueshmerin';
import './pStyle.css';
const dayOptions = [
    {
        key: '1',
        text: '1',
        value: '1'
    },
    {
        key: '2',
        text: '2',
        value: '2'
    },
    {
        key: '2',
        text: '2',
        value: '2'
    },
    {
        key: 'Shume tjeter',
        text: 'Shume tjeter',
        value: 'Shume tjeter'
    }
]

export const ArsyetoMungesen = () => {
    return (
        <div className="ParentDiv">
            <NavBar/>
            <KontrolloVijushemerin/>
            <div className="FormArsyetoMungesen">
                <Form>
                    <div className="inputet">
                    <Form.Field
                        control={Input}
                            label='First name'
                            placeholder='First name'
                        />
                        <Form.Field
                        control={Input}
                            label='Last name'
                            placeholder='Last name'
                        />
                        <Form.Field
                        control={Input}
                            label='ID e nxenesit'
                            placeholder='ID'
                        />
                    </div>
                    <div className="inputet2">
                    <Dropdown
                        placeholder='Numri i diteve'
                        fluid
                        selection
                        options={dayOptions}
                        />
                        <TextArea placeholder="Arsyeja e Mungeses"/>
                        <Button className="btn">Dergo</Button>
                        <Button className="btn">Kontrollo Ankesen</Button>
                    </div>
                </Form>
            </div>
            <KontrolloTranskripten/>
        </div>
    )
}

export default ArsyetoMungesen;
